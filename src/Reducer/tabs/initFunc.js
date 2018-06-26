function change(state){
	let newArr = [];
	let len = state.length;
	for(let i=0;i<len;i++){
		newArr.push(...state.splice(parseInt(Math.random()*state.length),1));
	}
	state = newArr;
	return state;
}
export default change;