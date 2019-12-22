const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

let win

function createWindow() {
  win = new BrowserWindow({width: 800, height: 600})
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/game/index.html`),
      protocol: "file:",
      slashes: true
    })
  );
  console.log(path.join(__dirname, `/dist/game/index.html`))

}

app.on('ready', createWindow)
