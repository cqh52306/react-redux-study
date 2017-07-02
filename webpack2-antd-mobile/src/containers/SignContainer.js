import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import * as signActions from '../actions/SignActions';
import SignNextSage from '../components/SignNextSage';
import SignApprover from '../components/SignApprover';
import SignReturnStep from '../components/SignReturnStep';
import Header from '../components/common/Header';

import { RefreshControl, ListView, Carousel, SwipeAction, Button } from 'antd-mobile';

import './Sign.scss';


function mapStateToProps(state) {
    return {
        sign: state.sign.get("sign")
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(signActions, dispatch);
}


class app extends React.Component {

    componentWillMount() {
        this.props.reloadsign('first');
        sessionStorage.setItem("peopleBtn", true);
    }

    render() {
        //下一节点列表 退回节点列表 审批结果列表
        const { approveModel, approveRecall, approveResult, _submit } = this.props.sign;

        let peopleBtn = sessionStorage.getItem("peopleBtn");

        //正则匹配四类角色
        const taskHaseno = sessionStorage.getItem("taskHaseno");
        let isTaskHaseNo = true;


        return <div className="n-content sign-cont">
            <Header backBsId="listBackId" {...this.props} isShow={true} title="表单" />
            <ul className="sign-item-box">
                <li>
                    <div className="sign-l">审批结果</div>
                    <div className="sign-r">
                        <select
                            name='result'
                            id='result'
                            className="sign-input"
                            defaultValue={this._formatZHEN(_submit.approveResult)}
                            onChange={this.handleResult.bind(this)}>

                            {approveResult.map((result, index) =>
                                <option key={index} value={result.resultNo}>{result.resultName}</option>
                            )}

                        </select>

                    </div>
                    <div className="sign-icon"><i className="icon iconfont icon-icon_left"></i></div>
                </li>
                <li>
                    <div className="sign-l">审批意见</div>
                    <div className="sign-r">
                        <textarea
                            name="sign-dec"
                            id="sign-dec"
                            cols="30"
                            rows="10"
                            value={_submit.approveIdea}
                            onChange={this.handleIntro.bind(this)}>
                        </textarea>
                    </div>
                </li>
                {/*下一阶段*/}
                {_submit.isNextShow && isTaskHaseNo ? <SignNextSage {...this.props} /> : ''}

                {/*审批人*/}
                {_submit.isNextShow && isTaskHaseNo ? <SignApprover {...this.props} /> : ''}

                {/*退回步骤*/}
                {_submit.isRecallShow && isTaskHaseNo ? <SignReturnStep {...this.props} /> : ''}
            </ul>

            <button
                className="sign-btn"
                disabled={_submit.isLightSubmitBtn}
                onClick={this.submitOpinion.bind(this)}>提交
            </button>
            <Button className='btn am-button am-button-primary' inline onClick={() => {
                this.manuallyRefresh = true;
                this.setState({ refreshing: true });
            }}>antd-mobile按钮</Button>
        </div>
    }


    _formatZHEN(params) {
        let obj = {
            Approve: "同意",
            Reject: "否决",
            Disagree: "不同意",
            Return: "退回"
        };


        return obj[params] ? obj[params] : params
    }

    //点击审批结果
    handleResult(e) {
        let value = e.target.value;
        this.props.updateSelectVal({ name: "approveResult", value: value });

        //选择审批结果再次请求数据
        this.props.reloadsign(value)
    }

    //审核意见
    handleIntro(e) {
        let value = e.target.value;
        this.props.updateSubmitSelectVal({ name: "approveIdea", value: value });
    }

    //提交代码
    submitOpinion(modelDatas, recallDatas) {
        console.log("点击提交按钮_submit--", this.props.sign._submit);
        alert('要提交的数据' + JSON.stringify(this.props.sign._submit))
    }
}

const signContainer = connect(mapStateToProps, mapDispatchToProps)(app);

module.exports = signContainer;