exports.trace = function (e) {
try{fs.appendFileSync('./log/log.html',`<br><b style="color:#00ee00;background-color:#000000;font-family:monospace;">`+"["+month+"-"+date+"-"+year+"*"+hours+"."+minutes+"."+seconds+"]"+`[trace]>>>`+e+`</b>\n`);}catch(e){};console.log('\x1b[32m'+e+'\x1b[0m');//trace
};
exports.debug = function (e) {
try{fs.appendFileSync('./log/log.html',`<br><b style="color:#0022ff;background-color:#000000;font-family:monospace;">`+"["+month+"-"+date+"-"+year+"*"+hours+"."+minutes+"."+seconds+"]"+`[debug]>>>`+e+`</b>\n`);}catch(e){};console.log('\x1b[36m'+e+'\x1b[0m');//debug
};
exports.info = function (e) {
try{fs.appendFileSync('./log/log.html',`<br><b style="color:#ffffff;background-color:#000000;font-family:monospace;">`+"["+month+"-"+date+"-"+year+"*"+hours+"."+minutes+"."+seconds+"]"+`[info]>>>`+e+`</b>\n`);}catch(e){};console.log('\x1b[97m'+e+'\x1b[0m');//info
};
exports.WARN = function (e) {
try{fs.appendFileSync('./log/log.html',`<br><b style="color:#ff9900;background-color:#000000;font-family:monospace;">`+"["+month+"-"+date+"-"+year+"*"+hours+"."+minutes+"."+seconds+"]"+`[WARN]>>>`+e+`</b>\n`);}catch(e){};console.log('\x1b[33m'+e+'\x1b[0m');//warn
};
exports.ERROR = function (e) {
try{fs.appendFileSync('./log/log.html',`<br><b style="color:#ad6e00;background-color:#000000;font-family:monospace;">`+"["+month+"-"+date+"-"+year+"*"+hours+"."+minutes+"."+seconds+"]"+`[ERROR]>>>`+e+`</b>\n`);}catch(e){};console.log('\x1b[93m'+e+'\x1b[0m');//error
};
exports.FATAL = function (e) {
try{fs.appendFileSync('./log/log.html',`<br><b style="color:#ff0000;background-color:#000000;font-family:monospace;">`+"["+month+"-"+date+"-"+year+"*"+hours+"."+minutes+"."+seconds+"]"+`[FATAL]>>>`+e+`</b>\n`);}catch(e){};console.log('\x1b[31m'+e+'\x1b[0m');//fatal
};
