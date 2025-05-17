export function getWebviewContent() {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Cicsia Webview</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
          padding: 20px;
        }
        button {
          background-color: #007acc;
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 4px;
          font-size: 14px;
        }
        button:hover {
          background-color: #005a9e;
        }
      </style>
    </head>
    <body>
      <h1>Welcome to Cicsia VS Code Extension Webview!</h1>
      <button onclick="sendAlert()">Click me</button>

      <script>
        const vscode = acquireVsCodeApi();

        function sendAlert() {
          vscode.postMessage({
            command: 'alert',
            text: 'Button clicked in webview!'
          });
        }
      </script>
    </body>
    </html>
  `;
}
