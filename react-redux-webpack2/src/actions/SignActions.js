require('es6-promise').polyfill();
require('isomorphic-fetch');


let myData = {
    "returnCode": "00",
    "returnMsg": "success",
    "nonceStr": "df14e9c42af54addb807e3b6a7d9e3e3",
    "method": "creditIdea",
    "messageBody": {
        "approveModel": [
            {
                "modelName": "风控子流程-分公司风控岗评级",
                "modelNo": "0070",
                "modelUserId": "897471",
                "modelUserName": "李四"
            },
            {
                "modelName": "风控子流程-分公司风控岗评级",
                "modelNo": "0070",
                "modelUserId": "001263",
                "modelUserName": "陈十"
            },
            {
                "modelName": "风控子流程-分公司风控岗评级",
                "modelNo": "0070",
                "modelUserId": "001266",
                "modelUserName": "承接测试"
            }
        ],
        "approveRecall": [
            {
                "recallName": "分公司发起申请",
                "recallNo": "0010",
                "recallUserName": "李四"
            },
            {
                "recallName": "分公司发起申请-测试",
                "recallNo": "0011",
                "recallUserName": "张三"
            }
        ],
        "approveResult": [
            {
                "resultName": "同意",
                "resultNo": "Approve"
            },
            {
                "resultName": "否决",
                "resultNo": "Reject"
            },
            {
                "resultName": "撤回",
                "resultNo": "Return"
            }
        ]
    }
}


/**
 * 更新页面值
 * */
export function updateSelectVal(value) {
    return {type: 'UPDATE_SIGN_OPINION_RESULT', sign: value};
}

/**
 * 更新页面值
 * */
export function updateSubmitSelectVal(value) {
    return {type: 'UPDATE_SUBMIT_INFO', sign: value};
}


/**
 * 请求审批意见数据
 * */
export function reloadsign(approve) {
    return (dispatch) => {

        let params = {
            "nonceStr": new Date().getTime(),
            "method": "creditIdea",
            "messageBody": {
                //"userId": sessionStorage.getItem("userId"),
                "taskNo": sessionStorage.getItem("taskNoUrl"),
                "approve": ''
            }
        }

        dispatch({type: 'MASK'})

        fetch('/api', {
            credentials: 'include'
        }).then((res) => {
            return res.json();
        }).then((datas) => {
            if (approve == 'first') {
                dispatch({type: 'RELOAD_SIGN_OPINION_FIRST', sign: myData.messageBody});
            } else {
                dispatch({type: 'RELOAD_SIGN_OPINION', sign: myData.messageBody});
            }
            dispatch({type: 'UNMASK'})
        }).catch((e) => {
            console.log("报错了", e);
        })

    };
}
