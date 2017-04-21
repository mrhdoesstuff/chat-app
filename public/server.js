var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');
var port = process.env.PORT || 8080;

const express = require('express');

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
	const username = socket.handshake.query.username;
	console.log(`${username} connected`);

	socket.on('client:message', data => {
		console.log(`${data.username}: ${data.message}`);

		socket.broadcast.emit('server:message', data);
	});

	socket.on('disconnect', () => {
		console.log(`${username} disconnected`);
  });
});

server.listen(port, () => {
  console.log('listening on *:' + port);
});