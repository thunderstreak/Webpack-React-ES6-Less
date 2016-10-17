import React from 'react';
import {connect} from 'react-redux';

class AppleBusket extends React.Component{

	render(){
		return(
			<div className="appleBusket">
				<div className="title">苹果篮子</div>
				<div className="stats">
					<div className="section">
						<div className="head">当前</div>
						<div className="contents">0个苹果，0克</div>
					</div>
					<div className="section">
						<div className="head">已吃掉</div>
						<div className="contents">2个苹果，480克</div>
					</div>
				</div>

				<div className="appleList">
					<div className="empty-tip">苹果篮子空空如也</div>
				</div>

				<div className="btn-div">
					<button>摘苹果</button>
				</div>
			</div>
		)
	}
}
//导出组件
// export default connect()(AppleBusket);
export default AppleBusket;