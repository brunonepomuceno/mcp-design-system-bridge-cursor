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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
console.log("[MCP] Plugin iniciado");
figma.showUI(__html__, { width: 320, height: 400 });
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
function rgbToHex(r, g, b) {
    const toHex = (n) => {
        const hex = Math.round(n * 255).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
function renderNode(nodeData) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!nodeData || !nodeData.type)
            return null;
        let figmaNode = null;
        const { type, name, styles, children, characters } = nodeData;
        switch (type) {
            case "FRAME": {
                const frame = figma.createFrame();
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
                if (nodeData.width)
                    frame.resize(nodeData.width, frame.height);
                if (nodeData.height)
                    frame.resize(frame.width, nodeData.height);
                if (nodeData.layoutMode)
                    frame.layoutMode = nodeData.layoutMode;
                if (nodeData.primaryAxisSizingMode)
                    frame.primaryAxisSizingMode = nodeData.primaryAxisSizingMode;
                if (nodeData.counterAxisSizingMode)
                    frame.counterAxisSizingMode = nodeData.counterAxisSizingMode;
                if (nodeData.primaryAxisAlignItems)
                    frame.primaryAxisAlignItems = nodeData.primaryAxisAlignItems;
                if (nodeData.counterAxisAlignItems)
                    frame.counterAxisAlignItems = nodeData.counterAxisAlignItems;
                if (nodeData.itemSpacing)
                    frame.itemSpacing = nodeData.itemSpacing;
                if (nodeData.paddingLeft)
                    frame.paddingLeft = nodeData.paddingLeft;
                if (nodeData.paddingRight)
                    frame.paddingRight = nodeData.paddingRight;
                if (nodeData.paddingTop)
                    frame.paddingTop = nodeData.paddingTop;
                if (nodeData.paddingBottom)
                    frame.paddingBottom = nodeData.paddingBottom;
                figmaNode = frame;
                break;
            }
            case "TEXT": {
                const text = figma.createText();
                if (styles) {
                    yield figma.loadFontAsync({
                        family: styles.fontFamily || "Inter",
                        style: styles.fontWeight || "Regular",
                    });
                    if (styles.fontSize)
                        text.fontSize = styles.fontSize;
                    if (styles.color)
                        text.fills = [{ type: "SOLID", color: hexToRgb(styles.color) }];
                }
                if (characters)
                    text.characters = characters;
                if (nodeData.textAutoResize)
                    text.textAutoResize = nodeData.textAutoResize;
                figmaNode = text;
                break;
            }
            default:
                return null;
        }
        if (name)
            figmaNode.name = name;
        if (nodeData.layoutGrow !== undefined)
            figmaNode.layoutGrow = nodeData.layoutGrow;
        if (nodeData.primaryAxisSizingMode && "primaryAxisSizingMode" in figmaNode)
            figmaNode.primaryAxisSizingMode = nodeData.primaryAxisSizingMode;
        if (children && "appendChild" in figmaNode) {
            for (const childData of children) {
                const childNode = yield renderNode(childData);
                if (childNode)
                    figmaNode.appendChild(childNode);
            }
        }
        return figmaNode;
    });
}
function extractNodeData(node) {
    const nodeData = { type: node.type, name: node.name };
    const styles = {};
    if (node.type === "FRAME" ||
        node.type === "INSTANCE" ||
        node.type === "COMPONENT") {
        if ("layoutMode" in node && node.layoutMode !== "NONE") {
            nodeData.layoutMode = node.layoutMode;
            nodeData.primaryAxisSizingMode = node.primaryAxisSizingMode;
            nodeData.counterAxisSizingMode = node.counterAxisSizingMode;
            nodeData.primaryAxisAlignItems = node.primaryAxisAlignItems;
            nodeData.counterAxisAlignItems = node.counterAxisAlignItems;
            nodeData.itemSpacing = node.itemSpacing;
            nodeData.paddingLeft = node.paddingLeft;
            nodeData.paddingRight = node.paddingRight;
            nodeData.paddingTop = node.paddingTop;
            nodeData.paddingBottom = node.paddingBottom;
        }
        nodeData.width = node.width;
        nodeData.height = node.height;
        if ("fills" in node && Array.isArray(node.fills) && node.fills.length > 0) {
            const paint = node.fills[0];
            if (paint.type === "SOLID")
                styles.backgroundColor = rgbToHex(paint.color.r, paint.color.g, paint.color.b);
        }
        if ("strokes" in node && node.strokes.length > 0) {
            const paint = node.strokes[0];
            if (paint.type === "SOLID")
                styles.borderColor = rgbToHex(paint.color.r, paint.color.g, paint.color.b);
            styles.borderWidth = `${node.strokeWeight}px`;
        }
        if ("cornerRadius" in node && typeof node.cornerRadius === "number") {
            styles.borderRadius = `${node.cornerRadius}px`;
        }
    }
    else if (node.type === "TEXT") {
        nodeData.characters = node.characters;
        if (node.fontName !== figma.mixed) {
            styles.fontFamily = node.fontName.family;
            styles.fontWeight = node.fontName.style;
        }
        if (node.fontSize !== figma.mixed)
            styles.fontSize = node.fontSize;
        if ("fills" in node && Array.isArray(node.fills) && node.fills.length > 0) {
            const paint = node.fills[0];
            if (paint.type === "SOLID")
                styles.color = rgbToHex(paint.color.r, paint.color.g, paint.color.b);
        }
        if ("textAutoResize" in node)
            nodeData.textAutoResize = node.textAutoResize;
    }
    if (Object.keys(styles).length > 0)
        nodeData.styles = styles;
    if ("layoutGrow" in node)
        nodeData.layoutGrow = node.layoutGrow;
    if ("children" in node)
        nodeData.children = node.children.map((child) => extractNodeData(child));
    return nodeData;
}
function updateComponentJson(frame) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const componentName = frame.getPluginData("componentName");
            if (!componentName)
                return;
            const extractedData = extractNodeData(frame);
            const componentData = { name: componentName, node: extractedData };
            const apiUrl = `http://localhost:3002/api/component/${componentName}`;
            yield fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(componentData),
            });
        }
        catch (error) {
            console.error("[MCP] Erro ao atualizar component.json:", error);
        }
    });
}
function findAndApplyUpdates(componentNames) {
    return __awaiter(this, void 0, void 0, function* () {
        const allNodes = figma.root.findAll((node) => componentNames.includes(node.getPluginData("componentName")));
        for (const node of allNodes) {
            if ("children" in node && node.type === "FRAME") {
                const nodeComponentName = node.getPluginData("componentName");
                try {
                    const response = yield fetch(`http://localhost:3002/api/component/${nodeComponentName}`);
                    const componentData = yield response.json();
                    if (componentData && componentData.node) {
                        const _a = componentData.node, { children, styles } = _a, rootProps = __rest(_a, ["children", "styles"]);
                        // Aplicar propriedades do nó raiz de forma segura
                        for (const prop in rootProps) {
                            if (prop !== "children" && prop !== "styles" && prop in node) {
                                try {
                                    node[prop] = rootProps[prop];
                                }
                                catch (e) { }
                            }
                        }
                        // Aplicar estilos de forma segura
                        if (styles) {
                            if (styles.backgroundColor)
                                node.fills = [
                                    { type: "SOLID", color: hexToRgb(styles.backgroundColor) },
                                ];
                            if (styles.borderRadius)
                                node.cornerRadius = parseFloat(styles.borderRadius);
                            if (styles.borderColor && styles.borderWidth) {
                                node.strokes = [
                                    { type: "SOLID", color: hexToRgb(styles.borderColor) },
                                ];
                                node.strokeWeight = parseFloat(styles.borderWidth);
                            }
                        }
                        // Limpar filhos existentes
                        while (node.children.length > 0)
                            node.children[0].remove();
                        // Renderizar novos filhos
                        if (children) {
                            for (const childData of children) {
                                const childNode = yield renderNode(childData);
                                if (childNode)
                                    node.appendChild(childNode);
                            }
                        }
                        figma.notify(`Componente '${nodeComponentName}' atualizado!`);
                    }
                }
                catch (error) {
                    console.error(`[MCP] Erro ao atualizar o componente ${nodeComponentName}:`, error);
                }
            }
        }
    });
}
function checkForUpdates() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("http://localhost:3002/api/check-updates");
            const data = yield response.json();
            if (data.updates && data.components.length > 0)
                findAndApplyUpdates(data.components);
        }
        catch (error) {
            /* Silencioso */
        }
    });
}
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    if (msg.type === "fetch-component-json" && msg.componentName) {
        try {
            const response = yield fetch(`http://localhost:3002/api/component/${msg.componentName}`, { cache: "reload" });
            const componentData = yield response.json();
            const rootNode = yield renderNode(componentData.node);
            if (rootNode) {
                figma.viewport.scrollAndZoomIntoView([rootNode]);
                rootNode.setPluginData("isComponent", "true");
                rootNode.setPluginData("componentName", msg.componentName);
            }
        }
        catch (error) {
            console.error(`[MCP] Erro ao criar componente ${msg.componentName}:`, error);
        }
    }
});
const debounceTimers = new Map();
figma.on("documentchange", (event) => {
    for (const change of event.documentChanges) {
        if (change.type === "PROPERTY_CHANGE" &&
            !change.node.removed &&
            change.node.type === "FRAME") {
            const componentName = change.node.getPluginData("componentName");
            if (componentName) {
                const existingTimer = debounceTimers.get(change.node.id);
                if (existingTimer)
                    clearTimeout(existingTimer);
                const timer = setTimeout(() => {
                    updateComponentJson(change.node);
                }, 500);
                debounceTimers.set(change.node.id, timer);
            }
        }
    }
});
setInterval(checkForUpdates, 3000);
