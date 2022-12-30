const express=require('express');
const app=express();
const http=require('http').Server(app);
const io=require('socket.io').listen(http);
const bodyParser=require('body-parser');
const fs=require('fs');
const cookieParser=require('cookie-parser');
const path=require('path');
const JSONdb = require('simple-json-db');
const db=new JSONdb('db.json');
const dns = require("dns");
const tls = require('tls')
const ip = require("ip");
require('dotenv').config();
// some stuff goe here or put yourr server address here
var name=process.env.REPL_SLUG+"."+process.env.REPL_OWNER+".repl.co";


setTimeout(function(){
var version=fs.readFileSync('./public/assets/version.txt');console.clear();
var versionInfo=`BakChat version `+version+` -- as PID:`+process.pid+` on `+process.platform+`\n\n`+fs.readFileSync('assets/credits.txt')+`\n-------------------`;
console.log(versionInfo);
  
  /*I768*/var __DEVMODE=false,__timezoneoffset=4,enablesend,placeholdervar,recentHistory="",bar="";
let date_ob=new Date();let date=("0" + date_ob.getDate()).slice(-2);let month=("0" + (date_ob.getMonth() + 1)).slice(-2);let year=date_ob.getFullYear();let hours=date_ob.getHours()-__timezoneoffset;let minutes=date_ob.getMinutes();let seconds=date_ob.getSeconds();
app.use(bodyParser.json());app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());app.use(express.static('public'));
app.get('/',(req,res) =>{res.sendFile(__dirname+'/public/index.html');});
app.get('/:room',(req,res) =>{res.sendFile(__dirname+'/public/index.html');});
app.get('*',(req,res) =>{res.sendFile(__dirname+'/public/404.html');});
http.listen(3000,()=> placeholdervar);              //it works trust me
var cussWords=['fuck','shit','motherfucker','mothertrucker','Bastard','Bellend','Bloodclaat','Clunge','Minge','Punani','Pussy','Twat','Cunt','penis','vulva','vagina','sex','rape','cum','orgasm',];io.engine.generateId=(req)=>{return randHex(6);};
function urmom(file) {db.set(file,{name:file});fs.appendFileSync('./public/logs.html','<a href="/../chatlogs/'+file+'">'+file+'</a><br>');}
function Tolog(room,data){
    fs.appendFileSync('./public/chatlogs/'+room+'.txt',data)
    fs.appendFileSync('./chatlogs/'+room+'.txt',data)
}
function restart() {process.on("exit",function(){require("child_process").spawn(process.argv.shift(),process.argv,{cwd:process.cwd(),detached : true,stdio: "inherit"});});process.exit();}
function query(obj,and,db){let keys=Object.keys(obj),values=Object.values(obj),main={},ret={};db=db||io.of("/").sockets,defaults(db,!0);for(let i in keys)i>0&&and?Object.keys(main).filter((el=>db[el].proto[keys[i]]===values[i])).map((el=>ret[el]=db[el])):Object.keys(db).filter((el=>db[el].proto[keys[i]]===values[i])).map((el=>main[el]=db[el]));return and?ret:main}
function linez(str){var str_arr = str.split('\n');var newline_length = str_arr.length;return newline_length;}
function RemoveFirstLine(text){var lines = text.split('\n');lines.splice(0,1);return lines.join('\n');}
function queryKeys(obj,and,db){let keys=Object.keys(obj),values=Object.values(obj),main={},ret={};db=db||io.of("/").sockets;for(let i in keys)i>0&&and?Object.keys(main).filter((el=>db[el].proto[keys[i]]===values[i])).map((el=>ret[el]=db[el])):Object.keys(db).filter((el=>db[el].proto[keys[i]]===values[i])).map((el=>main[el]=db[el]));return and?Object.keys(ret):Object.keys(main)}
setInterval(function(){
  bar="";for(let i=0;i<process.stdout.columns;i++){bar=bar+"-"};
  for (let i=0;i<linez(recentHistory);i++){
    console.clear();
          if(linez(recentHistory)===(process.stdout.rows-4)){recentHistory=RemoveFirstLine(recentHistory)}
  }
  console.log(version+" - "+Date.now()+" ["+name+"] "+"\n"+bar+recentHistory);
  },100);
  io.on('connection',(socket) =>{
  socket.on('join',(data) =>{
    let room;
    defaults(socket);
    if(data&&data!=='/'){room=data.substr(1).replace(/\W/g,'');}else{room='main';}
    let allsockets=io.of('/').sockets;
    defaults(allsockets,true);
    if (!Object.keys(allsockets).includes(room)){
      socket.proto.room=room;
      socket.proto.name=socket.id;
      socket.proto.id=socket.id;
      socket.proto.created=new Date();
      socket.proto.admin=false;

      rooms=Object.keys(allsockets).map(el => allsockets[el].proto.room);
      socket.join(room);
      socket.emit('bounce',{
        type: 'join',
        status: true
      });
      toRoom(room).emit('message',{
        name: 'server',
        message: `${socket.proto.id} has joined`
      });recentHistory=recentHistory+"\n"+hours+":"+minutes+":"+seconds+" "+':  '+`${socket.proto.name} has joined ${socket.proto.room}`;
      Tolog(socket.proto.room,'server(S)@'+hours+":"+minutes+":"+seconds+" "+year+"-"+month+"-"+date+''+':'+`${socket.proto.name} has joined`+'\n');
      // fs.appendFileSync('./public/chatlogs/'+socket.proto.room+'.txt','server(S)@'+hours+":"+minutes+":"+seconds+" "+year+"-"+month+"-"+date+''+':'+`${socket.proto.name} has joined`+'\n');
      socket.emit('message',{
        name: 'server',
        message: 'Welcome to BakChat!<br> You are in room "'+socket.proto.room+'".<br>'+fs.readFileSync('assets/join_msg.txt')
      });
      if(__DEVMODE){console.log(query({room:room}),socket.proto.room);}
      if (query({
        room: room
      }).length === 1 && socket.proto.room !== 'main'){
        socket.proto.admin=true;
        toRoom(socket.proto.room).emit('message',{
          name: 'server',
          message: `${socket.proto.name} is now an admin`
        });
      }
    } else{
      socket.emit('message',{
        name: 'server',
        message: `Error: "${room}" is a user (go back to <a href="/">main</a>?)`
      });
      socket.disconnect();
      log(0);
    }
  });

  socket.on('message',(data) =>{
    defaults(socket);
    let message=data.message.substr(0,500);
    let name=socket.proto.id;
    let sockets=query({room:socket.proto.room});

    let allsockets=io.of('/').sockets;
    let room=socket.proto.room;
    defaults(sockets,true);
    

    if (message && !socket.proto.muted){
      if (message[0] === '/'){
        let newname;
        let selectedSocket;
        let rooms;
        switch (message.split(' ')[0]){
          /*credits*/case '/credits':socket.emit('message',{name: 'server',message: `BakChat version `+version+'<br><pre>'+fs.readFileSync('assets/credits.txt')+'</pre>'});break;
            //ban-----------------------------------------------------------------------------------------------
          case '/ban':
            selectedSocket=query({
              name: message.split(' ')[1],
              room: room
            },true);
            selectedSocket=selectedSocket[Object.keys(selectedSocket)[0]];
            if (socket.proto.admin){
              if (selectedSocket){
                selectedSocket.disconnect();
                fs.appendFileSync('public/bans/'+message.split(' ')[1]+'.txt','banned');
                // console.log(selectedSocket+'has been banned');
              } else{
                socket.emit('message',{
                  name: 'server',
                  message: `Error: User ${message.split(' ')[1]} does not exist`
                });
              }
            } else{
              socket.emit('message',{name:'server',message:`Error: Invalid credentials`});
            }
            break;
            //unban-----------------------------------------------------------------------------------------------
          case '/unban':
            selectedSocket=query({
              name: message.split(' ')[1],
              room: room
            },true);
            selectedSocket=selectedSocket[Object.keys(selectedSocket)[0]];
            if (socket.proto.admin){
                fs.unlink('public/bans/'+message.split(' ')[1]+'.txt',(err)=>{if(err){throw err;}});
              socket.emit('message',{name:'server',message:`${message.split(' ')[1]} has been unbanned`});
            } else{
              socket.emit('message',{name:'server',message:`Error: Invalid credentials`});
            }
            break;
            //unban
          case '/whois':
            selectedSocket=query({
              name: message.split(' ')[1],
              id: message.split(' ')[1]
            });
            selectedSocket=query({
              room:room
            },false,selectedSocket);
            selectedSocket=selectedSocket[Object.keys(selectedSocket)[0]];
            rooms=queryKeys({
              name: message.split(' ')[1],
              id: message.split(' ')[1]
            }).map(el => allsockets[el].proto.room);
            if(selectedSocket){
              socket.emit('message',{
                name: 'server',
                message: `<br>${selectedSocket.proto.id} is ${selectedSocket.proto.name}<br>
								${selectedSocket.proto.name} is in ${rooms.length} room${rooms.length > 1 ? 's' : ''}: ${rooms.join(',')}<br>
								Online for: ${formatHMS(new Date() - selectedSocket.proto.created)}<br>
								Admin: ${selectedSocket.proto.admin}`
              });
            }else if(message.split(' ')[1] && message.split(' ')[1].indexOf('#') === 0){
              selectedSocket=query({
                room: message.split(' ')[1].substr(1)
              });
              rooms=Object.keys(selectedSocket).map(el => selectedSocket[el].proto.name);
              socket.emit('message',{
                name:'server',
                message:`${message.split(' ')[1]}has${rooms.length} user${rooms.length > 1 ? 's' : ''}: ${rooms.join(',')}`
              });
            } else{
              socket.emit('message',{
                name: 'server',
                message: `Error: User/Room ${message.split(' ')[1]} does not exist`
              });
            }
            break;
          case '/kick':
            selectedSocket=query({
              name: message.split(' ')[1],
              room: room
            },true);
            selectedSocket=selectedSocket[Object.keys(selectedSocket)[0]];
            if (socket.proto.admin){
              if (selectedSocket){
                selectedSocket.disconnect();
              } else{
                socket.emit('message',{
                  name: 'server',
                  message: `Error: User ${message.split(' ')[1]} does not exist`
                });
              }
            } else{
              socket.emit('message',{
                name: 'server',
                message: `Error: Invalid credentials`
              });
            }
            break;
          case'/restart'://barp
            if(socket.proto.admin){
              restart();
            }else{
              socket.emit('message',{name: 'server',message: `Error: Invalid credentials`}
            );}
            break;

          case '/deop':
            selectedSocket=query({
              name: message.split(' ')[1],
              room: room
            },true);
            selectedSocket=selectedSocket[Object.keys(selectedSocket)[0]];
            if (socket.proto.admin){
              if (selectedSocket && selectedSocket.proto.id !== socket.proto.id){
                selectedSocket.proto.admin=false;
                selectedSocket.proto.name=selectedSocket.proto.name.replace('@','');
                toRoom(socket.proto.room).emit('message',{
                  name: 'server',
                  message: `${selectedSocket.proto.name} is no longer an admin`
                });Tolog(socket.proto.room,'server(S)@'+hours+":"+minutes+":"+seconds+" "+year+"-"+month+"-"+date+''+':'+`${selectedSocket.proto.name} is no longer an admin`+'\n');
                // fs.appendFileSync('./public/chatlogs/'+socket.proto.room+'.txt','server(S):@'+hours+":"+minutes+":"+seconds+" "+year+"-"+month+"-"+date+''+':'+`${selectedSocket.proto.name} is no longer an admin`+'\n');
              } else{
                socket.emit('message',{
                  name: 'server',
                  message: `Error: User ${message.split(' ')[1]} does not exist`
                });
              }
            } else{
              socket.emit('message',{
                name: 'server',
                message: `Error: Invalid credentials`
              });
            }
            break;
          case '/op':
            selectedSocket=query({
              name: message.split(' ')[1],
              room: room
            },true);
            selectedSocket=selectedSocket[Object.keys(selectedSocket)[0]];
            if (socket.proto.admin){
              if (selectedSocket){
                selectedSocket.proto.admin=true;
                selectedSocket.proto.name='@'+selectedSocket.proto.name;
                toRoom(socket.proto.room).emit('message',{
                  name: 'server',
                  message: `${selectedSocket.proto.name} is now an admin`
                });Tolog(socket.proto.room,'server(S)@'+hours+":"+minutes+":"+seconds+" "+year+"-"+month+"-"+date+''+':'+`${selectedSocket.proto.name} is now an admin`+'\n');
                // fs.appendFileSync('./public/chatlogs/'+socket.proto.room+'.txt','server(S):)@'+hours+":"+minutes+":"+seconds+" "+year+"-"+month+"-"+date+''+':'+`${selectedSocket.proto.name} is now an admin`+'\n');
              } else{
                socket.emit('message',{
                  name: 'server',
                  message: `Error: User ${message.split(' ')[1]} does not exist`
                });
              }
            } else{
              socket.emit('message',{
                name: 'server',
                message: `Error: Invalid credentials`
              });
            }
            break;
          case '/unmute':
            selectedSocket=query({
              name: message.split(' ')[1],
              room: room
            },true);
            selectedSocket=selectedSocket[Object.keys(selectedSocket)[0]];
            if (socket.proto.admin){
              if (selectedSocket){
                selectedSocket.proto.muted=false;
                toRoom(socket.proto.room).emit('message',{
                  name: 'server',
                  message: `${selectedSocket.proto.name} has been unmuted`
                });
              } else{
                socket.emit('message',{
                  name: 'server',
                  message: `Error: User ${message.split(' ')[1]} does not exist`
                });
              }
            } else{
              socket.emit('message',{
                name: 'server',
                message: `Error: Invalid credentials`
              });
            }
            break;
          case '/mute':
            selectedSocket=query({
              name: message.split(' ')[1],
              room: room
            },true);
            selectedSocket=selectedSocket[Object.keys(selectedSocket)[0]];
            if (socket.proto.admin){
              if (selectedSocket && selectedSocket.proto.id !== socket.proto.id){
                selectedSocket.proto.muted=true;
                toRoom(socket.proto.room).emit('message',{
                  name: 'server',
                  message: `${selectedSocket.proto.name} has been muted`
                });
              } else{
                socket.emit('message',{
                  name: 'server',
                  message: `Error: User ${message.split(' ')[1]} does not exist`
                });
              }
            } else{
              socket.emit('message',{
                name: 'server',
                message: `Error: Invalid credentials`
              });
            }
            break;
          case '/msg':
            selectedSocket=query({
              name: message.split(' ')[1],
              room: room
            },true);
            selectedSocket=selectedSocket[Object.keys(selectedSocket)[0]];
            if (selectedSocket){
              socket.to(selectedSocket.proto.id).emit('message',{
                name: socket.proto.name,
                message: message.split(' ').slice(2).join(' '),
                color: socket.proto.id,
                type: 'direct'
              });
              socket.emit('message',{
                name: 'server',
                message: `Message sent to ${message.split(' ')[1]}`
              });
            } else{
              socket.emit('message',{
                name: 'server',
                message: `Error: User ${message.split(' ')[1]} does not exist`
              });
            }
            break;
            case'/rr':socket.emit('message',{name:'server',message:`<meta http-equiv="refresh" content="2;url=https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>`});break;
          case '/key':
            if (message.split(' ')[1] === process.env.ADMIN){
              if (!socket.proto.admin){
                socket.proto.admin=true;
                socket.proto.name='@'+socket.proto.name;
                toRoom(socket.proto.room).emit('message',{
                  name: 'server',
                  message: `${socket.proto.name} is now an admin`
                });
              } else{
                socket.emit('message',{
                  name: 'server',
                  message: `Error: Already an admin`
                });
              }
            } else{
              socket.emit('message',{
                name: 'server',
                message: 'Error: Invalid credentials'
              });
            } 
            break;
          case '/nick':
            if (message.split(' ')[1] && message.split(' ')[1].replace(0,0)){
              newname=message.split(' ')[1].replace(0,0).substr(0,30);
              if (queryKeys({
                name:message.split(' ')[1],
                room:room
              },true).length===0&& newname !== 'server'){
                if(socket.proto.admin){
                  socket.proto.name='@'+newname;
                } else{
                  socket.proto.name=newname;
                }
                toRoom(socket.proto.room).emit('message',{
                  name: 'server',
                  message: `${name} is now known as ${socket.proto.name}`,
                });
                recentHistory=recentHistory+"\n"+hours+":"+minutes+":"+seconds+" "+':  '+`${name} is now known as ${socket.proto.name} ROOM --> ${socket.proto.room}`;
                Tolog(socket.proto.room,'server(S)@'+hours+":"+minutes+":"+seconds+" "+year+"-"+month+"-"+date+''+':'+`${name} is now known as ${socket.proto.name}`+'\n');
                // fs.appendFileSync('./public/chatlogs/'+socket.proto.room+'.txt','server(S):)@'+hours+":"+minutes+":"+seconds+" "+year+"-"+month+"-"+date+''+':'+`${name} is now known as ${socket.proto.name}`+'\n');
              } else{
                socket.emit('message',{
                  name: 'server',
                  message: `Error: Name ${newname} already exists`
                });
              }
            } else{
              socket.emit('message',{
                name: 'server',
                message: `Error: Invalid Syntax`
              });
            }
            break;
          case '/?':
            fs.readFile('assets/cmd.txt','utf8',(err,file) =>{
              socket.emit('message',{
                name: 'server',
                message: file
              });
            });
            break;
          case '/users':
            socket.emit('message',{
              name: 'server',
              message: queryKeys({
                room: room
              }).map(el => sockets[el].proto.name).join(',').replace(socket.proto.name,'<b>$&</b>')
            });
            break;
            case'/logs':if(true){fs.readdir(path.resolve(__dirname,'./public/chatlogs/'),(err,files)=>{for(let file of files){urmom(file);}});socket.emit('message',{name:'server',message:'<a href="/../logs.html">logs</a>'});}break;
          case '/rooms':
            rooms=occurences(Object.keys(allsockets).map(el => allsockets[el].proto.room));
            let users=rooms.b;
            rooms=rooms.a;
            socket.emit('message',{
              name:'server',
              message:rooms.map((el,i)=>`<a href="/${el}" target="_self">${el}</a> (${users[i]})`).join(',')
            });
            break;
          default:
            socket.emit('message',{
              name: 'server',
              message: 'Error: Unknown command'
            });
        }
      } else{
         enablesend=true;
              for (let i=0;i<cussWords.length;i++){
          if(message.replace(/\s+/g,'').toLowerCase().includes(cussWords[i].toLowerCase())){enablesend=false;}
        }
        if((message.includes('/key')!==true)&&(enablesend)){

          /*LOGGING CODE*/Tolog(socket.proto.room,socket.proto.id+'('+socket.proto.name+')@'+hours+":"+minutes+":"+seconds+" "+year+"-"+month+"-"+date+''+':'+message+'\n');}else if(message.includes('/key')!==true){Tolog(socket.proto.room,'---'+socket.proto.id+'('+socket.proto.name+')@'+hours+":"+minutes+":"+seconds+" "+year+"-"+month+"-"+date+''+':'+message+'\n');}
      if(enablesend===true){
        toRoom(socket.proto.room).emit('message',{
          name: socket.proto.name,
          message: message,
          color: socket.proto.id
        });}
        }
        enablesend=true;
    }
    }
  );
  socket.on('disconnect',(data) =>{
    if (socket && socket.proto && socket.proto.room){
      socket.to(socket.proto.room).emit('message',{
        name: 'server',
        message: `${socket.proto.name} has left`
      });
      recentHistory=recentHistory+"\n"+hours+":"+minutes+":"+seconds+" "+':  '+`${socket.proto.name} has left ${socket.proto.room}`;
      Tolog(socket.proto.room,'server(S):@'+hours+":"+minutes+":"+seconds+" "+year+"-"+month+"-"+date+''+':'+`${socket.proto.name} has left`+'\n');
      
    }
  });
});

function defaults(socket,many){
  if (many){
    for (let i of Object.keys(socket)){
      socket[i].proto=socket[i].proto ||{};
      socket[i].proto.room=socket[i].proto.room || 'main';
      socket[i].proto.name=socket[i].proto.name || socket[i].id;
      socket[i].proto.id=socket[i].proto.id || socket[i].id;
      socket[i].proto.muted=socket[i].proto.muted || false;
      socket[i].proto.created=socket[i].proto.created || new Date();
      socket[i].proto.admin=socket[i].proto.admin || false;
    }
  } else{
    socket.proto=socket.proto ||{};
    socket.proto.room=socket.proto.room || 'main';
    socket.proto.name=socket.proto.name || socket.id;
    socket.proto.id=socket.proto.id || socket.id;
    socket.proto.muted=socket.proto.muted || false;
    socket.proto.created=socket.proto.created || new Date();
    socket.proto.admin=socket.proto.admin || false;
  }
}
function randHex(len){for(var color="",i=0;i<len;i++)color+="0123456789ABCDEF"[Math.floor(16*Math.random())];return color}
function copy(arr){return JSON.parse(JSON.stringify(arr))}
function occurences(arr){var prev,a=[],b=[];(arr=copy(arr)).sort();for(var i=0;i<arr.length;i++)arr[i]!==prev?(a.push(arr[i]),b.push(1)):b[b.length-1]++,prev=arr[i];return{a:a,b:b}}
function toRoom(room){return{emit:(type,data)=>{let sockets=queryKeys({room:room});for(let i in sockets)io.to(sockets[i]).emit(type,data)}}}
function formatHMS(time){let hours=Math.floor(time/1e3/60/60),minutes=Math.floor(time/1e3/60)%60,seconds=Math.floor(time/1e3)%60;return`${hours}h:${minutes<10?"0"+minutes:minutes}m:${seconds<10?"0"+seconds:seconds}s`}
},2000);
// console.log("This is pid " + process.pid);
// setTimeout(function () {

// }, 5000);