// Requires
var express = require('express');
var mongoose = require('mongoose');


// Inicializar variables
var app = express();



// Conecciones
mongoose.connect('mongodb://localhost/storeDB', { useNewUrlParser: true }, ( err, res )=>{

    if( err ) throw err;

    console.log('Base de datos: \x1b[32m%s\x1b[0m',' online');
})



// Rutas
app.get('/', ( req, res, next )=>{
    res.status(200).json({
        ok: true,
        message: 'Peticion realizada correctamente'
    });
});



// Escuchar peticiones
app.listen(8080, ()=>{
    console.log('Express server puerto 8080: \x1b[32m%s\x1b[0m',' online');
})