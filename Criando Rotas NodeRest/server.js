import app from './src/app.js'
const port = 3000

app.listen(port, () => { // Escutar
    console.log(`Servidor Rodando no endereço http://localhost:${port}`)
})
