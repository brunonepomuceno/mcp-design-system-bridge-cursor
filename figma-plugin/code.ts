console.log("[MCP] Plugin iniciado");

figma.showUI(__html__, { width: 320, height: 400 });

// Interfaces
interface ButtonData {
  name: string;
  label?: string;
  properties: Record<string, any>;
  styles: {
    backgroundColor?: string;
    borderRadius?: string;
    borderWidth?: string;
    borderColor?: string;
    borderStyle?: string;
    padding?: string;
    fontSize?: string;
    fontWeight?: string;
    color?: string;
    textAlign?: string;
    cursor?: string;
    transition?: string;
    hover?: {
      backgroundColor?: string;
      color?: string;
      borderColor?: string;
    };
    fontFamily?: string;
  };
}

// Mapa para guardar os timers de debounce para cada componente
const debounceTimers = new Map<string, number>();

// Função auxiliar para converter hex para RGB
function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255,
      }
    : { r: 0, g: 0, b: 0 };
}

// Função RECURSIVA para renderizar um nó e seus filhos a partir do JSON
async function renderNode(nodeData: any): Promise<SceneNode | null> {
  if (!nodeData || !nodeData.type) return null;

  let figmaNode: SceneNode | null = null;
  const { type, name, styles, children, characters } = nodeData;

  switch (type) {
    case "FRAME": {
      const frame = figma.createFrame();
      // Aplicar estilos APENAS se eles existirem
      if (styles) {
        if (styles.backgroundColor)
          frame.fills = [
            { type: "SOLID", color: hexToRgb(styles.backgroundColor) },
          ];
        if (styles.borderRadius)
          frame.cornerRadius = parseFloat(styles.borderRadius);
        if (styles.borderWidth && styles.borderColor) {
          frame.strokes = [
            { type: "SOLID", color: hexToRgb(styles.borderColor) },
          ];
          frame.strokeWeight = parseFloat(styles.borderWidth);
        }
      }
      // Aplicar propriedades de auto-layout de forma explícita e segura
      if (nodeData.width) frame.resize(nodeData.width, frame.height);
      if (nodeData.height) frame.resize(frame.width, nodeData.height);
      if (nodeData.layoutMode) frame.layoutMode = nodeData.layoutMode;
      if (nodeData.primaryAxisSizingMode)
        frame.primaryAxisSizingMode = nodeData.primaryAxisSizingMode;
      if (nodeData.counterAxisSizingMode)
        frame.counterAxisSizingMode = nodeData.counterAxisSizingMode;
      if (nodeData.primaryAxisAlignItems)
        frame.primaryAxisAlignItems = nodeData.primaryAxisAlignItems;
      if (nodeData.itemSpacing) frame.itemSpacing = nodeData.itemSpacing;
      if (nodeData.paddingLeft) frame.paddingLeft = nodeData.paddingLeft;
      if (nodeData.paddingRight) frame.paddingRight = nodeData.paddingRight;
      if (nodeData.paddingTop) frame.paddingTop = nodeData.paddingTop;
      if (nodeData.paddingBottom) frame.paddingBottom = nodeData.paddingBottom;

      figmaNode = frame;
      break;
    }
    case "TEXT": {
      const text = figma.createText();
      // Aplicar estilos de texto APENAS se eles existirem
      if (styles) {
        await figma.loadFontAsync({
          family: styles.fontFamily || "Inter",
          style: styles.fontWeight || "Regular",
        });
        if (styles.fontSize) text.fontSize = styles.fontSize;
        if (styles.color)
          text.fills = [{ type: "SOLID", color: hexToRgb(styles.color) }];
      }
      if (characters) text.characters = characters;
      if (nodeData.textAutoResize)
        text.textAutoResize = nodeData.textAutoResize;
      figmaNode = text;
      break;
    }
    default:
      console.warn(`[MCP] Tipo de nó não suportado: ${type}`);
      return null;
  }

  if (name) figmaNode.name = name;
  if (nodeData.layoutGrow !== undefined)
    figmaNode.layoutGrow = nodeData.layoutGrow;
  if (nodeData.primaryAxisSizingMode && "primaryAxisSizingMode" in figmaNode)
    (figmaNode as any).primaryAxisSizingMode = nodeData.primaryAxisSizingMode;

  // Renderizar filhos (a parte recursiva)
  if (children && "appendChild" in figmaNode) {
    for (const childData of children) {
      const childNode = await renderNode(childData);
      if (childNode) {
        (figmaNode as FrameNode | ComponentNode | InstanceNode).appendChild(
          childNode
        );
      }
    }
  }

  return figmaNode;
}

