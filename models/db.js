//导入
const { Sequelize } = require('sequelize');
//连接到数据库
const sequelize = new Sequelize('my_blog', 'root', 'mahaojie123', {
    host: 'localhost',
    dialect: 'mysql',
    logging:null
});
module.exports = sequelize;