"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("[MCP] Plugin iniciado");
figma.showUI(__html__, { width: 320, height: 400 });
// Função auxiliar para converter hex para RGB
function hexToRgb(hex) {
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
function createComponentInFigma(componentData) {
    return __awaiter(this, void 0, void 0, function* () {
        // Reutilizando a interface por enquanto
        try {
            console.log("[MCP] Iniciando criação do componente no Figma", componentData);
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
                yield figma.loadFontAsync(fontName);
            }
            catch (error) {
                console.log("[MCP] Erro ao carregar Inter, tentando fonte alternativa");
                const availableFonts = yield figma.listAvailableFontsAsync();
                const systemFont = availableFonts.find((f) => !f.fontName.family.startsWith("."));
                if (systemFont) {
                    fontName = systemFont.fontName;
                    yield figma.loadFontAsync(fontName);
                }
                else {
                    throw new Error("Nenhuma fonte disponível");
                }
            }
            // Criar texto
            const titleText = figma.createText();
            yield figma.loadFontAsync(fontName);
            titleText.fontName = fontName;
            titleText.fontSize = 20;
            titleText.fills = [{ type: "SOLID", color: { r: 0.2, g: 0.2, b: 0.2 } }];
            let safeLabel = componentData.label;
            if (!safeLabel ||
                typeof safeLabel !== "string" ||
                safeLabel.trim() === "") {
                safeLabel = componentData.name || "Label"; // Fallback para o nome do componente
            }
            titleText.characters = safeLabel;
            frame.appendChild(titleText);
            // Centralizar o frame na viewport
            figma.viewport.scrollAndZoomIntoView([frame]);
            console.log("[MCP] Componente criado com sucesso");
            return frame;
        }
        catch (error) {
            console.error("[MCP] Erro ao criar componente:", error);
            throw error;
        }
    });
}
// Função para atualizar o button.json com as alterações do Figma
function updateButtonJson(frame) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("[MCP] Iniciando atualização do button.json");
            // Primeiro, buscar o estado atual do button.json
            const response = yield fetch("http://localhost:3001/api/button");
            const currentButtonData = yield response.json();
            console.log("[MCP] Estado atual do button.json:", currentButtonData);
            // Extrair as cores do frame
            const fills = frame.fills;
            const backgroundColor = fills && fills[0] && fills[0].type === "SOLID"
                ? `#${Math.round(fills[0].color.r * 255)
                    .toString(16)
                    .padStart(2, "0")}${Math.round(fills[0].color.g * 255)
                    .toString(16)
                    .padStart(2, "0")}${Math.round(fills[0].color.b * 255)
                    .toString(16)
                    .padStart(2, "0")}`
                : (currentButtonData.styles &&
                    currentButtonData.styles.backgroundColor) ||
                    "#f2f2f2";
            // Extrair as propriedades de borda
            const strokes = frame.strokes;
            const borderColor = strokes && strokes[0] && strokes[0].type === "SOLID"
                ? `#${Math.round(strokes[0].color.r * 255)
                    .toString(16)
                    .padStart(2, "0")}${Math.round(strokes[0].color.g * 255)
                    .toString(16)
                    .padStart(2, "0")}${Math.round(strokes[0].color.b * 255)
                    .toString(16)
                    .padStart(2, "0")}`
                : (currentButtonData.styles && currentButtonData.styles.borderColor) ||
                    "#000000";
            // Extrair o texto do botão (label)
            const titleNode = frame.findOne((node) => node.name === "Button Title");
            let buttonLabel = "";
            if (titleNode && typeof titleNode.characters === "string") {
                buttonLabel = titleNode.characters;
            }
            // Log para garantir separação
            console.log("[MCP][updateButtonJson] frame.name extraído:", frame.name, "label extraído:", buttonLabel);
            // Extrair as propriedades de fonte
            let fontSize = "14px";
            let fontWeight = "normal";
            let fontFamily = "Inter";
            let color = (currentButtonData.styles && currentButtonData.styles.color) || "#000000";
            if (titleNode) {
                if (titleNode.fontSize) {
                    fontSize = String(titleNode.fontSize) + "px";
                }
                if (titleNode.fontName) {
                    const fontName = titleNode.fontName;
                    try {
                        yield figma.loadFontAsync(fontName);
                        fontFamily = fontName.family;
                    }
                    catch (error) {
                        console.log("[MCP] Erro ao carregar fonte:", fontName.family, "usando fallback");
                        const availableFonts = yield figma.listAvailableFontsAsync();
                        const systemFont = availableFonts.find((f) => !f.fontName.family.startsWith("."));
                        if (systemFont) {
                            fontFamily = systemFont.fontName.family;
                            yield figma.loadFontAsync(systemFont.fontName);
                        }
                    }
                }
                if (titleNode.fills) {
                    const textFills = titleNode.fills;
                    if (textFills[0] && textFills[0].type === "SOLID") {
                        color = `#${Math.round(textFills[0].color.r * 255)
                            .toString(16)
                            .padStart(2, "0")}${Math.round(textFills[0].color.g * 255)
                            .toString(16)
                            .padStart(2, "0")}${Math.round(textFills[0].color.b * 255)
                            .toString(16)
                            .padStart(2, "0")}`;
                    }
                }
            }
            // Criar um novo objeto com os dados atualizados, mantendo os dados existentes
            const updatedButtonData = Object.assign({}, currentButtonData, {
                name: frame.name,
                label: buttonLabel,
                styles: Object.assign({}, currentButtonData.styles, {
                    backgroundColor,
                    borderRadius: `${String(frame.cornerRadius)}px`,
                    borderWidth: `${String(frame.strokeWeight)}px`,
                    borderColor,
                    borderStyle: (currentButtonData.styles && currentButtonData.styles.borderStyle) ||
                        "solid",
                    padding: `${String(frame.paddingTop)}px ${String(frame.paddingRight)}px ${String(frame.paddingBottom)}px ${String(frame.paddingLeft)}px`,
                    fontSize,
                    fontWeight,
                    fontFamily,
                    color,
                    textAlign: (currentButtonData.styles && currentButtonData.styles.textAlign) ||
                        "center",
                    cursor: (currentButtonData.styles && currentButtonData.styles.cursor) ||
                        "pointer",
                    transition: (currentButtonData.styles && currentButtonData.styles.transition) ||
                        "all 0.2s ease-in-out",
                    hover: Object.assign({}, (currentButtonData.styles && currentButtonData.styles.hover) || {}, {
                        backgroundColor: (currentButtonData.styles &&
                            currentButtonData.styles.hover &&
                            currentButtonData.styles.hover.backgroundColor) ||
                            "",
                        color: (currentButtonData.styles &&
                            currentButtonData.styles.hover &&
                            currentButtonData.styles.hover.color) ||
                            "",
                        borderColor: (currentButtonData.styles &&
                            currentButtonData.styles.hover &&
                            currentButtonData.styles.hover.borderColor) ||
                            "",
                    }),
                }),
            });
            // Log detalhado do objeto antes de enviar
            console.log("[MCP] Objeto a ser enviado:", JSON.stringify(updatedButtonData, null, 2));
            // Enviar dados atualizados para a API
            try {
                const updateResponse = yield fetch("http://localhost:3001/api/button", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(updatedButtonData),
                });
                if (!updateResponse.ok) {
                    const errorText = yield updateResponse.text();
                    console.error("[MCP] Resposta do servidor:", errorText);
                    throw new Error(`HTTP error! status: ${updateResponse.status}, message: ${errorText}`);
                }
                const responseData = yield updateResponse.json();
                console.log("[MCP] Resposta do servidor:", responseData);
                console.log("[MCP] Button.json atualizado com sucesso");
                figma.notify("Button.json atualizado com sucesso!");
            }
            catch (error) {
                console.error("[MCP] Erro ao atualizar button.json:", error);
                figma.notify("Erro ao atualizar button.json: " +
                    (error.message || "Erro desconhecido"));
            }
            // Enviar dados atualizados para a UI
            figma.ui.postMessage({
                type: "update-button-json",
                data: updatedButtonData,
            });
            console.log("[MCP] Dados do botão extraídos:", updatedButtonData);
        }
        catch (error) {
            console.error("[MCP] Erro ao atualizar button.json:", error);
            figma.notify("Erro ao atualizar button.json");
        }
    });
}
// Função auxiliar para converter RGB para hex
function rgbToHex(r, g, b) {
    const toHex = (n) => {
        const hex = Math.round(n * 255).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
// Função para aplicar as alterações do código ao Figma
function applyCodeChangesToFigma(frame, buttonData) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("[MCP] Aplicando alterações do código ao frame:", frame.id, "com dados:", buttonData);
        console.log("[MCP Debug] buttonData.name received:", buttonData.name);
        console.log("[MCP Debug] frame.name BEFORE update:", frame.name);
        // Atualizar nome do frame
        if (buttonData.name) {
            frame.name = buttonData.name;
            console.log("[MCP Debug] frame.name AFTER update:", frame.name);
        }
        // Atualizar o título do botão
        const titleText = frame.findOne((node) => node.name === "Button Title");
        console.log("[MCP Debug] Found titleText by name:", titleText);
        if (titleText) {
            console.log("[MCP Debug] titleText characters BEFORE update:", titleText.characters);
            yield figma.loadFontAsync(titleText.fontName);
            // Garantir que label nunca seja undefined ou vazio
            let safeLabel = buttonData.label;
            if (!safeLabel ||
                typeof safeLabel !== "string" ||
                safeLabel.trim() === "") {
                console.error("[MCP] label do botão está vazio ou indefinido na atualização! Usando fallback 'Button'. Dados recebidos:", buttonData);
                safeLabel = "Button";
            }
            if (titleText.characters !== safeLabel) {
                titleText.characters = safeLabel;
                console.log("[MCP Debug] titleText characters AFTER update:", titleText.characters);
            }
            else {
                console.log("[MCP Debug] label já está sincronizado, não atualizando.");
            }
            // Log para garantir separação
            console.log("[MCP Debug] frame.name:", frame.name, "titleText.characters:", titleText.characters);
        }
        else {
            console.log('[MCP Debug] Title text node (named "Button Title") NOT FOUND!');
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
                const borderRadiusPx = parseFloat(buttonData.styles.borderRadius.replace("px", ""));
                if (!isNaN(borderRadiusPx)) {
                    frame.cornerRadius = borderRadiusPx;
                }
            }
            // Border
            if (buttonData.styles.borderWidth) {
                const borderWidth = parseFloat(buttonData.styles.borderWidth.replace("px", ""));
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
            const textNodes = frame.findAll((node) => node.type === "TEXT");
            if (textNodes.length > 0) {
                const textNode = textNodes[0];
                if (buttonData.styles.fontSize) {
                    const fontSize = parseFloat(buttonData.styles.fontSize.replace("px", ""));
                    if (!isNaN(fontSize)) {
                        textNode.fontSize = fontSize;
                    }
                }
                if (buttonData.styles.fontWeight) {
                    try {
                        const currentFont = textNode.fontName;
                        const fontName = {
                            family: currentFont.family,
                            style: buttonData.styles.fontWeight === "400"
                                ? "Regular"
                                : buttonData.styles.fontWeight === "700"
                                    ? "Bold"
                                    : "Regular",
                        };
                        yield figma.loadFontAsync(fontName);
                        textNode.fontName = fontName;
                    }
                    catch (error) {
                        console.log("[MCP] Erro ao carregar fonte com peso:", buttonData.styles.fontWeight);
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
                        yield figma.loadFontAsync(fontName);
                        textNode.fontName = fontName;
                    }
                    catch (error) {
                        console.log("[MCP] Erro ao carregar fonte:", buttonData.styles.fontFamily);
                    }
                }
            }
        }
        console.log("[MCP] Todas as alterações foram aplicadas com sucesso.");
        figma.notify("Botão atualizado do código!", { timeout: 5000 });
    });
}
// Adicionar listener para mensagens da UI
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("[MCP] Mensagem recebida da UI:", msg);
    // Lógica atualizada para ser genérica
    if (msg.type === "fetch-component-json" && msg.componentName) {
        try {
            // Buscar dados do componente da nova API genérica
            const response = yield fetch(`http://localhost:3002/api/component/${msg.componentName}`, {
                cache: "reload",
            });
            const componentData = yield response.json();
            console.log(`[MCP] Dados do componente ${msg.componentName} recebidos:`, componentData);
            // Criar o componente no Figma
            const frame = yield createComponentInFigma(componentData);
            // TODO: A lógica de 'documentchange' e polling também precisa ser generalizada
            // Por enquanto, vamos simplificar para focar na criação
            frame.setPluginData("isComponent", "true");
            frame.setPluginData("componentName", msg.componentName);
            figma.notify(`${msg.componentName} criado com sucesso!`);
        }
        catch (error) {
            console.error(`[MCP] Erro ao criar componente ${msg.componentName}:`, error);
            figma.notify(`Erro ao criar componente ${msg.componentName}`);
        }
    }
});
// ... (A lógica de polling precisará ser desativada ou refatorada)
// Por enquanto, vou comentar para evitar erros.
/*
// Variável para armazenar o último timestamp conhecido do button.json
let lastButtonJsonTimestamp = 0;

// Função de polling para verificar mudanças no button.json
async function pollButtonJsonChanges() {
// ... toda a função de polling ...
}

// Iniciar o polling (a cada 2 segundos, por exemplo)
const pollingInterval = setInterval(pollButtonJsonChanges, 2000);

// Limpar o interval quando o plugin for fechado
figma.on("close", () => {
  console.log("[MCP] Plugin fechado. Parando polling.");
  clearInterval(pollingInterval);
});
*/
