"use strict";
figma.showUI(__html__, { width: 320, height: 400 });
figma.ui.onmessage = async (msg) => {
    if (msg.type === 'fetch-button-json') {
        try {
            const response = await fetch('http://localhost:3001/api/button');
            const buttonJson = await response.json();
            figma.ui.postMessage({ type: 'button-json', data: buttonJson });
        }
        catch (e) {
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
        }
        catch (e) {
            figma.notify('Erro ao atualizar Button.json');
        }
    }
};
