import {List, Map} from 'immutable';
let initState = Map({
    loading: true,
    loginMask: sessionStorage.getItem("taskLoginMask") ? sessionStorage.getItem("taskLoginMask") : 0,
    workflowsStatus: 1,
    isLastPage: false,
    keyword: '',
    pageIndex: 1,
    totalPage: 1
});

export default function global(state = initState, action = {}) {
    switch (action.type) {
        case 'MASK' :
            return state.set('loading', true);
        case 'UNMASK' :
            return state.set('loading', false);
        case 'UPDATE_LOGIN_NO' :
            return state.set('loginMask', action.loginMask);
        case 'CHANGE_WORKFLOWS_STATUS' :
            return state.set('workflowsStatus', action.status);
        case 'IS_LAST_PAGE' :
            return state.set('isLastPage', action.isLastPage);
        case 'UPDATE_KEYWORD' :
            return state.set('keyword', action.keyword);
        case 'UPDATE_PAGE_INDEX' :
            return state.set('pageIndex', action.pageIndex);
        case 'UPDATE_TOTAL' :
            return state.set('totalPage', action.totalPage);
        default :
            return state
    }
}