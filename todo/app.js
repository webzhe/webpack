let app = {
	dataArr:[],
	addItem:function(value){
		app.dataArr.push({
			id:Date.now(),
			content:value,
			compile:false
		});
		app.render(app.dataArr);
	}
}
console.log(app);
export default app;