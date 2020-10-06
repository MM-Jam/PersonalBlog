const timeUtil = require('../util/timeUtil');
const respUtil = require('../util/respUtil');
const commentDao = require('../service/commentDao');
const svgCaptcha = require('svg-captcha');

const path = new Map();

let verifyKey = '';

function editComment(req, res) {
    req.on('data', function (data) {
        const resData = JSON.parse(data.toString())['data'];
        // console.log(resData.verifyCode.toUpperCase(),verifyKey.toUpperCase())
        //blog_id,parent,username,content,email
        if(resData.verifyCode.toUpperCase()===verifyKey.toUpperCase()){
            commentDao.editComment(timeUtil.getTime(), timeUtil.getTime(), resData.blog_id, resData.parent, resData.username, resData.comment, resData.email, resData.parent_name,result => {
                res.writeHead(200);
                res.write(respUtil.respWrite('success', '添加评论成功', null));
                res.end();
            })
        }else{
            res.writeHead(403);
            res.write(respUtil.respWrite('fail', '验证码验证失败', null));
            res.end();
        }
    })
}

function queryCommentByBlogId(req,res){
    commentDao.queryCommentByBlogId(req.query.blog_id,result => {
        res.writeHead(200);
        res.write(respUtil.respWrite('success', '获取评论成功', result));
        res.end();
    })
}

function queryCaptcha(req, res) {
    const captcha = svgCaptcha.create({
        noise:3,
        color:true,
        background:'#e0dada',
    });

    // console.log(captcha)
    verifyKey = req.session.captcha = captcha.text;
    res.type('svg');
    res.status(200).send(captcha.data);
}

function queryCommentByTime(req,res){
    commentDao.queryCommentByTime(result => {
        res.writeHead(200);
        res.write(respUtil.respWrite('success', '最新评论获取成功', result));
        res.end();
    })
}

path.set('/editComment', editComment)
path.set('/queryCaptcha',queryCaptcha)
path.set('/queryCommentByBlogId',queryCommentByBlogId)
path.set('/queryCommentByTime',queryCommentByTime)
module.exports.path = path;