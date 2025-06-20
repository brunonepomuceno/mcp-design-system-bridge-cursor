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

// Função para criar o componente no Figma (versão inicial generalizada)
async function createComponentInFigma(componentData: ButtonData) {
  // Reutilizando a interface por enquanto
  try {
    console.log(
      "[MCP] Iniciando criação do componente no Figma",
      componentData
    );

    // Criar um frame para o componente
    let initialBg = { r: 0.95, g: 0.95, b: 0.95 }; // Fundo padrão
    if (componentData.styles && componentData.styles.backgroundColor) {
      const hex = componentData.styles.backgroundColor;
      const rgb = hexToRgb(hex); // Supondo que hexToRgb exista
      initialBg = rgb;
    }
    const frame = figma.createFrame();
    frame.name = componentData.name || "Component"; // Usar o nome do JSON
    frame.x = 0;
    frame.y = 0;
    frame.fills = [{ type: "SOLID", color: initialBg }];
    frame.cornerRadius = 8;
    console.log("[MCP] Frame criado");

    // Auto-layout horizontal e hug contents
    frame.layoutMode = "HORIZONTAL";
    frame.primaryAxisSizingMode = "AUTO";
    frame.counterAxisSizingMode = "AUTO";
    frame.paddingLeft = 20;
    frame.paddingRight = 20;
    frame.paddingTop = 20;
    frame.paddingBottom = 20;
    frame.itemSpacing = 10;

    // Tentar carregar a fonte
    let fontName = { family: "Inter", style: "Regular" };
    try {
      await figma.loadFontAsync(fontName);
    } catch (error) {
      console.log("[MCP] Erro ao carregar Inter, tentando fonte alternativa");
      const availableFonts = await figma.listAvailableFontsAsync();
      const systemFont = availableFonts.find(
        (f) => !f.fontName.family.startsWith(".")
      );
      if (systemFont) {
        fontName = systemFont.fontName;
        await figma.loadFontAsync(fontName);
      } else {
        throw new Error("Nenhuma fonte disponível");
      }
    }

    // Criar texto
    const titleText = figma.createText();
    await figma.loadFontAsync(fontName);
    titleText.fontName = fontName;
    titleText.fontSize = 20;
    titleText.fills = [{ type: "SOLID", color: { r: 0.2, g: 0.2, b: 0.2 } }];

    let safeLabel = componentData.label;
    if (
      !safeLabel ||
      typeof safeLabel !== "string" ||
      safeLabel.trim() === ""
    ) {
      safeLabel = componentData.name || "Label"; // Fallback para o nome do componente
    }
    titleText.characters = safeLabel;

    frame.appendChild(titleText);

    // Centralizar o frame na viewport
    figma.viewport.scrollAndZoomIntoView([frame]);

    console.log("[MCP] Componente criado com sucesso");
    return frame;
  } catch (error) {
    console.error("[MCP] Erro ao criar componente:", error);
    throw error;
  }
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

  // Lógica atualizada para ser genérica
  if (msg.type === "fetch-component-json" && msg.componentName) {
    try {
      // Buscar dados do componente da nova API genérica
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

      // Criar o componente no Figma
      const frame = await createComponentInFigma(componentData);

      // Ativar a sincronização de volta para o código para este novo componente
      frame.setPluginData("isComponent", "true");
      frame.setPluginData("componentName", msg.componentName);

      figma.on("documentchange", (event) => {
        for (const change of event.documentChanges) {
          // Checar se a mudança foi no frame do nosso componente
          if (
            change.type === "PROPERTY_CHANGE" &&
            change.node.id === frame.id
          ) {
            // Limpar timer antigo se existir
            const existingTimeout = debounceTimers.get(frame.id);
            if (existingTimeout) {
              clearTimeout(existingTimeout);
            }

            // Criar um novo timer e guardar no Map
            const newTimeout = setTimeout(() => {
              updateComponentJson(frame);
              debounceTimers.delete(frame.id); // Limpar o timer do Map após executar
            }, 500); // Atraso de 500ms

            debounceTimers.set(frame.id, newTimeout);
          }
        }
      });

      figma.notify(`${msg.componentName} criado com sucesso!`);
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
