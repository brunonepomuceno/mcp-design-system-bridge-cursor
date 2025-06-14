"use strict";
console.log('[MCP] Plugin iniciado');
figma.showUI(__html__, { width: 320, height: 400 });
// Variável para controlar se o plugin está aplicando mudanças do código
let isApplyingCodeChanges = false;
// Função auxiliar para converter hex para RGB
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255
    } : { r: 0, g: 0, b: 0 };
}
// Função para criar o botão no Figma
async function createButtonInFigma(buttonData) {
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
        }
        catch (error) {
            console.log('[MCP] Erro ao carregar Inter, tentando fonte alternativa');
            // Se Inter não estiver disponível, usar a primeira fonte do sistema
            const availableFonts = await figma.listAvailableFontsAsync();
            const systemFont = availableFonts.find(f => !f.fontName.family.startsWith('.'));
            if (systemFont) {
                fontName = systemFont.fontName;
                await figma.loadFontAsync(fontName);
                console.log('[MCP] Usando fonte alternativa:', fontName);
            }
            else {
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
    }
    catch (error) {
        console.error('[MCP] Erro ao criar botão:', error);
        throw error;
    }
}
// Função para atualizar o button.json com as alterações do Figma
async function updateButtonJson(frame) {
    try {
        console.log('[MCP] Iniciando atualização do button.json');
        // Obter a referência mais atualizada do frame do Figma
        const currentFrame = figma.currentPage.findOne(node => node.id === frame.id);
        if (!currentFrame) {
            console.error('[MCP] Frame do botão não encontrado na página atual durante a atualização!');
            figma.notify('Erro: Frame do botão não encontrado para atualizar JSON.');
            return;
        }
        // Primeiro, buscar o estado atual do button.json
        const response = await fetch('http://localhost:3001/api/button');
        const currentButtonData = await response.json();
        console.log('[MCP Debug] Estado atual do button.json ANTES da atualização:', currentButtonData);
        // Extrair o nome do frame do Figma para o buttonData.name
        const name = currentFrame.name;
        console.log('[MCP Debug] Nome do frame do Figma lido:', name); // Debug log
        // Extrair as cores do frame
        const fills = currentFrame.fills;
        const backgroundColor = fills && fills[0] && fills[0].type === 'SOLID'
            ? `#${Math.round(fills[0].color.r * 255).toString(16).padStart(2, '0')}${Math.round(fills[0].color.g * 255).toString(16).padStart(2, '0')}${Math.round(fills[0].color.b * 255).toString(16).padStart(2, '0')}`
            : (currentButtonData.styles && currentButtonData.styles.backgroundColor) || '#f2f2f2';
        // Extrair as propriedades de borda
        const strokes = currentFrame.strokes;
        const borderColor = strokes && strokes[0] && strokes[0].type === 'SOLID'
            ? `#${Math.round(strokes[0].color.r * 255).toString(16).padStart(2, '0')}${Math.round(strokes[0].color.g * 255).toString(16).padStart(2, '0')}${Math.round(strokes[0].color.b * 255).toString(16).padStart(2, '0')}`
            : (currentButtonData.styles && currentButtonData.styles.borderColor) || '#000000';
        // Extrair o texto do botão (da descrição, que é o campo que estamos sincronizando bidirecionalmente)
        const descriptionTextNode = currentFrame.findOne(node => node.name === 'Button Description');
        let description = descriptionTextNode ? descriptionTextNode.characters : currentButtonData.description;
        console.log('[MCP Debug] Nó de descrição encontrado:', descriptionTextNode); // Debug log
        console.log('[MCP Debug] Conteúdo da descrição do Figma lido:', description); // Debug log
        // Extrair as propriedades de fonte e texto
        let fontSize = '14px';
        let fontWeight = 'normal';
        let fontFamily = 'Inter';
        let color = (currentButtonData.styles && currentButtonData.styles.color) || '#000000';
        let textAlign = (currentButtonData.styles && currentButtonData.styles.textAlign) || 'center';
        const titleTextNode = currentFrame.findOne(node => node.name === 'Button Title');
        console.log('[MCP Debug] Nó de título encontrado:', titleTextNode); // Debug log
        if (titleTextNode) { // Usar o nó do título como referência para estilos de texto
            console.log('[MCP Debug] Conteúdo do título do Figma lido:', titleTextNode.characters); // Debug log
            if (titleTextNode.fontSize) {
                fontSize = String(titleTextNode.fontSize) + 'px';
            }
            if (titleTextNode.fontWeight) {
                fontWeight = String(titleTextNode.fontWeight);
            }
            if (titleTextNode.fontName) {
                const fontName = titleTextNode.fontName;
                try {
                    await figma.loadFontAsync(fontName);
                    fontFamily = fontName.family;
                }
                catch (error) {
                    console.log('[MCP] Erro ao carregar fonte para extração:', fontName.family, 'usando fallback');
                    // Se falhar, usar a fonte do sistema
                    const availableFonts = await figma.listAvailableFontsAsync();
                    const systemFont = availableFonts.find(f => !f.fontName.family.startsWith('.'));
                    if (systemFont) {
                        fontFamily = systemFont.fontName.family;
                        await figma.loadFontAsync(systemFont.fontName);
                    }
                }
            }
            if (titleTextNode.fills) {
                const textFills = titleTextNode.fills;
                if (textFills[0] && textFills[0].type === 'SOLID') {
                    color = `#${Math.round(textFills[0].color.r * 255).toString(16).padStart(2, '0')}${Math.round(textFills[0].color.g * 255).toString(16).padStart(2, '0')}${Math.round(textFills[0].color.b * 255).toString(16).padStart(2, '0')}`;
                }
            }
            // Extrair textAlign
            if (titleTextNode.textAlignHorizontal) {
                const textAlignMap = {
                    'LEFT': 'left',
                    'CENTER': 'center',
                    'RIGHT': 'right',
                    'JUSTIFIED': 'justify'
                };
                textAlign = textAlignMap[titleTextNode.textAlignHorizontal] || 'center';
            }
        }
        // Criar um novo objeto com os dados atualizados, mantendo os dados existentes
        const updatedButtonData = Object.assign({}, currentButtonData, {
            name: name, // Adicionado para sincronizar o nome do frame para o JSON
            description: description, // Agora extraído do nó de descrição
            properties: currentButtonData.properties || {}, // Manter as propriedades existentes (se houver)
            styles: Object.assign({}, currentButtonData.styles, {
                backgroundColor,
                borderRadius: `${String(currentFrame.cornerRadius)}px`, // Usar currentFrame
                borderWidth: `${String(currentFrame.strokeWeight)}px`, // Usar currentFrame
                borderColor,
                borderStyle: (currentButtonData.styles && currentButtonData.styles.borderStyle) || 'solid',
                padding: `${String(currentFrame.paddingTop)}px ${String(currentFrame.paddingRight)}px ${String(currentFrame.paddingBottom)}px ${String(currentFrame.paddingLeft)}px`, // Usar currentFrame
                fontSize,
                fontWeight,
                fontFamily,
                color,
                textAlign, // Agora extraído do nó de texto
                cursor: (currentButtonData.styles && currentButtonData.styles.cursor) || 'pointer',
                transition: (currentButtonData.styles && currentButtonData.styles.transition) || 'all 0.2s ease-in-out',
                hover: Object.assign({}, (currentButtonData.styles && currentButtonData.styles.hover) || {}, {
                    backgroundColor: (currentButtonData.styles && currentButtonData.styles.hover && currentButtonData.styles.hover.backgroundColor) || '',
                    color: (currentButtonData.styles && currentButtonData.styles.hover && currentButtonData.styles.hover.color) || '',
                    borderColor: (currentButtonData.styles && currentButtonData.styles.hover && currentButtonData.styles.hover.borderColor) || '',
                    // Adicionar outras propriedades de hover se necessário
                })
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
        }
        catch (error) {
            console.error('[MCP] Erro ao atualizar button.json:', error);
            figma.notify('Erro ao atualizar button.json: ' + (error.message || 'Erro desconhecido'));
        }
        // Enviar dados atualizados para a UI
        figma.ui.postMessage({
            type: 'update-button-json',
            data: updatedButtonData
        });
        console.log('[MCP] Dados do botão extraídos:', updatedButtonData);
    }
    catch (error) {
        console.error('[MCP] Erro ao atualizar button.json:', error);
        figma.notify('Erro ao atualizar button.json');
    }
}
// Função auxiliar para converter RGB para hex
function rgbToHex(r, g, b) {
    const toHex = (n) => {
        const hex = Math.round(n * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
// Função para aplicar as alterações do código ao Figma
async function applyCodeChangesToFigma(frame, buttonData) {
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
            const titleText = frame.findOne(node => node.name === 'Button Title');
            console.log('[MCP Debug] Found titleText by name:', titleText);
            if (titleText) {
                console.log('[MCP Debug] titleText characters BEFORE update:', titleText.characters);
                await figma.loadFontAsync(titleText.fontName); // Certificar que a fonte está carregada
                titleText.characters = buttonData.name;
                console.log('[MCP Debug] titleText characters AFTER update:', titleText.characters);
            }
            else {
                console.log('[MCP Debug] Title text node (named "Button Title") NOT FOUND!');
            }
        }
        else {
            console.log('[MCP Debug] buttonData.name is undefined or empty. Skipping frame name and title text update.');
        }
        // Atualizar descrição
        const descriptionText = frame.findOne(node => node.name === 'Button Description');
        console.log('[MCP Debug] Found descriptionText by name:', descriptionText);
        if (descriptionText && buttonData.description) {
            console.log('[MCP Debug] descriptionText characters BEFORE update:', descriptionText.characters);
            await figma.loadFontAsync(descriptionText.fontName); // Certificar que a fonte está carregada
            descriptionText.characters = buttonData.description;
            console.log('[MCP Debug] descriptionText characters AFTER update:', descriptionText.characters);
        }
        else {
            console.log('[MCP Debug] Description text node (named "Button Description") NOT FOUND, or buttonData.description is undefined/empty.');
        }
        // Atualizar informações das props
        const propsText = frame.findOne(node => node.name === 'Button Properties');
        console.log('[MCP Debug] Found propsText by name:', propsText);
        if (propsText && buttonData.properties) {
            console.log('[MCP Debug] propsText characters BEFORE update:', propsText.characters);
            await figma.loadFontAsync(propsText.fontName); // Garantir que a fonte seja carregada para o texto de propriedades
            propsText.characters = `${Object.keys(buttonData.properties).length} propriedades`;
            console.log('[MCP Debug] propsText characters AFTER update:', propsText.characters);
        }
        else {
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
            const mainTextNode = frame.findOne(node => node.name === 'Button Title');
            const descriptionTextNodeForStyles = frame.findOne(node => node.name === 'Button Description');
            // Apply common text styles to both title and description for now
            const textNodesToStyle = [mainTextNode, descriptionTextNodeForStyles].filter(Boolean);
            for (const textNode of textNodesToStyle) {
                if (buttonData.styles.fontSize) {
                    const fontSize = parseFloat(buttonData.styles.fontSize.replace('px', ''));
                    if (!isNaN(fontSize)) {
                        await figma.loadFontAsync(textNode.fontName); // Certificar que a fonte está carregada
                        textNode.fontSize = fontSize;
                    }
                }
                if (buttonData.styles.fontWeight) {
                    try {
                        const currentFont = textNode.fontName;
                        const fontName = {
                            family: currentFont.family,
                            style: buttonData.styles.fontWeight === '400' ? 'Regular' :
                                buttonData.styles.fontWeight === '700' ? 'Bold' : 'Regular'
                        };
                        await figma.loadFontAsync(fontName);
                        textNode.fontName = fontName;
                    }
                    catch (error) {
                        console.log('[MCP] Erro ao carregar fonte com peso:', buttonData.styles.fontWeight);
                    }
                }
                if (buttonData.styles.color) {
                    const hex = buttonData.styles.color;
                    const rgb = hexToRgb(hex);
                    await figma.loadFontAsync(textNode.fontName); // Certificar que a fonte está carregada
                    textNode.fills = [{ type: 'SOLID', color: rgb }];
                }
                if (buttonData.styles.fontFamily) {
                    try {
                        const fontName = { family: buttonData.styles.fontFamily, style: 'Regular' };
                        await figma.loadFontAsync(fontName);
                        textNode.fontName = fontName;
                    }
                    catch (error) {
                        console.log('[MCP] Erro ao carregar fonte:', buttonData.styles.fontFamily);
                    }
                }
                if (buttonData.styles.textAlign) {
                    const textAlignMap = {
                        'left': 'LEFT',
                        'center': 'CENTER',
                        'right': 'RIGHT',
                        'justify': 'JUSTIFIED'
                    };
                    const figmaTextAlign = textAlignMap[buttonData.styles.textAlign.toLowerCase()];
                    if (figmaTextAlign) {
                        await figma.loadFontAsync(textNode.fontName); // Certificar que a fonte está carregada
                        textNode.textAlignHorizontal = figmaTextAlign;
                    }
                }
            }
            // Propriedades que não têm mapeamento direto ou são mais complexas:
            // cursor, transition, hover - Figma não tem suporte nativo para isso em propriedades de nó.
            // As propriedades dentro de 'properties' no JSON são apenas textuais por enquanto e não afetam o Figma visualmente.
        }
        console.log('[MCP] Todas as alterações foram aplicadas com sucesso.');
    }
    finally {
        isApplyingCodeChanges = false; // Garantir que a flag seja redefinida no final
    }
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
            // Adicionar listener para mudanças no frame e seus filhos
            frame.setPluginData('isButton', 'true');
            figma.on('documentchange', (event) => {
                console.log('[MCP Debug] Full documentchange event:', event.documentChanges); // Novo log
                // Ignorar mudanças se o plugin estiver aplicando alterações do código
                if (isApplyingCodeChanges) {
                    console.log('[MCP Debug] Ignorando documentchange enquanto o plugin está aplicando alterações.');
                    return;
                }
                const relevantChanges = event.documentChanges.filter(change => {
                    // Só consideramos mudanças de propriedade
                    if (change.type === 'PROPERTY_CHANGE') {
                        const node = change.node; // Já é garantido ser SceneNode se change.type for PROPERTY_CHANGE
                        // Retorna true se a mudança é no próprio frame do botão
                        if (node.id === frame.id) {
                            return true;
                        }
                        // Retorna true se a mudança é em um nó filho direto do frame do botão
                        // Verificamos se o nó tem um pai e se esse pai é o frame do botão
                        if (node.parent && node.parent.id === frame.id) {
                            return true;
                        }
                    }
                    return false; // Ignora outros tipos de mudança (ex: REMOVED) ou mudanças irrelevantes
                });
                if (relevantChanges.length > 0) {
                    console.log('[MCP] Mudança relevante no Figma detectada. Atualizando button.json...');
                    updateButtonJson(frame);
                }
            });
            figma.notify('Botão criado com sucesso!');
        }
        catch (error) {
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
            const buttonFrame = figma.currentPage.findAll(node => node.getPluginData('isButton') === 'true')[0];
            if (buttonFrame) {
                await applyCodeChangesToFigma(buttonFrame, updatedButtonData);
                figma.notify('Botão atualizado do código!');
            }
            else {
                console.log('[MCP] Frame do botão não encontrado no Figma para aplicar atualizações.');
            }
        }
    }
    catch (error) {
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
