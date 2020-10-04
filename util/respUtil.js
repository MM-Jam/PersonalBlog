function respWrite(status,msg,data){
    return JSON.stringify({status,msg,data});
}
module.exports.respWrite = respWrite;