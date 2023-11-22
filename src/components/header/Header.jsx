import React from 'react';
import './header.scss';
import logo from '../../assets/images/svg/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="header-wrap">
                <Link className="logo" to={'/'}>
                    <img src={logo} alt="로고이미지" />
                    <h1>Rolling</h1>
                </Link>
                <a className="right-button" href="#none">
                    롤링 페이퍼 만들기
                </a>
            </div>
        </header>
    );
};

export default Header;
