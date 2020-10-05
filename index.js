const history = require('connect-history-api-fallback');

//引入配置
const globalConfig = require('./config'); 

const loader = require('./loader');

const express = require('express');
const app = express();
app.use(history())
app.use(express.static('./page/'));


app.post('/editEveryday',loader.get('/editEveryday'));
app.get('/queryEveryday',loader.get('/queryEveryday'));
app.post('/editBlog',loader.get('/editBlog'));
app.get('/queryBlogByPage',loader.get('/queryBlogByPage'))

app.listen(globalConfig.port,()=>{
    console.log('启用服务器');
})