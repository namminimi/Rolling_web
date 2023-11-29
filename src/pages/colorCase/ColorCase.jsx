import React from 'react';
import './colorCase.scss';

const ColorCase = () => {
    return (
        <div className="color-case">
            <div className="color-case-wrap">
                <h2 className="to-title">To.</h2>
                <input
                    type="text"
                    name="to"
                    placeholder="받는 사람 이름을 입력해 주세요"
                />
                <h2 className="select-background">배경화면을 선택해 주세요.</h2>
                <div className="case-description">
                    컬러를 선택하거나, 이미지를 선택할 수 있습니다.
                </div>
                <ul className="category">
                    <li>컬러</li>
                    <li>이미지</li>
                </ul>
                <ul className="background-image">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <button type="button">생성하기</button>
            </div>
        </div>
    );
};

export default ColorCase;
