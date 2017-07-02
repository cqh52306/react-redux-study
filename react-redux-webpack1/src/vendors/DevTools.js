// 调试工具 实时监控Redux状态树
import React from 'react';
import {createDevTools} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

/**
 * @dec createDevTools Monitor（监视显示） 创建一个DevTools组件
 * **/
export default createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q'>
        <LogMonitor theme="tomorrow" preserveScrollTop={false}/>
    </DockMonitor>
);