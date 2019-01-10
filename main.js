const electron = require('electron');

// Módulo utilizado para controlar o ciclo de vida do aplicativo
const app = electron.app;

// Módulo para criar uma janela nativa do sistema operacional
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.on('ready', function () {
  mainWindow = new BrowserWindow({width:290, height:380,});

  mainWindow.loadURL('file://'+ __dirname + '/index.html');

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});
