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

function addBlogViews(newViews,id,success){
    const insertSql = 'update blogs set views=? where id=?';
    const params = [newViews,id];
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

function queryBlogByPage(limit,page,success){
    const querySql = 'select * from blogs order by id desc limit ?,?;';
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

function queryBlogById(id,success){
    const querySql = 'select * from blogs where id = ? limit 0,1;';
    const params = [id];
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
module.exports.queryBlogByPage = queryBlogByPage;
module.exports.queryBlogById = queryBlogById;
module.exports.addBlogViews = addBlogViews;
