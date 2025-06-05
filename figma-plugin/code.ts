console.log('[MCP] Plugin iniciado');

figma.showUI(__html__, { width: 320, height: 400 });

// Interfaces
interface ButtonData {
  name: string;
  description: string;
  props: any[];
  styles: {
    backgroundColor?: string;
    borderRadius?: string;
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

    // Listar fontes disponíveis
    const availableFonts = await figma.listAvailableFontsAsync();
    console.log('[MCP] Fontes disponíveis:', availableFonts);

    // Tentar carregar a fonte Inter
    let fontName = { family: "Inter", style: "Regular" };
    try {
      console.log('[MCP] Tentando carregar fonte Inter');
      await figma.loadFontAsync(fontName);
    } catch (error) {
      console.log('[MCP] Erro ao carregar Inter, tentando fonte alternativa');
      // Se Inter não estiver disponível, usar a primeira fonte do sistema
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
    titleText.fontName = fontName;
    titleText.fontSize = 20;
    titleText.x = 20;
    titleText.y = 20;
    titleText.fills = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
    frame.appendChild(titleText);

    // Criar descrição
    const descriptionText = figma.createText();
    descriptionText.characters = buttonData.description;
    descriptionText.fontName = fontName;
    descriptionText.fontSize = 14;
    descriptionText.x = 20;
    descriptionText.y = 50;
    descriptionText.fills = [{ type: 'SOLID', color: { r: 0.4, g: 0.4, b: 0.4 } }];
    frame.appendChild(descriptionText);

    // Criar informações das props
    const propsText = figma.createText();
    propsText.characters = `${buttonData.props.length} propriedades`;
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

figma.ui.onmessage = async (msg) => {
  console.log('[MCP] Mensagem recebida da UI:', msg);
  if (msg.type === 'fetch-button-json') {
    try {
      const response = await fetch('http://localhost:3001/api/button');
      const buttonJson = await response.json();
      figma.ui.postMessage({ type: 'button-json', data: buttonJson });
      
      // Criar o botão no Figma
      await createButtonInFigma(buttonJson);
      figma.notify('Botão criado com sucesso!');
      console.log('[MCP] Botão criado com sucesso!');
    } catch (e) {
      figma.notify('Erro ao buscar Button.json');
      console.error('[MCP] Erro ao buscar Button.json', e);
    }
  }
  if (msg.type === 'update-button-json') {
    try {
      await fetch('http://localhost:3001/api/button', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(msg.data)
      });
      figma.notify('Button.json sincronizado!');
      console.log('[MCP] Button.json sincronizado!');
    } catch (e) {
      figma.notify('Erro ao atualizar Button.json');
      console.error('[MCP] Erro ao atualizar Button.json', e);
    }
  }
}; 