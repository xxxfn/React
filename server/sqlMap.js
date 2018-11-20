//sql语句
var sqlMap={
  //用户
  user: {
    onlyuser:'select * from users where uname=?',
    add:'insert into users(uname,upwd) values(?,?)',
    login:'select * from users where uname=? and upwd=?'
  }
}
module.exports=sqlMap;
