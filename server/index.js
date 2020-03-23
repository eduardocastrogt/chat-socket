var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//Middleware
app.use(express.static('client'));

//Endpoint prueba
app.get('/hola-mundo', function (req, res) {
    res.status(200).send('Hola mundo');
})

//Arreglo
var message = [{
    id: 1,
    text: 'Chat',
    nickname: 'Boot :D'
}];

//Socket
io.on('connection', function (socket) {
    console.log(socket.handshake.address);
    socket.emit('message', message);
    socket.on('add-message', function(data){
        message.push(data);

        io.sockets.emit('message', message);
    });
})

//Iniciando el servidor
server.listen(4455, function () {
    console.log('Servidor iniciado');
})