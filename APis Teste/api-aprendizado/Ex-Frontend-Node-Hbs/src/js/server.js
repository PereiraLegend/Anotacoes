const express = require("express")
const app = require('./app')
require('dotenv').config()
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log('O servidor está ligado a porta:', PORT)
})