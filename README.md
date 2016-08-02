webpack
这里将记录我的webpack 打包工具的学习代码 

git status 	//查看状态

git add . 	//修改的文件全部从 工作区 => 暂存区

git commit -m "注释"	//提交到版本区

git commit -a -m "注释"		//把修改的文件从 工作区 => 暂存区 然后再 => 版本区


git log 	//查看日志

git diff	//工作区和暂存区 之间的差异对比

git diff --cached(--staged) //暂存区和版本区 之间的差异对比

git diff master		//工作区和版本区 之前的差异对比	(master为分支名)

git reset HEAD file		//撤回工作区