const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
require('./config/config');

app.use(require('./routes/usuario'));

app.get('/', function(req, res) {
    res.json('Hola mundo');
});

mongoose.connect(
    'mongodb+srv://georgebeta:basededatos470998@clustergeorgebeta-yuhgi.mongodb.net/cafe', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    (err, res) => {
        if (err) throw err;
        console.log('Base de Datos ON-LINE');
    }
);

app.listen(process.env.PORT, () => {
    console.log('Escuchando por el puerto', process.env.PORT);
});