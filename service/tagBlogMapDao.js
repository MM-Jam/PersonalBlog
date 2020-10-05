const dbUtil = require('./dbUtil');

function insertTagBlogMap(blog_id,tag_id,ctime,utime,success){
    const insertSql = 'insert into tbmappings (`blog_id`,`tag_id`,`ctime`,`utime`) values(?,?,?,?)';
    const params = [blog_id,tag_id,ctime,utime];
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


module.exports.insertTagBlogMap = insertTagBlogMap