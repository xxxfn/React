var models=require('../db');
var express=require('express');
var router=express.Router();
var mysql=require('mysql');
var $sql=require('../sqlMap');
//连接数据库
var conn=mysql.createConnection(models.mysql);
conn.connect();
var jsonWrite=function(res,ret){
  if(typeof ret==='undefined'){
    res.json({
      code:'1',
      msg:'操作失败'
    })
  }else{
    res.json({code:0,msg:'保存成功'});
  }
};
//用户唯一验证
router.post('/onlyuser',(req,res)=>{
  console.log(1);
  var sql=$sql.user.onlyuser;
  var params=req.body;
  conn.query(sql,params.username,function(err,result){
    if(err){
      res.json('查询数据库失败');
    }
    if(result){
      console.log(result);
      if(result.length>=1){
        res.json({code:1,msg:'用户已存在'});
      }else{
        res.json({code:0,msg:'可以插入该用户了'});
      }
    }

  })
})
//添加用户接口
router.post('/add',(req,res)=>{
  var sql=$sql.user.add;
  var params=req.body;
  console.log(req.body);
  conn.query(sql,[params.username,params.password],function(err,result){
    if(err){
      res.json('查询数据库失败');
    }
    if(result){
      jsonWrite(res,result);
    }
  })
})
//用户登录接口
router.post('/login',(req,res)=>{
  var sql=$sql.user.login;
  var params=req.body;
  conn.query(sql,[params.username,params.password],function(err,result){
    if(err){
      res.json({code:101,msg:'查询数据库失败'});
    }else{
      if(result.length>=1){
        res.json({code:1,msg:'用户名存在，密码正确'})
      }else{
        res.json({code:0,msg:'用户名或密码输入有误'});
      }
    }

  })
})
module.exports=router;
