import React from 'react';
import ReactDOM from 'react-dom';

import './MainWrap.scss';

class MainWrap extends React.Component {
    componentDidMount() {
        let el = ReactDOM.findDOMNode(this);
        setTimeout(function () {
            el.style.height = el.parentElement.offsetHeight - document.querySelector('.header').offsetHeight + 'px';
        }, 100)
    }

    render() {
        return <div className='main-content'>
            {this.props.children}
        </div>
    }
}

export default MainWrap;