const { app, BrowserWindow, shell } = require('electron');
const { URL } = require('node:url');

const APP_URL = 'https://golden-gym-2-0-6hcu5y.v2.appdeploy.ai/';
const TRUSTED_HOST = 'golden-gym-2-0-6hcu5y.v2.appdeploy.ai';

function createWindow() {
  const win = new BrowserWindow({
    width: 1440, height: 920, minWidth: 900, minHeight: 650,
    backgroundColor: '#0c0e12', autoHideMenuBar: true, title: 'Golden Gym 2.0',
    webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true },
  });
  win.webContents.setWindowOpenHandler(({ url }) => {
    try {
      const target = new URL(url);
      if (target.protocol === 'https:' && target.hostname === TRUSTED_HOST) return { action: 'allow' };
    } catch {}
    shell.openExternal(url);
    return { action: 'deny' };
  });
  win.loadURL(APP_URL);
}
app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
