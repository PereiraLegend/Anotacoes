const express = require("express")
const UsuariosController = require("../controllers/UsuariosController")
const auth = require("../middleware/auth")
const adminAuth = require("../middleware/adminAuth")
const router = express.Router()

router.route("/usuario/register").post((req, res) => UsuariosController.register(req, res))
router.route("/usuario/login").post((req, res) => UsuariosController.login(req, res))

router.route("/usuario/me").get(auth,(req,res) => UsuariosController.getMe(req,res))
router.route("/usuario/all").get(auth, adminAuth, (req, res) => UsuariosController.getAll(req, res))
router.route("/usuario/:id").get(auth, adminAuth, (req, res) => UsuariosController.getId(req, res))
router.route("/usuario/:id").delete(auth, adminAuth, (req, res) => UsuariosController.delete(req, res))
router.route("/usuario/:id").put(auth, adminAuth, (req,res) => UsuariosController.update(req,res))

module.exports = router