import express from 'express'

const app = express()

// rota padrão ou raiz
app.get('/', (req,res) => { 
    res.send('Hello Worlds!')
})

export default app