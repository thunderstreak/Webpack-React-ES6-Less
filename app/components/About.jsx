import React from 'react';
import Img from '../images/1.png';

class Child extends React.Component{
	constructor(){
		super();
		this.state={
			id:0
		}
	}
	handleVal(){
		let val=this.refs.emailDOM.value;
		this.state.id=val;
		this.props.handleEmail(val);
		this.setState({id:val})
	}

	render(){
		return(
			<div className="Child">
				<div className="Child-ipt">
					<input ref="emailDOM" onChange={this.handleVal.bind(this)}/>
					{this.state.id}
				</div>
			</div>
		)
	}
}

export default class Parent extends React.Component{
	constructor(){
		super();
		this.state={
			email:0
		}
	}
	handleEmail(val){
		this.state.email=val;
		// this.setState({email:val})
	}
	handleBtn(){
		this.setState({
			email:this.state.email+=1
		});
		console.log(this.state)
	}
	shouldComponentUpdate(nextProps,nextState){
		console.log('在接收到新的props 或者 state，将要渲染之前调用。该方法在初始化渲染的时候不会调用，在使用 forceUpdate 方法的时候也不会。如果确定新的props 和 state 不会导致组件更新，则此处应该 返回 false。')
		return true;
	}
	componentWillUpdate(){
		console.log('在接收到新的props 或者 state 之前立刻调用。在初始化渲染的时候该方法不会被调用。')
	}
	render() {
		return(
			<div>
		 		<h1 className = "reactH1" > 关于我们 {this.state.email}</h1>
		 		<Child name="email" handleEmail={this.handleEmail.bind(this)}></Child>
		 		<button onClick={this.handleBtn.bind(this)}>btn{this.state.email}</button>
	 		</div>
	 	)	
	}
}