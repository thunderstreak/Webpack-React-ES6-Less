import React from 'react';
import Img from '../images/1.png';
import About from './About';

export default React.createClass ({
	//用于定义初始状态,这个对象可以通过this.state属性读取
    getInitialState() {
        return {
            liked:false,
            value:'www.taobao.com',
            opacity:1,
            secondsElapsed:0,
            obj : {
              	href:"http://www.taobao.com",
              	target:"_blank"
            }
        };
    },
    //指定默认属性
     getDefaultProps(){
        return {
            title:'指定默认属性'
        };
    },
	render() {
		let text = this.state.liked ? 'true' : 'false';
    	let arr=[];
    	this.props.routes[0].childRoutes.forEach(function(value,index){
    		arr.push(<p ref={'p'+index} key={index} data={index}>{value.path}</p>)
    	}.bind(this));

		return(
			<div className="HomeJsx">
		 		<h1 className = "reactH1" ref="h1"> {this.props.title} </h1>
		 		<img src={Img}/>
		 		<section>时间计数:{this.state.secondsElapsed}</section>
		 		<a {...this.state.obj}>{this.state.value}</a>
		 		{arr}
		 		<button onClick={this.handleClick}>点击事件({text})</button>
		 		<About/>
	 		</div>
	 	)	
	},
	//真实DOM插入之前
	componentWillMount(){

	},
	//真实DOM插入之后
	componentDidMount(){
		console.log(this)
		this.interval = setInterval(this.tick, 1000);
	},
	//移除真实DOM
    componentWillUnmount(){
    	clearInterval(this.interval);
    },
    //真实DOM更新之前
    componentWillUpdate(){

    },
    //真实DOM更新之后
    componentDidUpdate(){

    },
    //时间计数
    tick(){
    	this.setState({
    		secondsElapsed:this.state.secondsElapsed+1
    	})
    },
    //点击事件
    handleClick(event){
    	this.setState({liked: !this.state.liked});
    }
})