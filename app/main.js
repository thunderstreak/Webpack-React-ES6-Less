import React from 'react';
import { render } from 'react-dom'
import { Router,Route,browserHistory,hashHistory,IndexRoute} from 'react-router';

import TopNav from './components/TopNav';//顶部导航栏
import Home from './components/Home';//主页
import Second from './components/Second';//二级导航
import NewList from './components/NewList';//新闻列表页
import UserCenter from './components/UserCenter';//个人中心
import About from './components/About';//关于我们

import './styles/base.css';
import './styles/main.less';


render((
	<Router history={hashHistory}>
		<Route path="/" component={TopNav}>
			<IndexRoute component={Home}/>
			<Route path="Home" component={Home} />
			<Route path="NewList" component={NewList} />
			<Route path="UserCenter" component={UserCenter} />
			<Route path="About" component={About} />
			<Route path="*" component={Home}/>
		</Route>	
	</Router>
), document.getElementById('content'));
