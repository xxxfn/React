# project

# 初始化

create-react-app elm-mzw



# git flow 工作流程

1. 安装 npm install -g git-flow-avh
2. 初始化， git flow init
3. 即不要再 master 上也代码，也不要再 develop 写代码
4. 写的代码需要放在相应的功能分支下。
  1. git flow feature start xxx
    1. feature/xxx
  2. 写你的 xxx 功能的代码  git add . git commit -m '
5. 更新develop分支 git pull origin develop
6. 切换到功能分支提交到develop分支 git flow feature finish xxx
7. 处理冲突，处理完后保存 git add .
8. 处理完后 再一次切换到功能分支提交到develop分支 git flow feature finish xxx
   此时功能分支能够自动合并删除
6. 提交合并完功能分支之后的develop分支 git push --save-upstream origin develop

  ....


  ....


  ....


  .....

  ....


一些功能做完了，（login layout） 。就可以发版啦。
1. git flow release start test  // 发布一个 test版本
2. 就会给到测试，让他们去测试代码




版本 里面 包含多个 功能

版本迭代


一  -  五         |  一  -  五              | 一   -  五
版本1研发            版本1 做测试             版本2研发
（login layout）     （正式上线）             （register, 分页）
                开会，讨论下个版本要做什么功能

                  git flow release start v1.0
                  git flow release finish v.10
