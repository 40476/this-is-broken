const express=require('express');
const app=express();
const http=require('http').Server(app);

// configure to run iwth multiple ports --> https://stackoverflow.com/questions/19296797/running-node-js-http-server-on-multiple-ports

var fetchUrl = require("fetch").fetchUrl;
const io=require('socket.io').listen(http);
const bodyParser=require('body-parser');
const fs=require('fs');
const cookieParser=require('cookie-parser');
const path=require('path');
const JSONdb = require('simple-json-db');
const db=new JSONdb('db.json');
require('dotenv').config();

const config={
 "time":{
  "zone":6,    
 },
 "server":{
  "name":`https://`+process.env.REPL_SLUG+"."+process.env.REPL_OWNER+".repl.co",
 },
 "rm_publicLogs_startup":true,
 "DEVMODE":false,
 "consoleRefreshRate":500,
 "chat":{
  "notAllowedWords":['fuck','shit','motherfucker','mothertrucker','Bastard','Bellend','Bloodclaat','Clunge','Minge','Punani','Pussy','Twat','Cunt','penis','vulva','vagina','sex','rape','cum','orgasm'],
  "disableTXTfilter":true, 
 }
};
//TODO: get config from json file without parse errors
//const config=fs.readFileSync('./config.json');

//--------------------------good grief, please forgive me---------------------------------
let date_ob=new Date();let date=("0" + date_ob.getDate()).slice(-2);let month=("0" + (date_ob.getMonth() + 1)).slice(-2);let year=date_ob.getFullYear();let hours=date_ob.getHours()-config.time.zone;let minutes=date_ob.getMinutes();let seconds=date_ob.getSeconds();
function DandT(){return "["+year+"-"+month+"-"+date+"*"+hours+"."+minutes+"."+seconds+"]"} 

const logger = {
  "trace":function(e){try{fs.appendFileSync('./log/log.html',`<br><b style="color:#00ee00;background-color:#000000;font-family:monospace;">`+DandT()+`[trace]>>>`+e+`</b>\n`);}catch(e){};console.log('\x1b[32m'+e+'\x1b[0m');},//trace
  "debug":function(e){try{fs.appendFileSync('./log/log.html',`<br><b style="color:#0022ff;background-color:#000000;font-family:monospace;">`+DandT()+`[debug]>>>`+e+`</b>\n`);}catch(e){};console.log('\x1b[36m'+e+'\x1b[0m');},//debug
  "info":function(e){try{fs.appendFileSync('./log/log.html',`<br><b style="color:#ffffff;background-color:#000000;font-family:monospace;">`+DandT()+`[info]>>>`+e+`</b>\n`);}catch(e){};console.log('\x1b[97m'+e+'\x1b[0m');},//info
  "warn":function(e){try{fs.appendFileSync('./log/log.html',`<br><b style="color:#ff9900;background-color:#000000;font-family:monospace;">`+DandT()+`[WARN]>>>`+e+`</b>\n`);}catch(e){};console.log('\x1b[33m'+e+'\x1b[0m');},//warn
  "error":function(e){try{fs.appendFileSync('./log/log.html',`<br><b style="color:#ad6e00;background-color:#000000;font-family:monospace;">`+DandT()+`[ERROR]>>>`+e+`</b>\n`);}catch(e){};console.log('\x1b[93m'+e+'\x1b[0m');},//error
  "fatal":function(e){try{fs.appendFileSync('./log/log.html',`<br><b style="color:#ff0000;background-color:#000000;font-family:monospace;">`+DandT()+`[FATAL]>>>`+e+`</b>\n`);}catch(e){};console.log('\x1b[31m'+e+'\x1b[0m');},//fatal
};
logger.trace('server started')

// log tester
// logger.trace("Entering cheese testing");
// logger.debug("Got cheese.");
// logger.info("Cheese is Comté.");
// logger.warn("Cheese is quite smelly.");
// logger.error("Cheese is too ripe!");
// logger.fatal("Cheese was breeding ground for listeria.");
//------------------------------------------------------------------------------------------


