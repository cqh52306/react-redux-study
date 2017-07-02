import React from 'react';
import './Loading.scss';

import Loading from 'react-loading';

class Load extends React.Component {

    componentDidMount() {
        let loadText = document.querySelector(".loading-text");
        loadText.innerHTML = "加载中...";
    }

    render() {
        const {show} = this.props;

        return <div style={{display: show ? 'flex' : 'none'}} className="loading-ct">
            <div className="loading-wrapper">
                <div className="loadEffect">
                    <Loading
                        type='spinningBubbles'
                        delay={0}
                        color='#e3e3e3'
                        style={{margin: "0 auto"}}
                    />
                </div>
                <p className="loading-text">加载中...</p>
            </div>
        </div>
    }
}

Load.propTypes = {
    show: React.PropTypes.bool
};


Load.defaultProps = {
    show: true
};

export default Load;