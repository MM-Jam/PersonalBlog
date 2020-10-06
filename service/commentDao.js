const dbUtil = require('./dbUtil');

function editComment(ctime,utime,blog_id,parent,username,comment,email,parent_name,success){
    const insertSql = 'insert into comments (`ctime`,`utime`,`blog_id`,`parent`,`username`,`comment`,`email`,parent_name) values(?,?,?,?,?,?,?,?)';
    const params = [ctime,utime,blog_id,parent,username,comment,email,parent_name];
    const connection = dbUtil.creConnection();
    connection.connect();
    connection.query(insertSql, params,function (err, res) {
        if (err){
            console.log(err)
        }
        else{
            success(res)
        }
      });
}

function queryCommentByBlogId(blog_id,success){
    const querySql = 'select * from comments where blog_id = ?;';
    const params = [blog_id];
    const connection = dbUtil.creConnection();
    connection.connect();
    connection.query(querySql, params,function (err, res) {
        if (err){
            console.log(err)
        }
        else{
            success(res)
        }
      });
}

function queryCommentByTime(success){
    const querySql = 'select * from comments where parent=-1 order by id desc limit 0,7;';
    const params = [];
    const connection = dbUtil.creConnection();
    connection.connect();
    connection.query(querySql, params,function (err, res) {
        if (err){
            console.log(err)
        }
        else{
            success(res)
        }
      });
}

module.exports.editComment = editComment;
module.exports.queryCommentByBlogId = queryCommentByBlogId;
module.exports.queryCommentByTime = queryCommentByTime;