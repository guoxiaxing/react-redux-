//在src下新建一个文件夹（Reducer）,在该文件夹下新建一个index.js 文件，用来写Reducer函数
// 为Redux的核心函数，有两个参数 state和action


//优化：
// 将数据，函数分离
//引入数据
import {initState} from './initState'
// 引入函数
import {add,decrease} from './initFunc'
//引入简化的reducer函数
import createReducer from './createReducer'
// export default function counter(state=initState,action){
// 	if(action.type==='add'){
// 		return add(state);
// 	}else if(action.type==='decrease'){
// 		return decrease(state);
// 	}else{
// 		return state;
// 	}
// }
let counter = createReducer(initState,{'add':add,'decrease':decrease});
export default counter;
// export createReducer(initState,{'decrease',decrease});