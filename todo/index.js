import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
require('./css/index.css')

//主组件
class Main extends React.Component{
	render(){
		return (
			<div>111<App /></div>
		)
	}
}



var section = document.createElement('section');
section.className = "todoApp";
document.body.appendChild(section);

ReactDOM.render(<Main />,section);

