import {combineReducers} from 'redux';

//组件
import sign from './signReducers';
import global from './globalReducers';

module.exports = combineReducers({
    global,
    sign
});
