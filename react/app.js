var React = require('react');
var ReactDOM = require('react-dom');

/*class App extends React.Component{
	render(){
		return (
			<h1>Hello World1111111</h1>
		)
	}
}

export default App;*/


//暴露出去一个 App组件
export default class App extends React.Component{
	render(){
		return <h1>Hello!!!我靠，这就是传说中的热加载</h1>
	}
}