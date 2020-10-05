const timeUtil = require('../util/timeUtil');
const respUtil = require('../util/respUtil');
const commentDao = require('../service/commentDao');
const path = new Map();

function editComment(req,res){
    req.on('data', function (data) {
        const resData = JSON.parse(data.toString())['data'];
        //blog_id,parent,username,content,email
        commentDao.editComment(timeUtil.getTime(),timeUtil.getTime(),resData.blog_id,resData.parent,resData.username,resData.comment,resData.email,result => {
            res.writeHead(200);
            res.write(respUtil.respWrite('success', '添加评论成功', null));
            res.end();
        })
    })
}

path.set('/editComment',editComment)
module.exports.path = path;