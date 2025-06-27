const {app, BrowserWindow} = require('electron');
function window() {
    const win = new BrowserWindow({
        width : 800,
        height : 600,
        webPreferences: {
            nodeIntegration : true,
            contentIsolation: false
        }
    });
    win.loadFile('index.html');
}
app.whenReady().then(window);
app.on('window-all-closed',() =>{
    app.quit();
});
