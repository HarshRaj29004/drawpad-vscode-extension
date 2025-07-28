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

        // Get path to the HTML file and set its content
        const htmlPath = path.join(context.extensionPath, 'webview.html');
        currentPanel.webview.html = fs.readFileSync(htmlPath, 'utf8');

        // Reset currentPanel when the panel is closed by the user (e.g., clicking 'x')
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

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
    activate,
    deactivate
}