const tagDao = require('../service/tagDao');
const respUtil = require('../util/respUtil')
const path = new Map();

function queryAllTags(req, res) {
    tagDao.queryAllTags(result => {
        res.writeHead(200);
        res.write(respUtil.respWrite('success', '查询标签成功', result));
        res.end();
    })
}

path.set('/queryAllTags',queryAllTags);
module.exports.path = path;