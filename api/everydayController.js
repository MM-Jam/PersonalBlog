const everydayDao = require('../service/everydayDao');
const timeUtil = require('../util/timeUtil');
const respUtil = require('../util/respUtil')
const path = new Map();

function editEveryday(req, res) {
    req.on('data', function (data) {
        // console.log(JSON.parse(data.toString())['data'].trim());
        everydayDao.insertEveryday(timeUtil.getTime(), JSON.parse(data.toString())['data'].trim(), result => {
            res.writeHead(200);
            res.write(respUtil.respWrite('success', '添加成功', null));
            res.end();
        })
    })
}

function queryEveryday(req, res) {
    everydayDao.queryEveryday(result => {
        res.writeHead(200);
        res.write(respUtil.respWrite('success', '添加成功', result));
        res.end();
    })
}

path.set('/editEveryday', editEveryday);
path.set('/queryEveryday', queryEveryday);

module.exports.path = path;