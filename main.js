const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 1000,
    minHeight: 600,
    frame: false, // desactiva la barra nativa
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  mainWindow.loadFile("index.html");
  // mainWindow.webContents.openDevTools(); // descomenta para debug

  // IPC para minimizar, maximizar, cerrar:
  ipcMain.on("window-control", (event, action) => {
    if (action === "minimize") mainWindow.minimize();
    if (action === "maximize") {
      mainWindow.isMaximized()
        ? mainWindow.unmaximize()
        : mainWindow.maximize();
    }
    if (action === "close") mainWindow.close();
  });
}

app.whenReady().then(createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
