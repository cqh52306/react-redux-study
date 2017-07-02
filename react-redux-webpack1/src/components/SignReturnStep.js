import React from 'react';

class SignReturnStep extends React.Component {
    render() {
        const {approveRecall} = this.props.sign;
        return <li>
            <div className="sign-l">退回步骤</div>
            {this._approveRecallHTML(approveRecall)}
            {this._isShowIcon(approveRecall)}
        </li>
    }

    _approveRecallHTML(approveRecall) {
        let jsxTpl = "";
        //在四类人当中 且 审批人 存在 且审批人是显示状态
        if (approveRecall) {
            //只有一条数据自动带出
            if (approveRecall.length == 1) {
                jsxTpl =
                    <div className="sign-r">{approveRecall[0].recallName} [ {approveRecall[0].recallUserName} ]</div>;
            } else if (approveRecall.length > 1) {
                jsxTpl = <div className="sign-r">
                    <select
                        className="sign-input"
                        defaultValue="请选择"
                        onChange={this.hadnModel.bind(this,approveRecall)}>
                        <option value="p_select">请选择</option>
                        {approveRecall.map((recall, index) =>
                                <option
                                    key={index}
                                    value={recall.recallNo}
                                    >
                                    {recall.recallName} [ {recall.recallUserName} ]
                                </option>
                        )}
                    </select>
                </div>;
            }
        }
        return jsxTpl;
    }

    //是否显示右箭头
    _isShowIcon(approveRecall) {
        return approveRecall && approveRecall.length > 1 ?
            <div className="sign-icon">
                <i className="icon iconfont icon-icon_left"></i>
            </div>
            : ""
    }

    /**
     * 操作审批人
     * */
    hadnModel(approveRecall, e) {
        let value = e.target.value;
        console.log(222, value);

        //如果选择的“请选择”则清空
        if (value == "p_select") {
            this.props.updateSubmitSelectVal({name: "approveModelNo", value: ""});
            this.props.updateSubmitSelectVal({name: "approveModelUserId", value: ""});
        } else {
            this.props.updateSubmitSelectVal({name: "approveModelNo", value: value});
            this.props.updateSubmitSelectVal({name: "approveModelUserId", value: ''});
        }
    }

}


export default SignReturnStep;