import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App,store} from './App';
import registerServiceWorker from './registerServiceWorker';

//定义一个新的函数
function render(){
	ReactDOM.render(<App />, document.getElementById('root'));
}
render()
store.subscribe(render)
registerServiceWorker();
