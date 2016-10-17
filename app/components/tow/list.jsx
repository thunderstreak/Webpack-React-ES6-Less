import React from 'react';
import { IndexLink,Link } from 'react-router';

class List extends React.Component{
	constructor(){
		super();
	}
	render(){
		var arr=[];
		for(let i=0;i<10;i++){
			arr.push(
				<li key={i}>
				<Link activeClassName="active_two" key={i} to={"/list/facebook"+i}>facebook{i}/</Link>
				</li>
			)
		}

		return(
			<div>
				<div className="repos">嵌套路径名称：{this.props.params.Name}</div>
				<ul>
                    {arr}
                </ul>

				{this.props.children}
			</div>
		)
	}
}


export default List;


