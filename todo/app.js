import {store} from './util.js';
let app = {
	dataArr:[],
	//储存数据
	info:function(){
		store("todo",app.dataArr);
	},
	//添加列表
	addItem:function(value){
		app.dataArr.push({
			id:Date.now(),
			content:value,
			compile:false
		});

		app.info();
		app.render(app.dataArr);
	},
	//删除列表
	removeItem:function(id){
		var newArr = app.dataArr.filter((item)=>{
			return item.id !== id;
		});
		app.dataArr = newArr;
		app.info();
		app.render(app.dataArr);
	},
	toggleAll:function(b){
		app.dataArr.forEach((item)=>{
			item.compile = b;
		});

		app.info();
		app.render(app.dataArr);
	}
}

app.dataArr = store("todo") || [];

export default app;