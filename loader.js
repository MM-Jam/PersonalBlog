//加载api层的文件的
const fs = require('fs');
const globalConfig = require('./config');

//读取放api的文件
const files = fs.readdirSync(globalConfig['web_path']);
const controlerSet = [];
const pathMap = new Map();

for(let i=0;i<files.length;i++){
    const temp = require(`./${globalConfig['web_path']}/${files[i]}`);
    if(temp.path){
        for(let[key,value] of temp.path){
            if(pathMap.get(key)==null){
                pathMap.set(key,value)
            }else{
                throw Error('url path出错')
            }
        }
        controlerSet.push(temp)
    }
}

module.exports = pathMap;