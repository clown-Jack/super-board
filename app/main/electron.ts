/**
 * @desc electron 主入口
 */

const {app,BrowserWindow} = require("electron");
const path = require('path')

function isDev(){
    return process.env.NODE_ENV === 'development';
}

function createWindow(){
    //创建浏览器窗口
    const mainWindow = new BrowserWindow({
        width:1200,
        height:800,
        webPreferences:{
            nodeIntegration:true   // 注入node模块
        }
    })
    
    if(isDev){
        mainWindow.loadURL('http://127.0.0.1:7001')
    }else{
        mainWindow.loadURL(`file://${path.join(__dirname,'../dist/index.html')}`)
    }
    
}

app.whenReady().then(()=>{
    createWindow();
    app.on('activate',function(){
        if(BrowserWindow.getAllWindows().length === 0) createWindow();
    })
})