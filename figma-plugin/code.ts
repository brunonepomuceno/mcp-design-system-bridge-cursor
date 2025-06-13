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

    // Primeiro, buscar o estado atual do button.json
    const response = await fetch('http://localhost:3001/api/button');
    const currentButtonData = await response.json();
    console.log('[MCP] Estado atual do button.json:', currentButtonData);

    // Extrair as cores do frame
    const fills = frame.fills as readonly Paint[];
    const backgroundColor = fills && fills[0] && fills[0].type === 'SOLID' 
      ? `#${Math.round(fills[0].color.r * 255).toString(16).padStart(2, '0')}${Math.round(fills[0].color.g * 255).toString(16).padStart(2, '0')}${Math.round(fills[0].color.b * 255).toString(16).padStart(2, '0')}`
      : (currentButtonData.styles && currentButtonData.styles.backgroundColor) || '#f2f2f2';

    // Extrair as propriedades de borda
    const strokes = frame.strokes as readonly Paint[];
    const borderColor = strokes && strokes[0] && strokes[0].type === 'SOLID'
      ? `#${Math.round(strokes[0].color.r * 255).toString(16).padStart(2, '0')}${Math.round(strokes[0].color.g * 255).toString(16).padStart(2, '0')}${Math.round(strokes[0].color.b * 255).toString(16).padStart(2, '0')}`
      : (currentButtonData.styles && currentButtonData.styles.borderColor) || '#000000';

    // Extrair o texto do botão
    const textNodes = frame.findAll(node => node.type === 'TEXT') as TextNode[];
    let buttonText = '';
    if (textNodes.length > 0 && textNodes[0] && typeof textNodes[0].characters === 'string') {
      buttonText = textNodes[0].characters;
    }

    // Extrair as propriedades de fonte
    let fontSize = '14px';
    let fontWeight = 'normal';
    let fontFamily = 'Inter';
    let color = (currentButtonData.styles && currentButtonData.styles.color) || '#000000';

    if (textNodes.length > 0 && textNodes[0]) {
      if (textNodes[0].fontSize) {
        fontSize = String(textNodes[0].fontSize) + 'px';
      }
      if (textNodes[0].fontWeight) {
        fontWeight = String(textNodes[0].fontWeight);
      }
      if (textNodes[0].fontName) {
        const fontName = textNodes[0].fontName as FontName;
        try {
          // Tentar carregar a fonte antes de usá-la
          await figma.loadFontAsync(fontName);
          fontFamily = fontName.family;
        } catch (error) {
          console.log('[MCP] Erro ao carregar fonte:', fontName.family, 'usando fallback');
          // Se falhar, usar a fonte do sistema
          const availableFonts = await figma.listAvailableFontsAsync();
          const systemFont = availableFonts.find(f => !f.fontName.family.startsWith('.'));
          if (systemFont) {
            fontFamily = systemFont.fontName.family;
            await figma.loadFontAsync(systemFont.fontName);
          }
        }
      }
      if (textNodes[0].fills) {
        const textFills = textNodes[0].fills as readonly Paint[];
        if (textFills[0] && textFills[0].type === 'SOLID') {
          color = `#${Math.round(textFills[0].color.r * 255).toString(16).padStart(2, '0')}${Math.round(textFills[0].color.g * 255).toString(16).padStart(2, '0')}${Math.round(textFills[0].color.b * 255).toString(16).padStart(2, '0')}`;
        }
      }
    }

    // Criar um novo objeto com os dados atualizados, mantendo os dados existentes
    const updatedButtonData = Object.assign({}, currentButtonData, {
      description: buttonText || currentButtonData.description,
      styles: Object.assign({}, currentButtonData.styles, {
        backgroundColor,
        borderRadius: `${String(frame.cornerRadius)}px`,
        borderWidth: `${String(frame.strokeWeight)}px`,
        borderColor,
        borderStyle: (currentButtonData.styles && currentButtonData.styles.borderStyle) || 'solid',
        padding: `${String(frame.paddingTop)}px ${String(frame.paddingRight)}px ${String(frame.paddingBottom)}px ${String(frame.paddingLeft)}px`,
        fontSize,
        fontWeight,
        fontFamily,
        color,
        textAlign: (currentButtonData.styles && currentButtonData.styles.textAlign) || 'center',
        cursor: (currentButtonData.styles && currentButtonData.styles.cursor) || 'pointer',
        transition: (currentButtonData.styles && currentButtonData.styles.transition) || 'all 0.2s ease-in-out',
        hover: Object.assign({}, 
          (currentButtonData.styles && currentButtonData.styles.hover) || {},
          {
            backgroundColor: (currentButtonData.styles && currentButtonData.styles.hover && currentButtonData.styles.hover.backgroundColor) || '',
            color: (currentButtonData.styles && currentButtonData.styles.hover && currentButtonData.styles.hover.color) || '',
            borderColor: (currentButtonData.styles && currentButtonData.styles.hover && currentButtonData.styles.hover.borderColor) || ''
          }
        )
      })
    });

    // Log detalhado do objeto antes de enviar
    console.log('[MCP] Objeto a ser enviado:', JSON.stringify(updatedButtonData, null, 2));

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
      await figma.loadFontAsync(titleText.fontName as FontName); 
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
    await figma.loadFontAsync(descriptionText.fontName as FontName);
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
    await figma.loadFontAsync(propsText.fontName as FontName);
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

    // Border
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

    // Padding
    if (buttonData.styles.padding) {
      const paddingValues = buttonData.styles.padding.split(' ').map(v => parseFloat(v.replace('px', '')));
      if (paddingValues.length === 4) {
        frame.paddingTop = paddingValues[0];
        frame.paddingRight = paddingValues[1];
        frame.paddingBottom = paddingValues[2];
        frame.paddingLeft = paddingValues[3];
      }
    }

    // Text styles
    const textNodes = frame.findAll(node => node.type === 'TEXT') as TextNode[];
    if (textNodes.length > 0) {
      const textNode = textNodes[0];
      
      if (buttonData.styles.fontSize) {
        const fontSize = parseFloat(buttonData.styles.fontSize.replace('px', ''));
        if (!isNaN(fontSize)) {
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
    }
  }

  console.log('[MCP] Todas as alterações foram aplicadas com sucesso.');
}

// Adicionar listener para mensagens da UI
figma.ui.onmessage = async (msg) => {
  console.log('[MCP] Mensagem recebida da UI:', msg);

  if (msg.type === 'fetch-button-json') {
    try {
      // Buscar dados do botão da API
      const response = await fetch('http://localhost:3001/api/button');
      const buttonData = await response.json();
      console.log('[MCP] Dados do botão recebidos:', buttonData);

      // Criar o botão no Figma
      const frame = await createButtonInFigma(buttonData);
      
      // Adicionar listener para mudanças no frame
      frame.setPluginData('isButton', 'true');
      figma.on('documentchange', (event) => {
        const changedNodes = event.documentChanges.filter(change => 
          change.type === 'PROPERTY_CHANGE' && 
          change.node.id === frame.id
        );
        if (changedNodes.length > 0) {
          updateButtonJson(frame);
        }
      });

      figma.notify('Botão criado com sucesso!');
    } catch (error: any) {
      console.error('[MCP] Erro ao criar botão:', error);
      figma.notify('Erro ao criar botão');
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