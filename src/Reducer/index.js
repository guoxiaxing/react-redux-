//combineReducers，合并Reducer
import {combineReducers} from 'redux';
import list from './list';
import counter from './counter';
import book from './book';
import tab from './tabs';
export default combineReducers({
	list,
	counter,
	book,
	tab
});