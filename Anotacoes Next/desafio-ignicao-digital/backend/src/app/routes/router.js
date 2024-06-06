const express = require("express")
const router = express.Router()
const tRouter = require("./TagsService")
const uRouter = require("./UsuariosService")

router.use("/", tRouter)
router.use("/", uRouter)

module.exports = router