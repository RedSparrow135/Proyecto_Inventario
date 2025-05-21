const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const window = new BrowserWindow({
    width: 1200,
    height: 800,
    minwidth: 1000,
    minheight: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  window.loadFile("index.html");

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
};

app.whenReady().then(() => {
  createWindow();
});
