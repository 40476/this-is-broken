case'/restart':if(socket.proto.admin){
  /* if user is admin*/
}else{
  /*code for if user is not admin*/
}break;

/*
socket.emit('message',{
  name: 'server',
  message: `Error: Invalid credentials`
});
*/



case'/post':if(socket.proto.admin){
  socket.emit('message',{
  name:message.split(' ')[1],
  room:room,
  message:message.split(' ')[2]
});
}else{
  socket.emit('message',{name:'server',message:`Error: Invalid credentials`});
}break;