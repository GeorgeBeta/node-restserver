const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
require('./config/config');

app.get('/', function(req, res) {
    res.json('Hola mundo');
});

app.get('/usuario', function(req, res) {
    res.json('getUsuario');
});

app.post('/usuario/', function(req, res) {
    let body = req.body;
    if (body.name === undefined) {
        res.status(400).json({
            Ok: false,
            mensaje: 'El nombre es necesario'
        })
    } else {
        res.json({
            user: req.body
        });
    }
});

app.put('/usuario/:id', function(req, res) {
    res.send(req.params.id);
});

app.delete('/usuario', function(req, res) {
    res.json('deleteUsuario');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando por el puerto', process.env.PORT);
});