if(true){
  
setTimeout(function(){
var version=fs.readFileSync('./public/assets/version.txt');
var versionInfo=`BakChat version `+version+` -- as PID:`+process.pid+` on `+process.platform+`\n\n`+fs.readFileSync('assets/credits.txt')+`\n-------------------`;
console.log(versionInfo);

  /*I768*/var enablesend,placeholdervar,recentHistory="",bar="",consoleLastRefresh;
app.use(bodyParser.json());app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());app.use(express.static('public'));
app.get('/',(req,res) =>{res.sendFile(__dirname+'/public/index.html');});
app.get('/:room',(req,res) =>{res.sendFile(__dirname+'/public/index.html');});
app.get('*',(req,res) =>{res.sendFile(__dirname+'/public/404.html');});
http.listen(3000,()=> placeholdervar);              //it works trust me
var cussWords=config.chat.notAllowedWords;
  //['fuck','shit','motherfucker','mothertrucker','Bastard','Bellend','Bloodclaat','Clunge','Minge','Punani','Pussy','Twat','Cunt','penis','vulva','vagina','sex','rape','cum','orgasm',];
io.engine.generateId=(req)=>{return randHex(6);};
var sha256=function r(o){function f(r,o){return r>>>o|r<<32-o}for(var t,n,a=Math.pow,c=a(2,32),e="length",i="",h=[],u=8*o[e],v=r.h=r.h||[],l=r.k=r.k||[],s=l[e],g={},k=2;s<64;k++)if(!g[k]){for(t=0;t<313;t+=k)g[t]=k;v[s]=a(k,.5)*c|0,l[s++]=a(k,1/3)*c|0}for(o+="";o[e]%64-56;)o+="\0";for(t=0;t<o[e];t++){if((n=o.charCodeAt(t))>>8)return;h[t>>2]|=n<<(3-t)%4*8}for(h[h[e]]=u/c|0,h[h[e]]=u,n=0;n<h[e];){var d=h.slice(n,n+=16),p=v;for(v=v.slice(0,8),t=0;t<64;t++){var w=d[t-15],A=d[t-2],C=v[0],M=v[4],A=v[7]+(f(M,6)^f(M,11)^f(M,25))+(M&v[5]^~M&v[6])+l[t]+(d[t]=t<16?d[t]:d[t-16]+(f(w,7)^f(w,18)^w>>>3)+d[t-7]+(f(A,17)^f(A,19)^A>>>10)|0);(v=[A+((f(C,2)^f(C,13)^f(C,22))+(C&v[1]^C&v[2]^v[1]&v[2]))|0].concat(v))[4]=v[4]+A|0}for(t=0;t<8;t++)v[t]=v[t]+p[t]|0}for(t=0;t<8;t++)for(n=3;n+1;n--){var S=v[t]>>8*n&255;i+=(S<16?0:"")+S.toString(16)}return i};
function urmom(file) {db.set(file,{name:file});fs.appendFileSync('./public/logs.html','<a href="/../chatlogs/'+file+'">'+file+'</a><br>');}
function Tolog(room,data){fs.appendFileSync('./public/chatlogs/'+room+'.txt',data);fs.appendFileSync('./chatlogs/'+room+'.txt',data)}
function delFolder(dir){fs.readdir(dir, (err, files) => {if (err) throw err;for (let file of files) fs.unlink(dir+'/'+file,(err)=>{if (err) throw err;});return fs.rmdir(dir,(err) => {if (err) throw err;console.log('folder is deleted');});});}
function makeFolder(dir){!fs.existsSync(dir) && fs.mkdirSync(dir, { recursive: true });logger.trace('folder "'+dir+'" created')}
function restart() {logger.fatal('admin command trigger-> restart');process.on("exit",function(){require("child_process").spawn(process.argv.shift(),process.argv,{cwd:process.cwd(),detached : true,stdio: "inherit"});});process.exit();}
function query(obj,and,db){let keys=Object.keys(obj),values=Object.values(obj),main={},ret={};db=db||io.of("/").sockets,defaults(db,!0);for(let i in keys)i>0&&and?Object.keys(main).filter((el=>db[el].proto[keys[i]]===values[i])).map((el=>ret[el]=db[el])):Object.keys(db).filter((el=>db[el].proto[keys[i]]===values[i])).map((el=>main[el]=db[el]));return and?ret:main}
function linez(str){var str_arr = str.split('\n');var newline_length = str_arr.length;return newline_length;}
function RemoveFirstLine(text){var lines = text.split('\n');lines.splice(0,1);return lines.join('\n');}
function queryKeys(obj,and,db){let keys=Object.keys(obj),values=Object.values(obj),main={},ret={};db=db||io.of("/").sockets;for(let i in keys)i>0&&and?Object.keys(main).filter((el=>db[el].proto[keys[i]]===values[i])).map((el=>ret[el]=db[el])):Object.keys(db).filter((el=>db[el].proto[keys[i]]===values[i])).map((el=>main[el]=db[el]));return and?Object.keys(ret):Object.keys(main)}

if(config.rm_publicLogs_startup){makeFolder('./public/chatlogs');delFolder('./public/chatlogs');setTimeout(function(){makeFolder('./public/chatlogs')},50);}
  setInterval(function(){bar="";for(let i=0;i<process.stdout.columns;i++){bar=bar+"-"};for (let i=0;i<linez(recentHistory);i++){console.clear();if(linez(recentHistory)===(process.stdout.rows-4)){recentHistory=RemoveFirstLine(recentHistory)}}console.log(version+" - "+Date.now()+"-"+(Date.now()-consoleLastRefresh)+" ["+config.server.name+"] "+"\n"+bar+recentHistory);consoleLastRefresh=Date.now()},config.consoleRefreshRate);
// setInterval(function(){},1000);

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
      if(config.DEVMODE){console.log(query({room:room}),socket.proto.room);}
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



          case'/account':
            
            fs.writeFileSync('./public/accounts/'+message.split(' ')[1]+'.txt',sha256(message.split(' ')[2]));
          break;
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
          case'/update':if(socket.proto.admin){
              /* if user is admin*/
            if(fs.readFileSync('./index.js')!==fetchUrl('https://raw.githubusercontent.com/40476/BakChat/main/index.js', function(){})){logger.warn('version mismatch')}
            }else{}break;

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
            // case'/rr':socket.emit('message',{name:'server',message:`<meta http-equiv="refresh" content="2;url=https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>`});break;
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
      if((enablesend===true)||(config.chat.disableTXTfilter)){
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
}
// console.log("This is pid " + process.pid);
// setTimeout(function () {

// }, 5000);