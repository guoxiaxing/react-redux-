function listAdd(state,data){
	state.push(data);
	return state;
}
function listDelete(state,i){
	state.splice(i,1);
	return state;
}
export {listAdd,listDelete};