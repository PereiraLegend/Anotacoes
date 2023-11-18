import app from './src/app.js'
const PORT = 5000

app.listen(PORT, () => { // Escutar
    console.log(`Servidor Rodando no endereço http://localhost:${PORT}`)
})
