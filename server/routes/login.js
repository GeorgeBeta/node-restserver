const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario');
const jwt = require('jsonwebtoken');

const app = express();

app.post('/login', (req, res) => {
    let body = req.body;
    Usuario.findOne({ email: body.email }, (err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: '(Usuario) o contraseña incorrectos'
            })
        }
        if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Usuario o (contraseña) incorrectos'
            })
        }
        let token = jwt.sign({
            usuario: usuarioDB
        }, process.env.SEED, { expiresIn: Number(process.env.CADUCIDAD_TOKEN) });
        res.json({
            ok: true,
            usuario: usuarioDB,
            token: token
        })
    })
})

module.exports = app;