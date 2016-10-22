import React,{Component,PropTypes} from 'react';

class Counter extends Component{
	render(){
		//从组件的props属性中导入四个方法和一个变量
		const {increment,incrementIfOdd,incrementAsync,decrement,counter} = this.props;
		//渲染组件
		return (
			<div>
				<p>
				Clicked: {counter} times
				{' '}
				<button onClick={increment}>+</button>
				{' '}
				<button onClick={decrement}>-</button>
				{' '}
				<button onClick={incrementIfOdd}>增量</button>
				{' '}
				<button onClick={() => incrementAsync()}>增量异步</button>
				</p>
			</div>
		)
	}
}

//限制组件的props安全
Counter.propTypes = {
	//increment必须为fucntion,且必须存在
	increment: PropTypes.func.isRequired,
	incrementIfOdd: PropTypes.func.isRequired,
	incrementAsync: PropTypes.func.isRequired,
	decrement: PropTypes.func.isRequired,
	//counter必须为数字，且必须存在
	counter: PropTypes.number.isRequired
};

export default Counter