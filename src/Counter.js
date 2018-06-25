import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
const style = {
  margin: 20,
};
class Counter extends Component{
	add(){
		this.props.store.dispatch({type:'add'})
	}
	decrease(){
		this.props.store.dispatch({type:'decrease'})
	}
	addOdd(){
		if(this.props.store.getState()%2===0){
			this.props.store.dispatch({type:'add'})
		}
	}
	render(){
		return (
				<div>
					<RaisedButton label="add" style={style} onClick={this.add.bind(this)}/>
					<RaisedButton label="addOdd" style={style} onClick={this.addOdd.bind(this)}/>
    				<RaisedButton label="decrease" primary={true} style={style} onClick={this.decrease.bind(this)}/>
    				<h3 style={{margin:20}}>{this.props.store.getState()}</h3>
				</div>
			)
	}
}
export default Counter;