const express = require("express")
const TagsController = require("../controllers/TagsController")
const auth = require("../middleware/auth")
const adminAuth = require("../middleware/adminAuth")
const router = express.Router()

router.route("/tag").get(auth, (req,res) => TagsController.getAll(req,res))
router.route("/tag/:id").get(auth, (req,res) => TagsController.getId(req,res))
router.route("/tag").post(auth, adminAuth, (req,res) => TagsController.create(req,res))
router.route("/tag/:id").put(auth, adminAuth, (req,res) => TagsController.update(req,res))
router.route("/tag/:id").delete(auth, adminAuth, (req,res) => TagsController.delete(req,res))

module.exports = router