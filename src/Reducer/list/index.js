import {initState} from './initState';
import {listAdd,listDelete} from './initFunc';

export default function list(state=initState,action){
	if(action.type==='listAdd'){
		return listAdd(state,action.text)
	}else if(action.type==='listDelete'){
		return listDelete(state,action.text)
	}else{
		return state;
	}
}