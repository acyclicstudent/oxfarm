var { app, BrowserWindow, Menu } = require('electron');
var path = require('path');
var url = require('url');

let mainWindow

if (process.env.NODE_ENV != 'production') {
    require('electron-reload')(__dirname, {

    });
}


app.on('ready', () => {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'src/index.html'),
        protocol: 'file',
        slashes: true
    }));
    Menu.setApplicationMenu(null);
});