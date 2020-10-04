const dbUtil = require('./dbUtil');

function insertEveryday(ctime,content,success){
    const insertSql = 'insert into everydays (`ctime`,`content`) values(?,?)';
    const params = [ctime,content];
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

function queryEveryday(success){
    const querySql = 'select * from everydays order by id desc limit 1;';
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
module.exports.insertEveryday = insertEveryday;
module.exports.queryEveryday = queryEveryday;
