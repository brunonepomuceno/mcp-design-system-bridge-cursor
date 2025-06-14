console.log('[MCP] Plugin iniciado');

figma.showUI(__html__, { width: 320, height: 400 });

// Interfaces
interface ButtonData {
  name: string;
  description: string;
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

// Variável para controlar se o plugin está aplicando mudanças do código
let isApplyingCodeChanges = false;

// Função auxiliar para converter hex para RGB
function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16) / 255,
    g: parseInt(result[2], 16) / 255,
    b: parseInt(result[3], 16) / 255
  } : { r: 0, g: 0, b: 0 };
}

// Função para criar o botão no Figma
async function createButtonInFigma(buttonData: ButtonData) {
  try {
    console.log('[MCP] Iniciando criação do botão no Figma', buttonData);

    // Criar um frame para o botão
    const frame = figma.createFrame();
    frame.name = buttonData.name;
    frame.resize(300, 120); // Aumentado para acomodar mais informações
    frame.x = 0;
    frame.y = 0;
    frame.fills = [{ type: 'SOLID', color: { r: 0.95, g: 0.95, b: 0.95 } }]; // Fundo cinza claro
    frame.cornerRadius = 8;
    console.log('[MCP] Frame criado');

    // Tentar carregar a fonte Inter
    let fontName = { family: "Inter", style: "Regular" };
    try {
      console.log('[MCP] Tentando carregar fonte Inter');
      await figma.loadFontAsync(fontName);
    } catch (error) {
      console.log('[MCP] Erro ao carregar Inter, tentando fonte alternativa');
      // Se Inter não estiver disponível, usar a primeira fonte do sistema
      const availableFonts = await figma.listAvailableFontsAsync();
      const systemFont = availableFonts.find(f => !f.fontName.family.startsWith('.'));
      if (systemFont) {
        fontName = systemFont.fontName;
        await figma.loadFontAsync(fontName);
        console.log('[MCP] Usando fonte alternativa:', fontName);
      } else {
        throw new Error('Nenhuma fonte disponível');
      }
    }

    // Criar título
    const titleText = figma.createText();
    titleText.characters = buttonData.name;
    titleText.name = 'Button Title';
    titleText.fontName = fontName;
    titleText.fontSize = 20;
    titleText.x = 20;
    titleText.y = 20;
    titleText.fills = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
    frame.appendChild(titleText);

    // Criar descrição
    const descriptionText = figma.createText();
    descriptionText.characters = buttonData.description;
    descriptionText.name = 'Button Description';
    descriptionText.fontName = fontName;
    descriptionText.fontSize = 14;
    descriptionText.x = 20;
    descriptionText.y = 50;
    descriptionText.fills = [{ type: 'SOLID', color: { r: 0.4, g: 0.4, b: 0.4 } }];
    frame.appendChild(descriptionText);

    // Criar informações das props
    const propsText = figma.createText();
    propsText.characters = `${Object.keys(buttonData.properties).length} propriedades`;
    propsText.name = 'Button Properties';
    propsText.fontName = fontName;
    propsText.fontSize = 12;
    propsText.x = 20;
    propsText.y = 80;
    propsText.fills = [{ type: 'SOLID', color: { r: 0.6, g: 0.6, b: 0.6 } }];
    frame.appendChild(propsText);

    // Adicionar auto-layout
    frame.layoutMode = "VERTICAL";
    frame.primaryAxisAlignItems = "MIN";
    frame.counterAxisAlignItems = "MIN";
    frame.paddingLeft = 20;
    frame.paddingRight = 20;
    frame.paddingTop = 20;
    frame.paddingBottom = 20;
    frame.itemSpacing = 10;

    // Centralizar o frame na viewport
    figma.viewport.scrollAndZoomIntoView([frame]);

    console.log('[MCP] Botão criado com sucesso');
    return frame;
  } catch (error) {
    console.error('[MCP] Erro ao criar botão:', error);
    throw error;
  }
}

