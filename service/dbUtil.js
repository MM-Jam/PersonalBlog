//连接服务器
const mysql = require('mysql');
function creConnection() {
    const connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: "mahaojie123",
        database: 'my_blog',
        port:3306//默认的
    });
    return connection;
}
module.exports.creConnection = creConnection;