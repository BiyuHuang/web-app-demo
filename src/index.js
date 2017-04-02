import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ExampleApp from './ExampleApp';
import CommonComponent from './CommonComponent'
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
	// <h1 className="exampleApp">Hello, world! It has succeed!</h1>,
	<ExampleApp />,
	document.getElementById('children_1')
);

ReactDOM.render(<CommonComponent />, document.getElementById('children_2'));
