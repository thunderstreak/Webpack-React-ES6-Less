import React from 'react'
import { Router,Route,browserHistory,hashHistory,IndexRoute} from 'react-router';


class Details extends React.Component{
	constructor(){
		super();
	}
	handClick(){
		console.log(browserHistory.go)
		browserHistory.goBack();
	}
	render(){
        return (
            <div>
                <h2>这是嵌套路由渲染的子组件：{this.props.params.Name}</h2>
                <button onClick={this.handClick.bind(this)}>返回</button>
            </div>
        )
    }
}

export default Details;