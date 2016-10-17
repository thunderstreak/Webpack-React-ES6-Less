import React from 'react';

class AppleItem extends React.Component{
	render(){
		return(
			<div className="appleItem">
				<div className="apple"><img src="../images/1.png"></div>
				<div className="info">
					<div className="name">红苹果-1号</div>
					<div className="weight">256克</div>
				</div>
				<div className="btn-div">
					<button>吃掉</button>
				</div>
			</div>
		)
	}
}

export default AppleItem;