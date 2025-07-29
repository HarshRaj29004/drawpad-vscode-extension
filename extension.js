const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

let currentPanel = undefined;

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

    console.log('**Extension drawpad is now active**');

    // Register the command from package.json
    let disposable = vscode.commands.registerCommand('drawpad.toggle', function () {
        if (currentPanel) {
            currentPanel.dispose();
            return;
        }

        // Otherwise, create a new panel
        currentPanel = vscode.window.createWebviewPanel(
            'drawpad',
            'Drawing Pad',
            vscode.ViewColumn.Beside,
            {
                enableScripts: true,
                retainContextWhenHidden: true
            }
        );

        const savedDrawing = context.workspaceState.get('drawpad_drawing');
        currentPanel.webview.html = getWebviewContent(context.extensionPath, savedDrawing);

        // Saving data to VSCode workspace 
        currentPanel.webview.onDidReceiveMessage(
            message => {
                switch (message.command) {
                    case 'saveDrawing':
                        context.workspaceState.update('drawpad_drawing', message.data);
                        return;
                }
            },
            undefined,
            context.subscriptions
        );

        // Remove the panel (by clicking on 'X')
        currentPanel.onDidDispose(
            () => {
                currentPanel = undefined;
            },
            null,
            context.subscriptions
        );
    });

    context.subscriptions.push(disposable);
}

function getWebviewContent(extensionPath, savedData) {
    const htmlPath = path.join(extensionPath, 'webview.html');
    let htmlContent = fs.readFileSync(htmlPath, 'utf8');
    htmlContent = htmlContent.replace('<body>', `<body data-saved-drawing='${savedData || ""}'>`);
    return htmlContent;
}

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
    activate,
    deactivate
}