import React from 'react';
var mixin = {
    propTypes: {
        title: React.PropTypes.string,
    },

    getDefaultProps(){
        return {
            title:'default'
        };
    },
};