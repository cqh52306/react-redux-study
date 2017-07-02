import {List, Map } from 'immutable';

let initSign = Map({
    sign: {
        "approveModel": [],
        "approveRecall": [],
        "approveResult": [],
        _submit: {
            approveResult: "",
            approveIdea: "",
            approveModelNo: "",
            approveModelUserId: "",
            platformCode: "1",
            isNextShow: true, //是否显示下一阶段、审批人
            isRecallShow: false, //是否显示退回步骤
            isLightSubmitBtn: true
        }
    }
});

/**
 * @desc 初始化数据
 * @param  signData 请求来的数据
 * @param  stutas 传入的状态
 * @return 格式化后的结果
 * */
function initSignInfo(signData, stutas) {
    //第一次进入
    if (stutas == "first") {
        signData._submit = {
            approveResult: "Approve",
            approveIdea: "同意",
            approveModelNo: "",
            approveModelUserId: "",
            platformCode: "1",
            isNextShow: true, //是否显示下一阶段、审批人
            isRecallShow: false, //是否显示退回步骤
            isLightSubmitBtn: true
        };
        let signSubmit = signData._submit;
        //第一次进入
        if (signData.approveModel.length == 1) {
            //对提交按钮的判断
            signSubmit.isLightSubmitBtn = false;

            //审批人 下一阶段
            signSubmit.approveModelNo = signData.approveModel[0].modelName;
            signSubmit.approveModelUserId = signData.approveModel[0].modelUserId;
        }

    } else {
        //非第一次请求数据
        let signSubmit = signData._submit;
        /**
         * approveIdea //审批意见
         * approveModelNo //要退回的节点 或者 是下一阶段
         * approveModelUserId //审批人
         * */
        //对 审批人 下一阶段 只有一个数组的情况进行处理
        if (signSubmit.approveResult == 'Approve' || signSubmit.approveResult == 'Disagree') {//同意和不同意
            if (signData.approveModel.length == 1) {
                //对提交按钮的判断
                signSubmit.isLightSubmitBtn = false;
                //审批人 下一阶段
                signSubmit.approveModelNo = signData.approveModel[0].modelName;
                signSubmit.approveModelUserId = signData.approveModel[0].modelUserId;
            }
        } else if (signSubmit.approveResult == 'Return') {//退回
            //退回步骤
            if (signData.approveRecall.length == 1) {
                signData._submit.approveModelNo = signData.approveRecall[0].recallNo;
                signData._submit.approveModelUserId = '';
            }
        } else if (signSubmit.approveResult == 'Reject') {//否决
            signData._submit.approveModelNo = '';
            signData._submit.approveModelUserId = '';
        }
    }


    return {...signData}
}


/**
 * @desc 操作页面单个值时候 对页面除书画状态进行改变
 * @param  signData 请求来的数据
 * @param  sign 传入改变的单个值
 * @return 格式化后的结果
 * */
function validSignInfo(signData, sign) {
    let signSubmit = signData._submit;

    //更新值 approveResult
    signSubmit[sign.name] = sign.value;
    /**
     * 审批结果
     * */
    if (sign.name == "approveResult") {
        //初始化 共有的 属性
        signSubmit.approveIdea = '';
        signSubmit.approveModelNo = '';
        signSubmit.approveModelUserId = '';
        //判断意见框显示的文字
        if (sign.value != 'Approve') { //不是同意
            signSubmit.approveIdea = "";
        } else {
            signSubmit.approveIdea = "同意";
        }

        /**
         * 通过选择审批结果 来判断应该显示哪个节点
         * 下一阶段和审批人是一组的  共同显示隐藏
         * 下一阶段和退回指定步骤  互斥
         * */
        if (sign.value == 'Approve') {//同意
            signSubmit.isNextShow = true;
            signSubmit.isRecallShow = false;
        } else if (sign.value == 'Return') {//退回
            signSubmit.isNextShow = false;
            signSubmit.isRecallShow = true;
        } else if (sign.value == 'Reject') {//否决
            signSubmit.isNextShow = false;
            signSubmit.isRecallShow = false;
        } else if (sign.value == 'Disagree') {//不同意
            signSubmit.isNextShow = true;
            signSubmit.isRecallShow = false;
        }
    }

    /**
     * 非审批结果的操作
     * approveIdea //审批意见
     * approveModelNo //要退回的节点 或者 是下一阶段
     * approveModelUserId //审批人
     * @desc 审批意见非空时才对按钮的状态进行校验
     * */

    if (signSubmit.approveIdea != "") {
        //同意和不同意逻辑一样
        if (signSubmit.approveResult == 'Approve' || signSubmit.approveResult == 'Disagree') {
            //下一阶段 和 审批人 不能为空
            if (signSubmit.approveModelNo != "" && signSubmit.approveModelUserId) {
                signSubmit.isLightSubmitBtn = false;
            } else {
                signSubmit.isLightSubmitBtn = true;
            }
        } else if (signSubmit.approveResult == 'Return') {//退回
            //退回的节点
            signSubmit.approveModelNo != "" ?
                signSubmit.isLightSubmitBtn = false : signSubmit.isLightSubmitBtn = true;

        } else if (signSubmit.approveResult == 'Reject') {//否决
            signSubmit.isLightSubmitBtn = false;
        }
    } else {
        signSubmit.isLightSubmitBtn = true;
    }

    return {...signData}
}


export default function sign(state = initSign, action = {}) {
    switch (action.type) {
        case 'RELOAD_SIGN_OPINION_FIRST' ://第一次请求时
            //校验后的值
            let invalidInfoFirst = initSignInfo(action.sign, "first");
            return state.set("sign", invalidInfoFirst);
        case 'RELOAD_SIGN_OPINION' ://非第一次请求时
            let signSec = state.get("sign");
            //校验后的值
            let invalidInfoDataSec = initSignInfo(signSec, action.sign);
            //设置
            return state.set("sign", invalidInfoDataSec);
        case 'UPDATE_SIGN_OPINION_RESULT' :
            /**
             *  审批结果
             * */
            let _spjgData = state.get("sign");
            //校验后的值
            let invalidRestlt = validSignInfo(_spjgData, action.sign);
            //设置
            return state.set("sign", invalidRestlt);
        case 'UPDATE_SUBMIT_INFO' :
            //更新我要贷款页面单个值
            let _sprData = state.get("sign");
            //校验后的值
            let invalidSPR = validSignInfo(_sprData, action.sign);
            //设置
            return state.set("sign", invalidSPR);
        default :
            return state
    }
}