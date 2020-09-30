const express = require('express');
const app = express();

app.use(express.static('./page/'));

app.listen(8080,()=>{
    console.log('启用服务器');
})