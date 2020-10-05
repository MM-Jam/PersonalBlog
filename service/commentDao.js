const dbUtil = require('./dbUtil');

function editComment(ctime,utime,blog_id,parent,username,comment,email,success){
    const insertSql = 'insert into comments (`ctime`,`utime`,`blog_id`,`parent`,`username`,`comment`,`email`) values(?,?,?,?,?,?,?)';
    const params = [ctime,utime,blog_id,parent,username,comment,email];
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

module.exports.editComment = editComment;