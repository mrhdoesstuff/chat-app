var http = require('http');
var express = require('express');
var socket = require('socket.io');
var cors = require('cors');
var path = require('path');

const port = process.env.PORT || 8080;

const app = express();
const server = http.Server(app);
const io = socket(server);

app.use(cors());

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.sendFile(path.resolve('public/index.html'));
});

io.on('connection', socket => {
	// const username = socket.handshake.query.username;
	// console.log(`${username} connected`);

	socket.on('client message', data => {
		// console.log(`${data.username}: ${data.message}`);

	io.emit('server message', data);
	
	});

	socket.on('disconnect', () => {
  });
});

server.listen(port, () => {
  console.log('listening on *:' + port);
});