// Função para atualizar o button.json com as alterações do Figma
async function updateButtonJson(frame: FrameNode) {
  try {
    console.log('[MCP] Iniciando atualização do button.json');

    // Obter a referência mais atualizada do frame do Figma
    const currentFrame = figma.currentPage.findOne(node => node.id === frame.id) as FrameNode;
    if (!currentFrame) {
      console.error('[MCP] Frame do botão não encontrado na página atual durante a atualização!');
      figma.notify('Erro: Frame do botão não encontrado para atualizar JSON.');
      return;
    }

    // Primeiro, buscar o estado atual do button.json
    const response = await fetch('http://localhost:3001/api/button');
    const currentButtonData = await response.json();
    console.log('[MCP Debug] Estado atual do button.json ANTES da atualização:', currentButtonData);

    // Encontrar os nós de texto para extração
    const titleTextNode = currentFrame.findOne(node => node.name === 'Button Title') as TextNode;
    const descriptionTextNode = currentFrame.findOne(node => node.name === 'Button Description') as TextNode;
    const propsTextNode = currentFrame.findOne(node => node.name === 'Button Properties') as TextNode;

    // Extrair o texto principal do botão (que mapeia para buttonData.name no JSON)
    let buttonName = currentButtonData.name; // Padrão para o nome atual do JSON
    if (titleTextNode) {
      await figma.loadFontAsync(titleTextNode.fontName as FontName); // Certificar que a fonte está carregada
      buttonName = titleTextNode.characters;
      console.log('[MCP Debug] Texto do Título do Figma lido (para buttonData.name no JSON):', buttonName); // Debug log atualizado
    } else {
      console.log('[MCP Debug] Nó de título (Button Title) NÃO encontrado. Usando nome do JSON existente para buttonData.name.');
    }

    // Extrair o texto da descrição
    let description = currentButtonData.description; // Padrão para a descrição atual do JSON
    if (descriptionTextNode) {
      await figma.loadFontAsync(descriptionTextNode.fontName as FontName); // Certificar que a fonte está carregada
      description = descriptionTextNode.characters;
      console.log('[MCP Debug] Conteúdo da Descrição do Figma lido:', description); // Debug log
    } else {
      console.log('[MCP Debug] Nó de descrição (Button Description) NÃO encontrado. Usando descrição do JSON existente.');
    }

    // Extrair outras propriedades do frame (estilos)
    const fills = currentFrame.fills as readonly Paint[];
    const backgroundColor = fills && fills[0] && fills[0].type === 'SOLID'
      ? `#${Math.round(fills[0].color.r * 255).toString(16).padStart(2, '0')}${Math.round(fills[0].color.g * 255).toString(16).padStart(2, '0')}${Math.round(fills[0].color.b * 255).toString(16).padStart(2, '0')}`
      : (currentButtonData.styles && currentButtonData.styles.backgroundColor) || '#f2f2f2';

    const strokes = currentFrame.strokes as readonly Paint[];
    const borderColor = strokes && strokes[0] && strokes[0].type === 'SOLID'
      ? `#${Math.round(strokes[0].color.r * 255).toString(16).padStart(2, '0')}${Math.round(strokes[0].color.g * 255).toString(16).padStart(2, '0')}${Math.round(strokes[0].color.b * 255).toString(16).padStart(2, '0')}`
      : (currentButtonData.styles && currentButtonData.styles.borderColor) || '#000000';

    let fontSize = '14px';
    let fontWeight = 'normal';
    let fontFamily = 'Inter';
    let color = (currentButtonData.styles && currentButtonData.styles.color) || '#000000';
    let textAlign = (currentButtonData.styles && currentButtonData.styles.textAlign) || 'center';

    if (titleTextNode) { // Usar o nó do título como referência para estilos de texto
      if (titleTextNode.fontSize) { fontSize = String(titleTextNode.fontSize) + 'px'; }
      if (titleTextNode.fontWeight) { fontWeight = String(titleTextNode.fontWeight); }
      if (titleTextNode.fontName) {
        const fontName = titleTextNode.fontName as FontName;
        try { await figma.loadFontAsync(fontName); fontFamily = fontName.family; }
        catch (error) { console.log('[MCP] Erro ao carregar fonte para extração:', fontName.family, 'usando fallback'); }
      }
      if (titleTextNode.fills) {
        const textFills = titleTextNode.fills as readonly Paint[];
        if (textFills[0] && textFills[0].type === 'SOLID') {
          color = `#${Math.round(textFills[0].color.r * 255).toString(16).padStart(2, '0')}${Math.round(textFills[0].color.g * 255).toString(16).padStart(2, '0')}${Math.round(textFills[0].color.b * 255).toString(16).padStart(2, '0')}`;
        }
      }
      if (titleTextNode.textAlignHorizontal) {
        const textAlignMap: { [key: string]: string } = {'LEFT': 'left','CENTER': 'center','RIGHT': 'right','JUSTIFIED': 'justify'};
        textAlign = textAlignMap[titleTextNode.textAlignHorizontal] || 'center';
      }
    }

    // Criar um novo objeto com os dados atualizados, mantendo os dados existentes
    const updatedButtonData = Object.assign({}, currentButtonData, {
      name: buttonName, // Agora mapeado para o texto do título
      description: description, // Extraído do nó de descrição
      properties: currentButtonData.properties || {}, // Manter as propriedades existentes
      styles: Object.assign({}, currentButtonData.styles, {
        backgroundColor,
        borderRadius: `${String(currentFrame.cornerRadius)}px`,
        borderWidth: `${String(currentFrame.strokeWeight)}px`,
        borderColor,
        borderStyle: (currentButtonData.styles && currentButtonData.styles.borderStyle) || 'solid',
        padding: `${String(currentFrame.paddingTop)}px ${String(currentFrame.paddingRight)}px ${String(currentFrame.paddingBottom)}px ${String(currentFrame.paddingLeft)}px`,
        fontSize,
        fontWeight,
        fontFamily,
        color,
        textAlign,
        cursor: (currentButtonData.styles && currentButtonData.styles.cursor) || 'pointer',
        transition: (currentButtonData.styles && currentButtonData.styles.transition) || 'all 0.2s ease-in-out',
        hover: Object.assign({},
          (currentButtonData.styles && currentButtonData.styles.hover) || {},
          {
            backgroundColor: (currentButtonData.styles && currentButtonData.styles.hover && currentButtonData.styles.hover.backgroundColor) || '',
            color: (currentButtonData.styles && currentButtonData.styles.hover && currentButtonData.styles.hover.color) || '',
            borderColor: (currentButtonData.styles && currentButtonData.styles.hover && currentButtonData.styles.hover.borderColor) || '',
          }
        )
      })
    });

    // Log detalhado do objeto antes de enviar
    console.log('[MCP] Objeto a ser enviado (do Figma para JSON):', JSON.stringify(updatedButtonData, null, 2));

    // Enviar dados atualizados para a API
    try {
      const updateResponse = await fetch('http://localhost:3001/api/button', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(updatedButtonData)
      });

      if (!updateResponse.ok) {
        const errorText = await updateResponse.text();
        console.error('[MCP] Resposta do servidor:', errorText);
        throw new Error(`HTTP error! status: ${updateResponse.status}, message: ${errorText}`);
      }

      const responseData = await updateResponse.json();
      console.log('[MCP] Resposta do servidor:', responseData);
      console.log('[MCP] Button.json atualizado com sucesso');
      figma.notify('Button.json atualizado com sucesso!');
    } catch (error: any) {
      console.error('[MCP] Erro ao atualizar button.json:', error);
      figma.notify('Erro ao atualizar button.json: ' + (error.message || 'Erro desconhecido'));
    }

    // Enviar dados atualizados para a UI
    figma.ui.postMessage({
      type: 'update-button-json',
      data: updatedButtonData
    });

    console.log('[MCP] Dados do botão extraídos:', updatedButtonData);
  } catch (error) {
    console.error('[MCP] Erro ao atualizar button.json:', error);
    figma.notify('Erro ao atualizar button.json');
  }
}

