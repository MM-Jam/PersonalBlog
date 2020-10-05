const dbUtil = require('./dbUtil');

function insertTag(ctime,utime,tag,success){
    const insertSql = 'insert into tags (`ctime`,`utime`,`tag`) values(?,?,?)';
    const params = [ctime,utime,tag];
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

function queryTag(tag,success){
    const querySql = 'select * from tags where tag = ?';
    const params = [tag];
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

module.exports.queryTag = queryTag;
module.exports.insertTag = insertTag;
