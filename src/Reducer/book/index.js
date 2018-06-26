import {initState} from './initState';
import {bookAdd} from './initFunc';
export default function book(state=initState,action){
	if(action.type==='bookAdd'){
		return bookAdd(state,action.text);
	}
	return state;
}