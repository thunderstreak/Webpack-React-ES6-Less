import React from 'react';
import { render } from 'react-dom'
import { Router,Route,browserHistory,hashHistory,IndexRoute} from 'react-router';
import { Provider,createStore } from 'react-redux';

import TopNav from './components/TopNav';//顶部导航栏
import Home from './components/Home';//主页
import Second from './components/Second';//二级导航
import NewList from './components/NewList';//新闻列表页
import UserCenter from './components/UserCenter';//个人中心
import About from './components/About';//关于我们
import Comment from './components/Comment';//评论
import AppleBusket from './components/AppleBasket';//苹果

import List from './components/tow/list';//嵌套路由(列表)
import Details from './components/tow/details';//(详情)

import App from './redux/containers/App'
import configureStore from './redux/store/configureStore';

import './styles/base.css';
import './styles/main.less';

const store = configureStore();

render((
	<Provider store={store}>
		
		<Router history={hashHistory}>
			<Route path="/" component={TopNav}>
				<IndexRoute component={Home}/>

				<Route path="/list" component={List}>
					<IndexRoute component={Details}/>
              		<Route path="/list/:Name" component={Details}/>
          		</Route>

				<Route path="Home" component={Home} />
				<Route path="NewList" component={NewList} />
				<Route path="UserCenter" component={UserCenter} />
				<Route path="About" component={About} />
				<Route path="Comment" component={Comment} />
				<Route path="AppleBusket" component={AppleBusket} />
				<Route path="App" component={App} />
				<Route path="*" component={Home}/>
			</Route>	
		</Router>

	</Provider>
), document.getElementById('content'));
