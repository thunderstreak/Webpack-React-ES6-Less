import React from 'react';
import marked from 'marked';

var data=[
	{author:'作者1',text:'评论1'},
	{author:'作者2',text:'评论2'},
]
var database=[
	{author:'作者1',text:'评论1'+Date.now()},
	{author:'作者2',text:'评论2'+Date.now()},
]

class Comment extends React.Component{
	render(){
		let rawMarkup = marked(this.props.children.toString(),{sanitize:true});

		return (
			<div className="comment">
				<h2 className="commentAuthor">{this.props.author}</h2>

				<span dangerouslySetInnerHTML={{__html:rawMarkup}}/>
			</div>
		)
	}
}

class CommentList extends React.Component{

    render(){
		console.log(this.props.data)
		let commentNodes=this.props.data.map(function(comment,index){
		   	return(
		  		<Comment author={comment.author} key={index}>{comment.text}</Comment>
		   	)
		})
		
		return (
			<div className="commentList">
				{commentNodes}
			</div>
		)
    }
}

class CommentFrom extends React.Component{
	constructor(){
		super();
		this.state={
			name:'',
			text:'',
			email:'',
			selected:0
		};
	}
	updateField(field,e){
		let state={};
		state[field]=e.target.value;
		this.setState(state);
	}
	handleSubmit(e){
		console.log(this.props)
		return;
		this.props.onPost({
			name:this.state.name,
			text:this.state.text
		});
		this.setState({
			name:'',
			text:''
		})
	}
	onSelected(e){
		console.log(e.target.value)
		this.setState({selected:e.target.value})
	}
	render(){
		let sel=[];
		for(let i=0;i<10;i++){
			sel.push(
				<option value={i} key={i}>{i}</option>	
			)
		};
		return(
			<div className="CommentFrom">
				<h1>CommentFrom</h1>
				<from className="commentFrom">
					<input placeholder="名字" value={this.state.name} onChange={this.updateField.bind(this,'name')}/><br/>
					<input placeholder="信息" value={this.state.text} onChange={this.updateField.bind(this,'text')} /><br/>
					<input placeholder="邮箱" value={this.state.email} onChange={this.updateField.bind(this,'email')} /><br/>
					<select value={this.state.selected} onChange={this.onSelected.bind(this)}>
						{sel}
					</select><br/>

					<input type="submit" value='提交' onClick={this.handleSubmit.bind(this)}/>
				</from>
			</div>	
		)
	}		
	
}

export default class CommentBox extends React.Component{
	constructor(){
		super();
		this.state={
			data:data
		}
	}

	

	loadCommentsFromServer(){
		let self = this;
		this.state.data=data;
	}

	componentDidMount(){
		// this.loadCommentsFromServer();
	}


	render(){
		return(
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data}></CommentList>
				<CommentFrom></CommentFrom>
			</div>
		)
	}
}



