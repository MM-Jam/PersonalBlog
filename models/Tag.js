const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const Tags = sequelize.define('Tags', {
    // 在这里定义模型属性
    tag: {
        type: DataTypes.STRING(64),
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ctime:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    utime:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
}, {
    createdAt: false,
    updatedAt: false,
    paranoid: true //从此以后，该表的数据不会真正的删除，而是增加一列deletedAt，记录删除的时间
});

module.exports = Tags;