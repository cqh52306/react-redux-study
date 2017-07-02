import React from 'react';

class SignApprover extends React.Component {

    render() {
        const {approveModel} = this.props.sign;
        return <li>
            <div className="sign-l">审批人</div>
            {this._approveModelHTML(approveModel)}
            {this._isShowIcon(approveModel)}
        </li>
    }

    _approveModelHTML(approveModel) {
        let jsxTpl = "";
        //在四类人当中 且 审批人 存在 且审批人是显示状态
        if (approveModel) {
            //只有一条数据自动带出
            if (approveModel.length == 1 && approveModel[0].modelUserName != '') {
                jsxTpl = <div className="sign-r">{approveModel[0].modelUserName}</div>;
            } else if (approveModel.length > 1 && approveModel[0].modelUserName != '') {
                jsxTpl = <div className="sign-r">
                    <select
                        className="sign-input"
                        defaultValue="请选择"
                        onChange={this.hadnModel.bind(this,approveModel)}>
                        <option value="p_select">请选择</option>
                        {approveModel.map((Model, index) =>
                                <option
                                    key={index}
                                    value={Model.modelUserId}>
                                    {Model.modelUserName}
                                </option>
                        )}
                    </select>
                </div>;
            }
        }
        return jsxTpl;
    }

    //是否显示右箭头
    _isShowIcon(approveModel) {
        return approveModel && approveModel.length > 1 ?
            <div className="sign-icon">
                <i className="icon iconfont icon-icon_left"></i>
            </div>
            : ""
    }

    /**
     * 操作审批人
     * */
    hadnModel(approveModel, e) {
        let value = e.target.value;
        //如果选择的“请选择”则清空
        if (value == "p_select") {
            this.props.updateSubmitSelectVal({name: "approveModelNo", value: ""});
            this.props.updateSubmitSelectVal({name: "approveModelUserId", value: ""});
        } else {
            //循环找出下一节点名称
            approveModel.forEach((recall) => {
                if (recall.modelUserId == value) {
                    this.props.updateSubmitSelectVal({name: "approveModelNo", value: recall.modelName});
                    this.props.updateSubmitSelectVal({name: "approveModelUserId", value: recall.modelUserId});
                }
            });
        }
    }

}


export default SignApprover;