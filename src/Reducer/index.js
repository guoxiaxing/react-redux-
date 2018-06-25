//在src下新建一个文件夹（Reducer）,在该文件夹下新建一个index.js 文件，用来写Reducer函数
// 为Redux的核心函数，有两个参数 state和action
export default function counter(state=0,action){
	if(action.type==='add'){
		return ++state;
	}else if(action.type==='decrease'){
		return --state;
	}else{
		return state;
	}
}