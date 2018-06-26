import {createStore} from 'redux';
//counter为数据源
import Reducer from './index';
let store = createStore(Reducer);
export default store;