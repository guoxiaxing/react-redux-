//combineReducers，合并Reducer
import {combineReducers} from 'redux';
import list from './list';
import counter from './counter';
export default combineReducers({
	list,
	counter
});