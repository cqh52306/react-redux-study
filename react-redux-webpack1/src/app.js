'use strict';
import 'core-js';
//css
import './styles/reset.css';
import './styles/iconfont.css';
import './styles/layer.css';
import './styles/main.scss';

//vendors
import './vendors/respon';
import './vendors/layer';

import React from "react";
import {render} from "react-dom";
import {Router, useRouterHistory} from 'react-router';
import {createHashHistory} from 'history';
import {Provider} from 'react-redux';

import configStore from  './stores/store'; //导入store
import rootRouter from './router/router'; //导入路由

const store = configStore();

import FastClick from "fastclick";

// 引入fastclick
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}

//判断是不是iPhone
let ua = navigator.userAgent.toLowerCase();
window.isIphone = false;
window.isAndroid = false;

//iPhone
if (/iphone|ipad|ipod/.test(ua)) {
    window.isIphone = true;
}
//Android
if (/android/.test(ua)) {
    window.isAndroid = true;
}

window.SCFPHISTORY = useRouterHistory(createHashHistory)({queryKey: false});

render((
    <Provider store={ store }>
        <Router history={window.SCFPHISTORY} routes={rootRouter}/>
    </Provider>
), document.getElementById('view'));


//此处应该有接口
window.SCFPHISTORY.replace('/sign');