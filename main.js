const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const window = new BrowserWindow({
    with: 1000,
    height: 800,
    webPreferences: { nodeIntegration: true },
    show : false
  });
  const Secondwindow = new BrowserWindow({
    with: 400,
    height: 200,
    webPreferences: { nodeIntegration: true },
    show : false,
    parent : window,
    title : "MY_APP",
  });

  window.loadFile("windows.html");
  window.once("ready-to-show",window.show)
  
  Secondwindow.loadFile("second.html");
  Secondwindow.once("ready-to-show",Secondwindow.show)
  // window.webContents.openDevTools();

};

app.on('ready',() => {
  createWindow()
})
