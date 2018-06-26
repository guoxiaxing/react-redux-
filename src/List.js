import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
const style = {
  margin: 20,
};
class List extends Component{
	listAdd(){
		this.props.value.dispatch({type:'listAdd',text:this.refs.input.value})
	}
	delete(i){
		this.props.value.dispatch({type:'listDelete',text:i})
	}
	render(){
		let Li = [];
		this.props.value.getState().list.forEach((v,i)=>{
			Li.push(<li key={i} onClick={this.delete.bind(this,i)}>{v}</li>);
		});
		return (
				<div>
					<input type='text' ref='input' style={{marginLeft:'20px'}}/>
					<RaisedButton label="listAdd" primary={true} style={style} onClick={this.listAdd.bind(this)}/>
					<ul>{Li}</ul>
				</div>
			)
	}
}
export default List;