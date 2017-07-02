'use strict';
import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';

import * as InsideAction from '../actions/InsideAction';

import Loading from '../components/common/Loading';
import './Inside.scss';

function mapStateToProps(state) {
    return {
        loading: state.global.get('loading')
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(InsideAction, dispatch);
}

class app extends React.Component {

    componentWillMount() {
        /**请求数据**/
        // this.props.queryPublicDataDic()
    }

    render() {
        const {loading} = this.props;

        return <div>
            <Loading show={loading}/>
            <div className='inside-wrap'>
                {this.props.children}
            </div>
        </div>

    }
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(app);

module.exports = MainContainer;
