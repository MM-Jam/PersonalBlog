const history = require('connect-history-api-fallback');

//引入配置
const globalConfig = require('./config'); 

const loader = require('./loader');

const session = require('express-session')

const express = require('express');
const app = express();
app.use(history())
app.use(express.static('./page/'));

app.use(session({
    secret: 'MM-Jam',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))


app.post('/editEveryday',loader.get('/editEveryday'));
app.get('/queryEveryday',loader.get('/queryEveryday'));
app.post('/editBlog',loader.get('/editBlog'));
app.get('/queryBlogByPage',loader.get('/queryBlogByPage'));
app.get('/queryBlogById',loader.get('/queryBlogById'));
app.post('/addBlogViews',loader.get('/addBlogViews'));
app.post('/editComment',loader.get('/editComment'));
app.get('/queryCaptcha', loader.get('/queryCaptcha'));
app.get('/queryCommentByBlogId',loader.get('/queryCommentByBlogId'));
app.get('/queryBlog',loader.get('/queryBlog'));
app.get('/queryAllTags',loader.get('/queryAllTags'));
app.get('/queryBlogByViews',loader.get('/queryBlogByViews'));
app.get('/queryCommentByTime',loader.get('/queryCommentByTime'));
app.get('/queryArticleByKey',loader.get('/queryArticleByKey'))

app.listen(globalConfig.port,()=>{
    console.log('启用服务器');
})