// Função para atualizar o component.json com as alterações do Figma (GENÉRICA)
async function updateComponentJson(frame: FrameNode) {
  try {
    const componentName = frame.getPluginData("componentName");
    if (!componentName) {
      console.log("[MCP] Frame não é um componente gerenciado. Ignorando.");
      return;
    }

    console.log(`[MCP] Iniciando atualização do ${componentName}.json`);

    const apiUrl = `http://localhost:3002/api/component/${componentName}`;

    // Buscar o estado atual do JSON para não perder dados não visuais
    const response = await fetch(apiUrl);
    const currentComponentData = await response.json();

    // Extrair as cores do frame
    const fills = frame.fills as readonly Paint[];
    const backgroundColor =
      fills && fills[0] && fills[0].type === "SOLID"
        ? rgbToHex(fills[0].color.r, fills[0].color.g, fills[0].color.b)
        : currentComponentData.styles?.backgroundColor || "#f2f2f2";

    // Extrair o texto do componente (assumindo que há um nó de texto)
    const titleNode = frame.findOne((node) => node.type === "TEXT") as
      | TextNode
      | undefined;
    const componentLabel = titleNode
      ? titleNode.characters
      : currentComponentData.label || "";

    // Criar um novo objeto com os dados atualizados, mantendo os dados existentes
    const updatedComponentData = {
      ...currentComponentData,
      name: frame.name,
      label: componentLabel,
      styles: {
        ...currentComponentData.styles,
        backgroundColor,
        borderRadius: `${String(frame.cornerRadius)}px`,
        // ... (outras extrações de estilo podem ser adicionadas aqui)
      },
    };

    // Enviar dados atualizados para a API
    const updateResponse = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(updatedComponentData),
    });

    if (!updateResponse.ok) {
      const errorText = await updateResponse.text();
      throw new Error(
        `HTTP error! status: ${updateResponse.status}, message: ${errorText}`
      );
    }

    figma.notify(`${componentName}.json atualizado com sucesso!`);
  } catch (error) {
    console.error("[MCP] Erro ao atualizar component.json:", error);
    figma.notify(
      `Erro ao atualizar ${frame.getPluginData("componentName")}.json`
    );
  }
}

