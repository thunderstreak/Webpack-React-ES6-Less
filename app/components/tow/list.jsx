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
		var art=[
			{id:1,name:'test1'},
			{id:2,name:'test2'},
			{id:3,name:'test3'},
			{id:4,name:'test4'}
		]
		var child=(
			art.map(i=><li key={i.id}>{i.id}</li>)
		)

		return(
			<div>
				<div className="repos">嵌套路径名称：{this.props.params.Name}</div>
				<ul>
                    {arr}
                </ul>
				{child}
				{this.props.children}
			</div>
		)
	}
}


export default List;
