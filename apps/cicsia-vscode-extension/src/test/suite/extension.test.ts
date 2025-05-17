import * as assert from 'assert';
import * as vscode from 'vscode';

suite('Extension Test Suite', () => {
    test('Extension should be present', () => {
        const extension = vscode.extensions.getExtension('cicsia-vscode-extension');
        assert.ok(extension, 'Extension should be registered');
    });

    test('Command should be registered', async () => {
        const commands = await vscode.commands.getCommands();
        assert.ok(commands.includes('cicsia-vscode-extension.showWebview'), 
            'Show webview command should be registered');
    });

    test('Command should execute without error', async () => {
        try {
            await vscode.commands.executeCommand('cicsia-vscode-extension.showWebview');
            assert.ok(true, 'Command executed successfully');
        } catch (err) {
            assert.fail('Command should execute without error');
        }
    });
});
