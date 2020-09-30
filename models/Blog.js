const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const Blog = sequelize.define('Blog', {
    // 在这里定义模型属性
    title: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    views: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tags:{
        type:DataTypes.STRING(256),
        allowNull:false
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

module.exports = Blog;