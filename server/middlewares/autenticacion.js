const jwt = require('jsonwebtoken');

// Verificación del Token
//---------------------------
let verificaToken = (req, res, next) => {
    let token = req.get('token');
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }
        // Todo el PAYLOAD está en 'decoded'
        req.usuario = decoded.usuario;
        next();
    });
    // res.json({
    //     ok: true,
    //     mensaje: token
    // });


};

// Verificación del Token
//---------------------------
let verificaAdminRole = (req, res, next) => {
    let usuario = req.usuario;
    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.status(401).json({
            ok: false,
            mensaje: 'Éste servicio necesita rol de administrador'
        })
    }
};

module.exports = {
    verificaToken,
    verificaAdminRole
}