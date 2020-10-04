const dbUtil = require('./dbUtil');

function insertBlog(ctime,utime,content,tags,views,title,success){
    const insertSql = 'insert into blogs (`ctime`,`utime`,`content`,`tags`,`views`,`title`) values(?,?,?,?,?,?)';
    const params = [ctime,utime,content,tags,views,title];
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

function queryBlog(limit,page,success){
    const querySql = 'select * from blogs order by ctime desc limit ?,?;';
    const params = [limit*(page-1),+limit];
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
module.exports.insertBlog = insertBlog;
module.exports.queryBlog = queryBlog;
