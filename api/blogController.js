const blogDao = require('../service/blogDao');
const timeUtil = require('../util/timeUtil');
const respUtil = require('../util/respUtil');
const tagDao = require('../service/tagDao');
const tagBlogMapDao = require('../service/tagBlogMapDao');
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
        const tags = resData.tags.replace(/ /g,'').replace(/，/,',');
        blogDao.insertBlog(timeUtil.getTime(),timeUtil.getTime(),resData.content,resData.tags,1,resData.title,result => {
            res.writeHead(200);
            res.write(respUtil.respWrite('success', '添加成功', null));
            res.end();

            //此时我要把tag表也弄好
            const blogId = result.insertId;
            const tagList = tags.split(',');
            for(let i=0;i<tagList.length;i++){
                if(tagList[i]==''){
                    continue
                }else{
                    queryTag(blogId,tagList[i])
                }
            }
        })
    })
}

function addBlogViews(req,res){
    req.on('data', function (data) {
        const resData = JSON.parse(data.toString())['data'];
        // console.log(resData)
        blogDao.addBlogViews(resData.newViews,resData.id,result => {
            res.writeHead(200);
            res.write(respUtil.respWrite('success', '添加成功', null));
            res.end();
        })
    })
}

function queryTag(blogId,tag){
    tagDao.queryTag(tag,result=>{
        if(result==null || result.length==0){
            //说明没有这个标签
            //那我就加一个标签进去
            tagDao.insertTag(timeUtil.getTime(),timeUtil.getTime(),tag,function(res){
                //当我把标签加进去之后
                //我要把标签和博客映射关系加到mapping表里面
                // console.log(res);
                tagBlogMapDao.insertTagBlogMap(blogId,res.insertId,timeUtil.getTime(),timeUtil.getTime(),function(re){})
            });
        }else{
            //有这个标签
            //我要加到映射表里面去
            tagBlogMapDao.insertTagBlogMap(blogId,result.id,timeUtil.getTime(),timeUtil.getTime(),function(re){})
        }
    })
}

function queryBlogByPage(req, res) {
    blogDao.queryBlogByPage(req.query.limit,req.query.page,result => {
        for(let i=0;i<result.length;i++){
            result[i].content = result[i].content.replace(/<img[\w\W]*">/,'');
        }
        res.writeHead(200);
        res.write(respUtil.respWrite('success', '分页获取成功', result));
        res.end();
    })
}

function queryBlogByViews(req, res) {
    blogDao.queryBlogByViews(result => {
        for(let i=0;i<result.length;i++){
            result[i].content = result[i].content.replace(/<img[\w\W]*">/,'');
            result[i].content = result[i].content.replace(/<[\w\W]{1,5}>/g,'');
            result[i].content = result[i].content.substring(0,50);
        }
        res.writeHead(200);
        res.write(respUtil.respWrite('success', '热门博客成功', result));
        res.end();
    })
}

function queryArticleByKey(req,res){
    blogDao.queryArticleByKey(req.query.titleKey,result => {
        for(let i=0;i<result.length;i++){
            result[i].content = result[i].content.replace(/<img[\w\W]*">/,'');
        }
        res.writeHead(200);
        res.write(respUtil.respWrite('success', '按关键词获取成功', result));
        res.end();
    })
}

function queryBlogById(req,res){
    blogDao.queryBlogById(req.query.id,result => {
        // for(let i=0;i<result.length;i++){
        //     result[i].content = result[i].content.replace(/<img[\w\W]*">/,'');
        // }
        res.writeHead(200);
        res.write(respUtil.respWrite('success', '获取博客成功', result));
        res.end();
    })
}

function queryBlog(req,res){
    blogDao.queryBlog(result => {
        for(let i=0;i<result.length;i++){
            result[i].content = result[i].content.replace(/<img[\w\W]*">/,'');
            result[i].content = result[i].content.replace(/<[\w\W]{1,5}>/g,'');
            result[i].content = result[i].content.substring(0,50);
        }
        res.writeHead(200);
        res.write(respUtil.respWrite('success', '获取博客成功', result));
        res.end();
    })
}

path.set('/editBlog', editBlog);
path.set('/queryBlogByPage', queryBlogByPage);
path.set('/queryBlogById',queryBlogById);
path.set('/addBlogViews',addBlogViews);
path.set('/queryBlog',queryBlog);
path.set('/queryBlogByViews',queryBlogByViews);
path.set('/queryArticleByKey',queryArticleByKey)

module.exports.path = path;