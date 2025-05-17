# cicsia-nx-workspace

## Applications

### 1. Angular Web Client Application
- Modern Angular application with Nx workspace setup
- Dark mode support with system preference detection
- Responsive design with Tailwind CSS
- Component-based architecture

To run the dev server:
```sh
npx nx serve cicsia-angular-web-client-application
```

To build for production:
```sh
npx nx build cicsia-angular-web-client-application
```

### 2. VS Code Extension
- Custom VS Code extension with webpack bundling
- Interactive webview panel support
- Modern UI with custom styling
- Message passing between extension and webview

To build the extension:
```sh
npx nx build cicsia-vscode-extension
```

To package the extension:
```sh
npx nx package cicsia-vscode-extension
```

To run the extension in development:
1. Open the extension folder in VS Code
2. Press F5 to start debugging
3. In the new VS Code window, use Command Palette (Ctrl+Shift+P) and search for "Show Cicsia Webview"
