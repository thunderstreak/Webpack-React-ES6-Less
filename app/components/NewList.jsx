import React from 'react';
import Img from '../images/1.png';
import mixin from './mixin';

export default  React.createClass ({
	// mixins: [mixin],
	getInitialState(){
		return {
			init:''
		}
	},
	inits(e){
		let val=this.refs.iptDOM.value;
		this.setState({init:e.target.value})
		console.log(this.state)
	},
	render() {
		return(
			<div>
		 		<h1 className = "reactH1" > 新闻列表页 </h1>
		 		<input ref="iptDOM" onChange={this.inits}/>
		 		<img src={Img}/>
		 		<h2>{this.state.init}</h2>
	 		</div>
	 	)
	}
})