// Função auxiliar para converter RGB para hex
function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) => {
    const hex = Math.round(n * 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Função para aplicar as alterações do código ao Figma
async function applyCodeChangesToFigma(
  frame: FrameNode,
  buttonData: ButtonData
) {
  console.log(
    "[MCP] Aplicando alterações do código ao frame:",
    frame.id,
    "com dados:",
    buttonData
  );
  console.log("[MCP Debug] buttonData.name received:", buttonData.name);
  console.log("[MCP Debug] frame.name BEFORE update:", frame.name);

  // Atualizar nome do frame
  if (buttonData.name) {
    frame.name = buttonData.name;
    console.log("[MCP Debug] frame.name AFTER update:", frame.name);
  }

  // Atualizar o título do botão
  const titleText = frame.findOne(
    (node) => node.name === "Button Title"
  ) as TextNode;
  console.log("[MCP Debug] Found titleText by name:", titleText);
  if (titleText) {
    console.log(
      "[MCP Debug] titleText characters BEFORE update:",
      titleText.characters
    );
    await figma.loadFontAsync(titleText.fontName as FontName);
    // Garantir que label nunca seja undefined ou vazio
    let safeLabel = buttonData.label;
    if (
      !safeLabel ||
      typeof safeLabel !== "string" ||
      safeLabel.trim() === ""
    ) {
      console.error(
        "[MCP] label do botão está vazio ou indefinido na atualização! Usando fallback 'Button'. Dados recebidos:",
        buttonData
      );
      safeLabel = "Button";
    }
    if (titleText.characters !== safeLabel) {
      titleText.characters = safeLabel;
      console.log(
        "[MCP Debug] titleText characters AFTER update:",
        titleText.characters
      );
    } else {
      console.log("[MCP Debug] label já está sincronizado, não atualizando.");
    }
    // Log para garantir separação
    console.log(
      "[MCP Debug] frame.name:",
      frame.name,
      "titleText.characters:",
      titleText.characters
    );
  } else {
    console.log(
      '[MCP Debug] Title text node (named "Button Title") NOT FOUND!'
    );
  }

  // Atualizar estilos
  if (buttonData.styles) {
    // Background color
    if (buttonData.styles.backgroundColor) {
      const hex = buttonData.styles.backgroundColor;
      const rgb = hexToRgb(hex);
      frame.fills = [{ type: "SOLID", color: rgb }];
    }

    // Border radius
    if (buttonData.styles.borderRadius) {
      const borderRadiusPx = parseFloat(
        buttonData.styles.borderRadius.replace("px", "")
      );
      if (!isNaN(borderRadiusPx)) {
        frame.cornerRadius = borderRadiusPx;
      }
    }

    // Border
    if (buttonData.styles.borderWidth) {
      const borderWidth = parseFloat(
        buttonData.styles.borderWidth.replace("px", "")
      );
      if (!isNaN(borderWidth)) {
        frame.strokeWeight = borderWidth;
      }
    }

    if (buttonData.styles.borderColor) {
      const hex = buttonData.styles.borderColor;
      const rgb = hexToRgb(hex);
      frame.strokes = [{ type: "SOLID", color: rgb }];
    }

    // Padding
    if (buttonData.styles.padding) {
      const paddingValues = buttonData.styles.padding
        .split(" ")
        .map((v) => parseFloat(v.replace("px", "")));
      if (paddingValues.length === 4) {
        frame.paddingTop = paddingValues[0];
        frame.paddingRight = paddingValues[1];
        frame.paddingBottom = paddingValues[2];
        frame.paddingLeft = paddingValues[3];
      }
    }

    // Text styles
    const textNodes = frame.findAll(
      (node) => node.type === "TEXT"
    ) as TextNode[];
    if (textNodes.length > 0) {
      const textNode = textNodes[0];

      if (buttonData.styles.fontSize) {
        const fontSize = parseFloat(
          buttonData.styles.fontSize.replace("px", "")
        );
        if (!isNaN(fontSize)) {
          textNode.fontSize = fontSize;
        }
      }

      if (buttonData.styles.fontWeight) {
        try {
          const currentFont = textNode.fontName as FontName;
          const fontName = {
            family: currentFont.family,
            style:
              buttonData.styles.fontWeight === "400"
                ? "Regular"
                : buttonData.styles.fontWeight === "700"
                  ? "Bold"
                  : "Regular",
          };
          await figma.loadFontAsync(fontName);
          textNode.fontName = fontName;
        } catch (error) {
          console.log(
            "[MCP] Erro ao carregar fonte com peso:",
            buttonData.styles.fontWeight
          );
        }
      }

      if (buttonData.styles.color) {
        const hex = buttonData.styles.color;
        const rgb = hexToRgb(hex);
        textNode.fills = [{ type: "SOLID", color: rgb }];
      }

      if (buttonData.styles.fontFamily) {
        try {
          const fontName = {
            family: buttonData.styles.fontFamily,
            style: "Regular",
          };
          await figma.loadFontAsync(fontName);
          textNode.fontName = fontName;
        } catch (error) {
          console.log(
            "[MCP] Erro ao carregar fonte:",
            buttonData.styles.fontFamily
          );
        }
      }
    }
  }

  console.log("[MCP] Todas as alterações foram aplicadas com sucesso.");
  figma.notify("Botão atualizado do código!", { timeout: 5000 });
}

// Adicionar listener para mensagens da UI
figma.ui.onmessage = async (msg) => {
  console.log("[MCP] Mensagem recebida da UI:", msg);

  if (msg.type === "fetch-component-json" && msg.componentName) {
    try {
      const response = await fetch(
        `http://localhost:3002/api/component/${msg.componentName}`,
        {
          cache: "reload",
        }
      );
      const componentData = await response.json();
      console.log(
        `[MCP] Dados do componente ${msg.componentName} recebidos:`,
        componentData
      );

      // Usar o novo renderizador recursivo, começando pelo nó raiz do JSON
      const rootNode = await renderNode(componentData.node);

      if (rootNode) {
        // Centralizar o novo componente na viewport
        figma.viewport.scrollAndZoomIntoView([rootNode]);

        // A lógica de sincronização precisará ser atualizada para lidar com a nova estrutura
        rootNode.setPluginData("isComponent", "true");
        rootNode.setPluginData("componentName", msg.componentName);
        figma.notify(`${msg.componentName} criado com sucesso!`);
      } else {
        throw new Error("Falha ao renderizar o nó raiz do componente.");
      }
    } catch (error: any) {
      console.error(
        `[MCP] Erro ao criar componente ${msg.componentName}:`,
        error
      );
      figma.notify(`Erro ao criar componente ${msg.componentName}`);
    }
  }
};

// A lógica de polling antiga pode ser removida completamente, pois 'documentchange' é mais eficiente.
