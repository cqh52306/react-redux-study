import React from 'react';
import ReactDOM from 'react-dom';
import './Header.scss';

class Header extends React.Component {

    render() {
        const { title } = this.props;

        return <header>
            <div className='header'>
                <div className="aside back" onClick={this.goBack.bind(this)}>
                    <i className="icon iconfont icon-icon_right"></i>
                </div>
                <div className="title">{title}</div>
                <div className="aside"></div>
            </div>
        </header>
    }

    goBack() {
        alert("返回逻辑")
    }
}


export default Header;