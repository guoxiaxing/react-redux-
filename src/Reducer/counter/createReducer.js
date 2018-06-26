//initDatastate为初始化的值，jon的传参形式{'action的type值','对应函数'}

function createReducer(initData,json){
	return function counter(state=initData,action){
		if(json[action.type]){
			return json[action.type](state);
			// return json[action.type](state,action);
		}else{
			return state;
		}
	}
}
export default createReducer;