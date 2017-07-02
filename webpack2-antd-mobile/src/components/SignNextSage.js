import React from 'react';

class SignNextSage extends React.Component {
    render() {
        const {approveModel,_submit} = this.props.sign;
        return <li>
            <div className="sign-l">下一阶段</div>
            {this._approveModelHTML(approveModel, _submit)}
        </li>
    }

    _approveModelHTML(approveModel, _submit) {
        let jsxTpl = "";
        /**
         * 在四类人当中 且 下一阶段 存在  且下一阶段、审批人是显示状态
         * */
        if (approveModel) {
            if (approveModel.length == 1 && approveModel[0].modelName != "") {
                jsxTpl = <div className="sign-r">{approveModel[0].modelName}</div>;
            } else if (approveModel.length > 1) {
                jsxTpl = <div className="sign-r">{_submit.approveModelNo}</div>;
            }
        }
        return jsxTpl;
    }

}


export default SignNextSage;