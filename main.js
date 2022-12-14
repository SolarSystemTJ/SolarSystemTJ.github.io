const path = require('path');
const url = require('url');
const {app, BrowserWindow} = require('electron');

let win;

function createWindow(){
	win = new BrowserWindow({
		// width: 1366, 
		// height: 736, 
		//width: window.innerWidth,
		//height: window.innerHeight,
		icon: __dirname + "./img/icon.png",
		// /frame: 0,
	// webPreferences:
 //    {
 //        nodeIntegration: true
 //    }
	});

	win.maximize();

	win.loadURL(url.format({
		pathname: path.join(__dirname, 'test (2).html'),
		fullscreen: true,
		protocol: 'file:',
		slashes: true
	}));

	 webPreferences:
    {
        nodeIntegration: true
    }

	
	win.on('closed', () =>{
		win = null;
	})

	
	;}



app.on('ready', createWindow);
