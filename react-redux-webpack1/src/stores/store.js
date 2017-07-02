import {createStore, applyMiddleware, compose} from 'redux';// 引入redux createStore、中间件及compose
import {persistState} from 'redux-devtools';
import DevTools from '../vendors/DevTools';// 引入DevTools调试组件
import thunkMiddleware from 'redux-thunk';// redux-thunk 支持 dispatch function，并且可以异步调用它
import createLogger from 'redux-logger';// 利用redux-logger打印日志
import rootReducer from '../reducers/indexReducers';//合并后的reducer

/**
 * @desc 利用compose增强store，这个 store 与 applyMiddleware 和 redux-devtools 一起使用
 * @param thunkMiddleware
 * @param createLogger 调用日志打印方法
 * instrument 它返回一个store的增强器,需要在compose中使用。
 * **/
const enhancer = process.env.NODE_ENV === "development" ? compose(
    //applyMiddleware存在异步行为，需要放在前面instrument 确保所有actions都显示在store
    applyMiddleware(thunkMiddleware, createLogger()),
    //启用带有monitors（监视显示）的DevTools
    DevTools.instrument(),
    //在地址栏调试信息 debug_session
    persistState(
        window.location.href.match(
            /[?&]debug_session=([^&#]+)\b/
        )
    )
) : compose(
    applyMiddleware(thunkMiddleware)
);

export default function configureStore(preloadedState) {
    const store = createStore(
        rootReducer,
        preloadedState,
        enhancer
    );
    //模块热替换(HMR)交换, 添加, 或者删除模块, 同时应用持续运行, 不需要页面刷新
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/indexReducers.js', () => {
            const nextRootReducer = require('../reducers/indexReducers.js').default;
            store.replaceReducer(nextRootReducer)
        })
    }
    return store;
}