webpack
这里将记录我的webpack 打包工具的学习代码 


以下是我学习Git笔记


git status 	//查看状态
### Git命令 提交操作
```
git add . 	//修改的文件全部从 工作区 => 暂存区

git commit -m "注释"	//提交到版本区

git commit -a -m "注释"		//把修改的文件从 工作区 => 暂存区 然后再 => 版本区
```
---


### Git命令 查看日志操作
```
git log 	//查看提交历史

git log --pretty=oneline	//查看简化日志

git reflog 		//查看命令历史
```
---


### Git命令 对比操作
```
git diff	//工作区和暂存区 之间的差异对比

git diff --cached(--staged) //暂存区和版本区 之间的差异对比

git diff master		//工作区和版本区 之前的差异对比	(master为分支名)
```
---


### Git命令 撤销操作
```
git reset HEAD <file.name> 		//暂存区 撤销到 工作区

git checkout -- <file.name> 	//如果暂存区是空：工作区 撤销到 版本区 
								//如果暂存区不为空：工作区 撤销到 暂存区	

git commit --amend				//把最近一次提交撤销  
如：git commit -m "注释" --amend    //提交新的修改，把上一次提交撤销
```
---

### Git命令 删除操作
```
git rm <file.name> 		//如果在工作区删除一个文件，对应在暂存区的文件 删除掉

git rm -f <file.name> 	//同时删除工作区和暂存区文件

git rm --cached <file.name> //只删除暂存区文件，保留工作区文件
```
---


### Git命令 恢复操作
###### commit_id 通过查看日志 查找id
```
git checkout <commit_id> <file.name> //针对某个文件进行恢复
git reset --hard <commit_id>		 //恢复某个版本
git reset --hard HEAD				//HEAD 相当于一个指针  清空现在的工作区，暂存区 回退上一个版本 （谨慎操作）
git reset --hard HEAD~<num>         //回到之前的第num版本

git reflog	//查看命令历史(操作信息)
```
---


### 同步到远程仓库
```
git remote	//查看仓库名称
git push origin master		git push <仓库名称> <分支>
```

### 更新代码
```
git fetch	//拉取分支不合并
git pull	//拉取分支并合并
```
### 解决冲突
```
git diff master origin/master
git merge origin/master
```