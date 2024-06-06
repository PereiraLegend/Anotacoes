module.exports = function(req,res,next) {
    if(!req.usuario) {
        return res.status(401).json({ msg: "Usuário não autenticado" })
    }

    if(req.usuario.regra !== "Admin"){
        return res.status(403).json({ msg: "Não autorizado" })
    }

    next()
}