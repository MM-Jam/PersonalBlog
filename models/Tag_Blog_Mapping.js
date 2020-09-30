const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const TBMapping = sequelize.define('TBMapping', {
    // 在这里定义模型属性
    blog_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tag_id: {
        type: DataTypes.INTEGER,
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

module.exports = TBMapping;