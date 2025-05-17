import * as vscode from 'vscode';
import { getWebviewContent } from './webview';

export function activate(context: vscode.ExtensionContext) {
    console.log('Cicsia VS Code Extension is now active!');

    let disposable = vscode.commands.registerCommand('cicsia-vscode-extension.showWebview', () => {
        // Create and show a new webview panel
        const panel = vscode.window.createWebviewPanel(
            'cicsiaWebview', // Unique identifier
            'Cicsia Webview', // Title displayed to the user
            vscode.ViewColumn.One, // Show in the first editor column
            {
                enableScripts: true, // Enable JavaScript in the webview
                retainContextWhenHidden: true // Keep the webview content when hidden
            }
        );

        // Set the webview content
        panel.webview.html = getWebviewContent();

        // Handle messages from the webview
        panel.webview.onDidReceiveMessage(
            message => {
                switch (message.command) {
                    case 'alert':
                        vscode.window.showInformationMessage(message.text);
                        return;
                }
            },
            undefined,
            context.subscriptions
        );
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