// Função auxiliar para converter RGB para hex
function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) => {
    const hex = Math.round(n * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Função para aplicar as alterações do código ao Figma
async function applyCodeChangesToFigma(frame: FrameNode, buttonData: ButtonData) {
  isApplyingCodeChanges = true; // Definir a flag como true no início
  try {
    console.log('[MCP] Aplicando alterações do código ao frame:', frame.id, 'com dados:', buttonData);
    console.log('[MCP Debug] buttonData.name received:', buttonData.name);
    console.log('[MCP Debug] frame.name BEFORE update:', frame.name);

    // Atualizar nome do frame
    if (buttonData.name) {
      frame.name = buttonData.name;
      console.log('[MCP Debug] frame.name AFTER update:', frame.name);

      // Atualizar o título do botão
      const titleText = frame.findOne(node => node.name === 'Button Title') as TextNode;
      console.log('[MCP Debug] Found titleText by name:', titleText);
      if (titleText) {
        console.log('[MCP Debug] titleText characters BEFORE update:', titleText.characters);
        await figma.loadFontAsync(titleText.fontName as FontName); // Certificar que a fonte está carregada
        titleText.characters = buttonData.name;
        console.log('[MCP Debug] titleText characters AFTER update:', titleText.characters);
      } else {
        console.log('[MCP Debug] Title text node (named "Button Title") NOT FOUND!');
      }
    } else {
      console.log('[MCP Debug] buttonData.name is undefined or empty. Skipping frame name and title text update.');
    }

    // Atualizar descrição
    const descriptionText = frame.findOne(node => node.name === 'Button Description') as TextNode;
    console.log('[MCP Debug] Found descriptionText by name:', descriptionText);
    if (descriptionText && buttonData.description) {
      console.log('[MCP Debug] descriptionText characters BEFORE update:', descriptionText.characters);
      await figma.loadFontAsync(descriptionText.fontName as FontName); // Certificar que a fonte está carregada
      descriptionText.characters = buttonData.description;
      console.log('[MCP Debug] descriptionText characters AFTER update:', descriptionText.characters);
    } else {
      console.log('[MCP Debug] Description text node (named "Button Description") NOT FOUND, or buttonData.description is undefined/empty.');
    }

    // Atualizar informações das props
    const propsText = frame.findOne(node => node.name === 'Button Properties') as TextNode;
    console.log('[MCP Debug] Found propsText by name:', propsText);
    if (propsText && buttonData.properties) {
      console.log('[MCP Debug] propsText characters BEFORE update:', propsText.characters);
      await figma.loadFontAsync(propsText.fontName as FontName); // Garantir que a fonte seja carregada para o texto de propriedades
      propsText.characters = `${Object.keys(buttonData.properties).length} propriedades`;
      console.log('[MCP Debug] propsText characters AFTER update:', propsText.characters);
    } else {
      console.log('[MCP Debug] Properties text node (named "Button Properties") NOT FOUND, or buttonData.properties is undefined/empty.');
    }

    // Atualizar estilos
    if (buttonData.styles) {
      // Background color
      if (buttonData.styles.backgroundColor) {
        const hex = buttonData.styles.backgroundColor;
        const rgb = hexToRgb(hex);
        frame.fills = [{ type: 'SOLID', color: rgb }];
      }

      // Border radius
      if (buttonData.styles.borderRadius) {
        const borderRadiusPx = parseFloat(buttonData.styles.borderRadius.replace('px', ''));
        if (!isNaN(borderRadiusPx)) {
          frame.cornerRadius = borderRadiusPx;
        }
      }

      // Border width and color
      if (buttonData.styles.borderWidth) {
        const borderWidth = parseFloat(buttonData.styles.borderWidth.replace('px', ''));
        if (!isNaN(borderWidth)) {
          frame.strokeWeight = borderWidth;
        }
      }

      if (buttonData.styles.borderColor) {
        const hex = buttonData.styles.borderColor;
        const rgb = hexToRgb(hex);
        frame.strokes = [{ type: 'SOLID', color: rgb }];
      }

      // Border style (solid/dashed) - Figma does not directly support strokeDashes on FrameNodes
      // if (buttonData.styles.borderStyle) {
      //   if (buttonData.styles.borderStyle === 'dashed') {
      //     frame.strokeDashes = [5, 5]; // Exemplo de dash pattern
      //   } else if (buttonData.styles.borderStyle === 'solid') {
      //     frame.strokeDashes = []; // Sem dashes para sólido
      //   }
      // }

      // Padding (assumes auto-layout)
      if (buttonData.styles.padding) {
        const paddingValues = buttonData.styles.padding.split(' ').map(v => parseFloat(v.replace('px', '')));
        if (paddingValues.length === 4) {
          frame.paddingTop = paddingValues[0];
          frame.paddingRight = paddingValues[1];
          frame.paddingBottom = paddingValues[2];
          frame.paddingLeft = paddingValues[3];
        }
      }

      // Text styles (apply to the main title text node and description, if desired)
      const mainTextNode = frame.findOne(node => node.name === 'Button Title') as TextNode;
      const descriptionTextNodeForStyles = frame.findOne(node => node.name === 'Button Description') as TextNode;

      // Apply common text styles to both title and description for now
      const textNodesToStyle = [mainTextNode, descriptionTextNodeForStyles].filter(Boolean) as TextNode[];

      for (const textNode of textNodesToStyle) {
        if (buttonData.styles.fontSize) {
          const fontSize = parseFloat(buttonData.styles.fontSize.replace('px', ''));
          if (!isNaN(fontSize)) {
            await figma.loadFontAsync(textNode.fontName as FontName); // Certificar que a fonte está carregada
            textNode.fontSize = fontSize;
          }
        }

        if (buttonData.styles.fontWeight) {
          try {
            const currentFont = textNode.fontName as FontName;
            const fontName = {
              family: currentFont.family,
              style: buttonData.styles.fontWeight === '400' ? 'Regular' :
                     buttonData.styles.fontWeight === '700' ? 'Bold' : 'Regular'
            };
            await figma.loadFontAsync(fontName);
            textNode.fontName = fontName;
          } catch (error) {
            console.log('[MCP] Erro ao carregar fonte com peso:', buttonData.styles.fontWeight);
          }
        }

        if (buttonData.styles.color) {
          const hex = buttonData.styles.color;
          const rgb = hexToRgb(hex);
          await figma.loadFontAsync(textNode.fontName as FontName); // Certificar que a fonte está carregada
          textNode.fills = [{ type: 'SOLID', color: rgb }];
        }

        if (buttonData.styles.fontFamily) {
          try {
            const fontName = { family: buttonData.styles.fontFamily, style: 'Regular' };
            await figma.loadFontAsync(fontName);
            textNode.fontName = fontName;
          } catch (error) {
            console.log('[MCP] Erro ao carregar fonte:', buttonData.styles.fontFamily);
          }
        }

        if (buttonData.styles.textAlign) {
          const textAlignMap: { [key: string]: 'LEFT' | 'CENTER' | 'RIGHT' | 'JUSTIFIED' } = {
            'left': 'LEFT',
            'center': 'CENTER',
            'right': 'RIGHT',
            'justify': 'JUSTIFIED'
          };
          const figmaTextAlign = textAlignMap[buttonData.styles.textAlign.toLowerCase()];
          if (figmaTextAlign) {
            await figma.loadFontAsync(textNode.fontName as FontName); // Certificar que a fonte está carregada
            textNode.textAlignHorizontal = figmaTextAlign;
          }
        }
      }

      // Propriedades que não têm mapeamento direto ou são mais complexas:
      // cursor, transition, hover - Figma não tem suporte nativo para isso em propriedades de nó.
      // As propriedades dentro de 'properties' no JSON são apenas textuais por enquanto e não afetam o Figma visualmente.
    }

    console.log('[MCP] Todas as alterações foram aplicadas com sucesso.');
  } finally {
    isApplyingCodeChanges = false; // Garantir que a flag seja redefinida no final
  }
}

// Função para criar um input no Figma
async function createInput(data: any) {
  try {
    console.log('[MCP] Criando input com dados:', data);

    // Criar o frame principal
    const frame = figma.createFrame();
    frame.name = 'Input';
    frame.resize(300, 80);
    frame.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    frame.cornerRadius = 4;
    frame.strokes = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
    frame.strokeWeight = 1;

    // Criar o texto do label
    const labelText = figma.createText();
    await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
    labelText.name = 'Input Label';
    labelText.characters = data.label || '';
    labelText.fontSize = 14;
    labelText.x = 0;
    labelText.y = -20;
    frame.appendChild(labelText);

    // Criar o texto do input
    const inputText = figma.createText();
    inputText.name = 'Input Text';
    inputText.characters = data.value || data.placeholder || '';
    inputText.fontSize = 14;
    inputText.x = 12;
    inputText.y = 12;
    frame.appendChild(inputText);

    // Criar o texto de erro/helper
    const helperText = figma.createText();
    helperText.name = 'Input Helper';
    helperText.characters = data.error || data.helperText || '';
    helperText.fontSize = 12;
    helperText.x = 0;
    helperText.y = frame.height + 4;
    frame.appendChild(helperText);

    // Aplicar estilos baseados no tamanho
    const sizeStyles = {
      sm: { height: 32, fontSize: 12, padding: 6 },
      md: { height: 40, fontSize: 14, padding: 8 },
      lg: { height: 48, fontSize: 16, padding: 10 }
    } as const;

    const size = sizeStyles[(data.size as keyof typeof sizeStyles) || 'md'];
    frame.resize(frame.width, size.height);
    inputText.fontSize = size.fontSize;
    inputText.y = size.padding;

    // Aplicar estados
    if (data.disabled) {
      frame.fills = [{ type: 'SOLID', color: { r: 0.95, g: 0.95, b: 0.95 } }];
      inputText.fills = [{ type: 'SOLID', color: { r: 0.6, g: 0.6, b: 0.6 } }];
    }

    if (data.error) {
      frame.strokes = [{ type: 'SOLID', color: { r: 0.9, g: 0.2, b: 0.2 } }];
      helperText.fills = [{ type: 'SOLID', color: { r: 0.9, g: 0.2, b: 0.2 } }];
    }

    // Ajustar o tamanho do frame para acomodar o helper text
    if (helperText.characters) {
      frame.resize(frame.width, frame.height + 20);
    }

    console.log('[MCP] Input criado com sucesso');
    return frame;
  } catch (error) {
    console.error('[MCP] Erro ao criar input:', error);
    figma.notify('Erro ao criar input');
    return null;
  }
}

// Função para atualizar o input no Figma
async function updateInput(frame: FrameNode, data: any) {
  try {
    console.log('[MCP] Atualizando input com dados:', data);

    // Encontrar os nós de texto
    const labelText = frame.findOne(node => node.name === 'Input Label') as TextNode;
    const inputText = frame.findOne(node => node.name === 'Input Text') as TextNode;
    const helperText = frame.findOne(node => node.name === 'Input Helper') as TextNode;

    // Atualizar o texto do label
    if (labelText) {
      await figma.loadFontAsync(labelText.fontName as FontName);
      labelText.characters = data.label || '';
    }

    // Atualizar o texto do input
    if (inputText) {
      await figma.loadFontAsync(inputText.fontName as FontName);
      inputText.characters = data.value || data.placeholder || '';
    }

    // Atualizar o texto de erro/helper
    if (helperText) {
      await figma.loadFontAsync(helperText.fontName as FontName);
      helperText.characters = data.error || data.helperText || '';
    }

    // Aplicar estilos baseados no tamanho
    const sizeStyles = {
      sm: { height: 32, fontSize: 12, padding: 6 },
      md: { height: 40, fontSize: 14, padding: 8 },
      lg: { height: 48, fontSize: 16, padding: 10 }
    } as const;

    const size = sizeStyles[(data.size as keyof typeof sizeStyles) || 'md'];
    frame.resize(frame.width, size.height);
    if (inputText) {
      inputText.fontSize = size.fontSize;
      inputText.y = size.padding;
    }

    // Aplicar estados
    if (data.disabled) {
      frame.fills = [{ type: 'SOLID', color: { r: 0.95, g: 0.95, b: 0.95 } }];
      if (inputText) {
        inputText.fills = [{ type: 'SOLID', color: { r: 0.6, g: 0.6, b: 0.6 } }];
      }
    } else {
      frame.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
      if (inputText) {
        inputText.fills = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
      }
    }

    if (data.error) {
      frame.strokes = [{ type: 'SOLID', color: { r: 0.9, g: 0.2, b: 0.2 } }];
      if (helperText) {
        helperText.fills = [{ type: 'SOLID', color: { r: 0.9, g: 0.2, b: 0.2 } }];
      }
    } else {
      frame.strokes = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
      if (helperText) {
        helperText.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.5 } }];
      }
    }

    // Ajustar o tamanho do frame para acomodar o helper text
    if (helperText && helperText.characters) {
      frame.resize(frame.width, frame.height + 20);
    }

    console.log('[MCP] Input atualizado com sucesso');
  } catch (error) {
    console.error('[MCP] Erro ao atualizar input:', error);
    figma.notify('Erro ao atualizar input');
  }
}

