console.log('starting server....');
const http = require('http');
const hostname = 'localhost';
const port = '8000';
console.log('fetching port and starting...');
const server = http.createServer().listen(port,hostname);
console.log('yay chat server is up and running on' + hostname +':' + port);
var socketList = require('socket.io').listen(server);
socketList.sockets.on('connection',function(socket){
	console.log('new connection received!');
  socket.on('disconnect',function(){
  console.log('socket disconnected');

});

socket.on('join_chat_room', function(data){
  console.log('chat room rejoining request:',data);

 
  socket.join(data.chatroom_name);
  socketList.in(data.chatroom_name).emit('
  new_user_joined',data	);
}
});
});