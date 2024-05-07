const { app, BrowserWindow } = require("electron")

const CriarJanela = () => {
    const janela = new BrowserWindow({
        autoHideMenuBar: true,
        width: 800,
        height: 600
    })
    janela.loadFile("./public/index.html")
}

app.whenReady()
    .then(() => {
        CriarJanela()
    })
    .catch((erro) => {
        console.log(erro.menssage)
    })