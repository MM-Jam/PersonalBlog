const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const Everyday = sequelize.define('Everyday', {
    // 在这里定义模型属性
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ctime:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
}, {
    createdAt: false,
    updatedAt: false,
    paranoid: true //从此以后，该表的数据不会真正的删除，而是增加一列deletedAt，记录删除的时间
});

module.exports = Everyday;