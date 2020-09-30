//同步所有模型
const sequelize = require('./db');

require('./Blog');
require('./Everyday');
require('./Tag');
require('./Comment');
require('./Tag_Blog_Mapping');

(async function(){
    await sequelize.sync({ alter: true });
    console.log("所有模型均已成功同步.");
})()