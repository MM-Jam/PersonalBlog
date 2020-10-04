//读取配置文件的
const fs = require('fs');
const globalConfig = {};
let config = fs.readFileSync('./server.config.js');
const configArr = config.toString().split(';');
for(let i=0;i<configArr.length;i++){
    globalConfig[configArr[i].split('=')[0].trim()] = configArr[i].split('=')[1].trim()
}
// console.log(globalConfig)//{ port: '8080', web_path: 'web' }
//导出
module.exports = globalConfig;