import React, { Component } from 'react';
import {createStore} from 'redux';
//counter为数据源
import Reducer from './Reducer'
import Counter from './Counter'
import List from './List'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
// 将数据源转换为数据点
//Redux的核心为Reducer函数,store存储数据,action用来进行操作，action有两个有用的属性type和
// text用来获取传过来的参数
// store中的方法
//1.store.getState()用来获取state的值
//2.store.dispatch({type:'add',text:value})用来与action进行交互
//3.store.subscribe()用来重新渲染页面,相当于setState()
//4.store.replaceReducer()更换数据源
//渲染时要与ReactDOM.render绑定，故要将store传给index.js 
// let store = createStore(counter)
let store = createStore(Reducer);
console.log(store.getState().counter)
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      	<div>
	       <Counter store={store}/>
	       <List value={store}/>
	    </div>
      </MuiThemeProvider>
    );
  }
}

export  {App,store};
