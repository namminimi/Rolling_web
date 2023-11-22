import React from 'react';
import './main.scss';
import point01_img from '../../assets/images/svg/point1.svg';
import point02_img from '../../assets/images/svg/point02.svg';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className="main">
            <div className="point_01 point-block">
                <div className="point-text-wrap">
                    <h3>Point.01</h3>
                    <h2>
                        누구나 손쉽게, 온라인
                        <br />
                        롤링 페이퍼를 만들 수 있어요
                    </h2>
                    <div className="point-text-small">
                        로그인 없이 자유롭게 만들어요.
                    </div>
                </div>
                <img src={point01_img} alt="포인트1이미지" />
            </div>
            <div className="point_02 point-block">
                <div className="point-text-wrap">
                    <h3>Point.02</h3>
                    <h2>
                        서로에게 이모지로 감정을
                        <br />
                        표현해보세요
                    </h2>
                    <div className="point-text-small">
                        롤링 페이퍼에 이모지를 추가할 수 있어요.
                    </div>
                </div>
                <img src={point02_img} alt="포인트2이미지" />
            </div>
            <Link to={'/list'}>구경해보기</Link>
        </div>
    );
};

export default Main;
