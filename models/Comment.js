const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const Comments = sequelize.define('Comments', {
    // 在这里定义模型属性
    blog_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    parent: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    username:{
        type:DataTypes.STRING(64),
        allowNull:false
    },
    comment:{
        type:DataTypes.STRING(256),
        allowNull:false
    },
    email:{
        type:DataTypes.STRING(128),
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

module.exports = Comments;