var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//Middleware
app.use(express.static('client'));

//Endpoint prueba
app.get('/hola-mundo', function(req, res){
    res.status(200).send('Hola mundo');
})

//Socket
io.on('connection', function(socket){
    console.log(socket.handshake.address);
})

//Iniciando el servidor
server.listen(4455, function(){
    console.log('Servidor iniciado');
})