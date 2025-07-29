# DrawPad for VS Code ✏️

Enhance your workflow with visual notes and diagrams. Drawpad is a VS Code extension that enables you to sketch, annotate, and draw directly within your editor.

![DrawPad Demo](https://i.imgur.com/your_demo_link_here.gif)
---

## ## Features

- **In-Editor Canvas**: Open a drawing pad right next to your code without switching windows.
- **Simple Tools**: Easily switch between drawing, erasing, and changing colors.
- **Color Palette**: Includes black, red, and blue color options for drawing.
- **Persistent Drawings**: Your sketches are automatically saved per workspace and restored when you reopen the panel.
- **Editor Integration**: Activate the canvas with a simple icon in the editor's title bar.

---

## ## Installation (Local Use)

This extension is not yet published to the VS Code Marketplace. To install it locally, you need to use the `.vsix` install file.

### ### Step 1: Create the `.vsix` File (For the Developer)

If you have the source code, you can create the installable file yourself.

1.  Make sure you have `vsce` installed:
    ```bash
    npm install -g @vscode/vsce
    ```
2.  Run the package command from the project's root directory:
    ```bash
    vsce package
    ```
3.  This will create a file like `drawpad-0.0.1.vsix`. Share this file.

### ### Step 2: Install the `.vsix` File (For the User)

Once you have the `.vsix` file:

1.  Open the **Extensions** view in VS Code (`Ctrl+Shift+X`).
2.  Click the three-dots menu (`...`) at the top-right of the Extensions view.
3.  Select **"Install from VSIX..."**.
4.  In the file dialog that opens, find and select the `.vsix` file you received.
5.  When prompted, click the **"Reload Now"** button to activate the extension.

---

## ## How to Use

1.  Once installed and reloaded, open any text file in your editor.
2.  Click the **pencil icon (✏️)** that appears in the top-right corner of the editor panel.
3.  The drawing panel will open beside your editor. Use the toolbar inside the panel to select your tool and color.

---

## ## For Developers: Cloning and Setup

If you want to contribute to the development of DrawPad, follow these steps to set up a local development environment.

1.  **Clone the Repository**:
    ```bash
    git clone [https://github.com/YourUsername/DrawPad.git](https://github.com/YourUsername/DrawPad.git)
    ```

2.  **Navigate to the Directory**:
    ```bash
    cd DrawPad
    ```

3.  **Install Dependencies**:
    ```bash
    npm install
    ```

4.  **Open in VS Code**: Open the `DrawPad` folder in Visual Studio Code.

5.  **Run the Extension**: Press `F5` to open a new "Extension Development Host" window with the extension running.

---

## ## Contributing

Contributions are always welcome! If you have ideas for new features or find any bugs, please feel free to open an issue or submit a pull request on the project's GitHub repository.

---

## ## Release Notes

### ### 1.0.0

- Initial release of Drawpad.
- Core features: Drawing, erasing, and color selection.
- Workspace-specific drawing persistence.

**Enjoy using Drawpad!**