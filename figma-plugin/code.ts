figma.showUI(__html__, { width: 320, height: 400 });

// Função para criar o botão no Figma
async function createButtonInFigma(buttonData: any) {
  // Criar o frame do botão
  const buttonFrame = figma.createFrame();
  buttonFrame.name = buttonData.name;
  buttonFrame.resize(120, 40); // Tamanho padrão do botão

  // Criar o texto do botão
  const text = figma.createText();
  text.characters = "Button";
  
  // Carregar a fonte
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  text.fontSize = 14;
  
  // Centralizar o texto no frame
  text.x = (buttonFrame.width - text.width) / 2;
  text.y = (buttonFrame.height - text.height) / 2;
  
  // Adicionar o texto ao frame
  buttonFrame.appendChild(text);
  
  // Aplicar estilos baseados nas variantes
  const styles = buttonData.styles;
  if (styles.primary) {
    // Aplicar estilo primary como padrão
    buttonFrame.fills = [{ type: 'SOLID', color: { r: 0.055, g: 0.647, b: 0.914 } }]; // primary-600
    text.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // white
  }
  
  // Adicionar auto-layout
  buttonFrame.layoutMode = "HORIZONTAL";
  buttonFrame.primaryAxisAlignItems = "CENTER";
  buttonFrame.counterAxisAlignItems = "CENTER";
  buttonFrame.paddingLeft = 16;
  buttonFrame.paddingRight = 16;
  buttonFrame.paddingTop = 8;
  buttonFrame.paddingBottom = 8;
  buttonFrame.cornerRadius = 6;
  
  // Criar variantes
  const variants = Object.keys(styles).map(variant => {
    const variantFrame = buttonFrame.clone();
    variantFrame.name = `${buttonData.name}/${variant}`;
    
    // Aplicar estilos específicos da variante
    if (variant === 'secondary') {
      variantFrame.fills = [{ type: 'SOLID', color: { r: 0.392, g: 0.459, b: 0.545 } }]; // secondary-600
    } else if (variant === 'tertiary') {
      variantFrame.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // transparent
      text.fills = [{ type: 'SOLID', color: { r: 0.118, g: 0.161, b: 0.231 } }]; // secondary-900
    }
    
    return variantFrame;
  });
  
  // Criar o componente principal
  const component = figma.createComponent();
  component.name = buttonData.name;
  component.resize(buttonFrame.width, buttonFrame.height);
  component.appendChild(buttonFrame);
  
  // Adicionar as variantes ao componente
  variants.forEach(variant => {
    component.appendChild(variant);
  });
  
  // Selecionar o componente criado
  figma.currentPage.selection = [component];
  figma.viewport.scrollAndZoomIntoView([component]);
  
  return component;
}

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'fetch-button-json') {
    try {
      const response = await fetch('http://localhost:3001/api/button');
      const buttonJson = await response.json();
      figma.ui.postMessage({ type: 'button-json', data: buttonJson });
      
      // Criar o botão no Figma
      await createButtonInFigma(buttonJson);
      figma.notify('Botão criado com sucesso!');
    } catch (e) {
      figma.notify('Erro ao buscar Button.json');
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
    } catch (e) {
      figma.notify('Erro ao atualizar Button.json');
    }
  }
}; 