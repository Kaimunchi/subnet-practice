const express = require('express');
const chal=require('chalk')
const app = express();
const path = require('path');
const chalk = require('chalk');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});



//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log(chalk.yellowBright('Running at Port 3000'));