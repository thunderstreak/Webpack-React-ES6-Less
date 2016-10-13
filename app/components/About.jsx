import React from 'react';
import Img from '../images/1.png';

export default React.createClass ({
	render() {
		return(
			<div>
		 		<h1 className = "reactH1" > 关于我们 </h1>
		 		<img src={Img}/>
		 		<h2>123</h2>
	 		</div>
	 	)	
	}
})