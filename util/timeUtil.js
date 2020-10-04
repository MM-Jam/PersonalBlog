const moment = require('moment')
function getTime(){
    // const time = parseInt(Date.now() / 1000);
    // return time;
    return moment().format('YYYY-MM-DD');
}
module.exports.getTime = getTime;