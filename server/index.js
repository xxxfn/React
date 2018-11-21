var express = require('express');

var mysql = require('mysql');

var app = express();

// 为了不再前端写代理，我直接在后端里面设置 cors
app.use(function (req, res, next) {
	console.log('这个肯定会进来');

	// 处理跨域  这个是允许的请求的地址的源
  	res.set('Access-Control-Allow-Origin', '*');
  	// 如果是post的话，这个跨域的设置少了 允许的请求的自定义头信息
  	res.set("Access-Control-Allow-Headers", "content-type");
	next();
})

// 登录接口
app.post('/login', function (req, res) {

	var body = '';

	var client = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : '',
		database : 'userinfo'
	})

	req.on('data', function(chunk) {
		body += chunk;
	})

	req.on('end', function() {
		body = JSON.parse(body);

		var username = body.username;
		var password = body.password;
		console.log(username, password);

		// 数据库一个链接
		client.connect();
		var sql = `select * from user where uname='${username}' and upwd='${password}'`;
		client.query(sql, function(err, results, fields) {
			if (err) {
				console.log(err);
				res.send({ code: -1, msg: '登录失败' });
			} else {
				if (results.length > 0) {
					res.send({ code: 0, msg: '登录成功' });
					console.log(results);
				} else {
					res.send({ code: -2, msg: '用户名或密码错误' });
				}
			}
		})

		client.end();
	})


})
//用户注册接口
app.post('/register', function (req, res) {
	console.log('进入注册');
   var body='';
   var client=mysql.createConnection({
   	host:'localhost',
   	user:'root',
   	password:'',
   	database:'userinfo'
   })
   req.on('data',function(chunk){
   	body+=chunk;
   })
   req.on('end',function(){
   	body=JSON.parse(body);
   	var username=body.username;
   	var password=body.password;
   	console.log(username,password);
   	client.connect();
   	var sql=`select * from users where uname='${username}'`;
   	client.query(sql, function(err, results, fields){
   		if(err){
   			res.send({ code:-1,msg:'注册失败'});
   		}else{
   			if(results.length>0){
   				res.send({ code:-2,msg:'用户名已存在'});
   			}else{
   				var selsql=`insert into users (uname,upwd) values ('${username}','${password}')`;
   				client.query(selsql, function(err, results, fields){
   					if(err){
   						res.send({ code:-1,msg:'注册失败'});
   					}else{
   						res.send({ code:0,msg:'注册成功'});
   					}
   				})
   			}
   		}
   	})
   })
})

app.listen(4000);
