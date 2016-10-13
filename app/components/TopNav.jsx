import React from 'react';
import {Link} from 'react-router';
import NavLink from '../scripts/tool/navlink';

import Home from './Home';

export default class TopNav extends React.Component {

    render() {
        return (
            <div className="TopNav">
            	<div className="TopNav-top">
	                <ul role="nav" className="TopNav-nav">
	                    <li>
	                        <NavLink to="/" activeClassName="active" onlyActiveOnIndex={true}>入口页</NavLink>
	                    </li>

	                    <li>
	                        <NavLink to="/NewList" activeClassName="active">新闻列表页</NavLink>
	                    </li>
	                    <li>
	                        <NavLink to="/UserCenter" activeClassName="active">用户中心</NavLink>
	                    </li>
	                    <li>
	                        <NavLink to="/About" activeClassName="active">关于我们</NavLink>
	                    </li>
	                    <li>
	                        <NavLink to="/Comment" activeClassName="active">评论</NavLink>
	                    </li>
	                </ul>
                </div>
                <div className="content">
                	{this.props.children || <Home/>}
                </div>
            </div>
        );
    }
}
