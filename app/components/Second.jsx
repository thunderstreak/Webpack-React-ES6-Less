import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
    render(){
        return (
            <div className="">
                <div className="">二级导航</div>
                <Link to="/">返回</Link>
            </div>
        )
    }
})
