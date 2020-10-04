const blogDao = require('../service/blogDao');
const timeUtil = require('../util/timeUtil');
const respUtil = require('../util/respUtil')
const path = new Map();

function editBlog(req, res) {
    req.on('data', function (data) {
        // console.log(JSON.parse(data.toString()));
        // {
        //     data: {
        //       title: 'github常用命令',
        //       tags: 'github',
        //       content: '<p>git push origin 分支名称</p><p>git checkout -b 分支名称</p>'
        //     }
        //   }
        const resData = JSON.parse(data.toString())['data'];
        blogDao.insertBlog(timeUtil.getTime(),timeUtil.getTime(),resData.content,resData.tags,1,resData.title,result => {
            res.writeHead(200);
            res.write(respUtil.respWrite('success', '添加成功', null));
            res.end();
        })
    })
}

function queryBlog(req, res) {
    blogDao.queryBlog(req.query.limit,req.query.page,result => {
        res.writeHead(200);
        res.write(respUtil.respWrite('success', '分页获取成功', result));
        res.end();
    })
}

path.set('/editBlog', editBlog);
path.set('/queryBlog', queryBlog);

module.exports.path = path;