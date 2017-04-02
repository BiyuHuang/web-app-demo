import React, { Component } from 'react';
import './App.css';

class ExampleApp extends Component {
	render() {
	    return (
    		<div className="exampleApp">
    			<div>
    				<h1>菜鸟教程</h1>
		    		<h2>欢迎学习 React</h2>	
    			</div>
		    	<p data-myattribute="100">
		    		这是一个很不错的 JavaScript 库!
		    	</p>
			</div>
	    );
  }
}

export default ExampleApp;