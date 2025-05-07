### LEARNING ELECTRON.js

#### main.js file

- main.js file a main file for electron app creating window manage app lifecyle like closing and opening window adding html file

```javascript
const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const window = new BrowserWindow({
    with: 800,
    height: 600,
    webPreferences: { nodeIntegration: true },
  });

  window.loadFile("windows.html");

  window.webContents.openDevTools();

  window.on("focus", () => {});
  Secwindow.on("focus", () => {});
  app.on("browser-window-focused", () => {});
};

app.on("before-quit", (e) => {
  console.log("Loggin before quiting");
  e.preventDefault();
});
app.on("browser-window-blur", (e) => {
  console.log("Blur-window");
});

app.on("browser-window-focus", (e) => {
  console.log("focus-window");
});

app.on("ready", () => {
  createWindow();
});
```

`Using Browser event inside electron project`

```javascript
app.on("before-quit", (e) => {
  console.log("Loggin before quiting");
  e.preventDefault();
});

app.on("browser-window-blur", (e) => {
  console.log("Blur-window");
});

app.on("browser-window-focus", (e) => {
  console.log("Blur-window");
});

app.on("browser-window-created", (e) => {
  console.log("new browser window is created");
});

console.log(app.getPath("downloads"));
console.log(app.getPath("documents"));
console.log(app.getPath("pictures"));
console.log(app.getPath("desktop"));
console.log(app.getPath("music"));
console.log(app.getPath("userData"));
```

### Electron package for managing window width and height state
```bash
npm install electron-window-state
```

### Example

```javascript
const { windowStateManager } = require("electron-window-state")

const stateManager = windowStateManager({
  defaultWidth : 1000,
  defaultHeight : 800,
})

const createWindow = () => {
  const window = new BrowserWindow({
    width : stateManager.width,
    height : stateManager.height,
    x : stateManager.x , y : stateManager.y

  })

  // last step to use this
  // set which state to manage
  stateManager.manage(window)
}

```