// Atualizar o handler de mensagens para incluir o Input
figma.ui.onmessage = async (msg) => {
  if (msg.type === 'create-component') {
    if (msg.component === 'Button') {
      const frame = await createButtonInFigma(msg.data);
      if (frame) {
        figma.currentPage.appendChild(frame);
        figma.viewport.scrollAndZoomIntoView([frame]);
      }
    } else if (msg.component === 'Input') {
      const frame = await createInput(msg.data);
      if (frame) {
        figma.currentPage.appendChild(frame);
        figma.viewport.scrollAndZoomIntoView([frame]);
      }
    }
  } else if (msg.type === 'update-component') {
    if (msg.component === 'Button') {
      await updateButtonJson(msg.frame);
    } else if (msg.component === 'Input') {
      await updateInput(msg.frame, msg.data);
    }
  }
};

// Variável para armazenar o último timestamp conhecido do button.json
let lastButtonJsonTimestamp = 0;

// Função de polling para verificar mudanças no button.json
async function pollButtonJsonChanges() {
  try {
    const response = await fetch('http://localhost:3001/api/button/last-modified');
    if (!response.ok) {
      console.error('[MCP] Erro ao buscar timestamp do button.json:', response.status);
      return;
    }
    const data = await response.json();
    const currentTimestamp = data.timestamp;

    if (currentTimestamp > lastButtonJsonTimestamp) {
      console.log('[MCP] button.json mudou. Buscando novos dados...');
      lastButtonJsonTimestamp = currentTimestamp;

      // Buscar os dados do button.json
      const buttonDataResponse = await fetch('http://localhost:3001/api/button');
      if (!buttonDataResponse.ok) {
        console.error('[MCP] Erro ao buscar button.json para aplicar:', buttonDataResponse.status);
        return;
      }
      const updatedButtonData = await buttonDataResponse.json();
      console.log('[MCP] Novos dados do button.json recebidos:', updatedButtonData);

      // Encontrar o frame do botão no Figma e aplicar as mudanças
      const buttonFrame = figma.currentPage.findAll(node => node.getPluginData('isButton') === 'true')[0] as FrameNode | undefined;

      if (buttonFrame) {
        await applyCodeChangesToFigma(buttonFrame, updatedButtonData);
        figma.notify('Botão atualizado do código!');
      } else {
        console.log('[MCP] Frame do botão não encontrado no Figma para aplicar atualizações.');
      }
    }
  } catch (error: any) {
    console.error('[MCP] Erro no polling de button.json:', error);
  }
}

// Iniciar o polling (a cada 2 segundos, por exemplo)
const pollingInterval = setInterval(pollButtonJsonChanges, 2000);

// Limpar o interval quando o plugin for fechado
figma.on('close', () => {
  console.log('[MCP] Plugin fechado. Parando polling.');
  clearInterval(pollingInterval);
});
