import React from 'react';
import marked from 'marked';

var data=[
	{author:'作者1',text:'评论1'},
	{author:'作者2',text:'评论2'},
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
		
		let commentNodes=this.props.data.map(function(comment){
	    	
			console.log(comment)
	    	return(
    			<Comment author="{comment.author}">{comment.text}</Comment>
	    	)
		});
		return (
			<div className="commentList">
				{commentNodes}
			</div>
		)
    }
}

class CommentFrom extends React.Component{
	render(){
		return(
			<div className="CommentFrom">
				<h1>CommentFrom</h1>
				
			</div>
		)
	}
}

export default class CommentBox extends React.Component{
	render(){
		return(
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList></CommentList>
				<CommentFrom></CommentFrom>
			</div>
		)
	}
}



