import {tilesData} from './initState';
import change from './initFunc';
export default function tab(state=tilesData,action){
	if(action.type==='change'){
		return change(state);
	}else{
		return state;
	}
}