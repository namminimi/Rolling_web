import React from 'react';
import profile_01 from '../../assets/images/svg/profile1.svg';
import profile_02 from '../../assets/images/svg/profile2.svg';
import profile_03 from '../../assets/images/svg/profile3.svg';
import arrow_down from '../../assets/images/svg/arrow_down.svg';
import addIcon from '../../assets/images/svg/add-20.svg';
import shareIcon from '../../assets/images/svg/share-24.svg';
import './subHeader.scss';

const SubHeader = () => {
    return (
        <div className="to-wrap">
            <div className="to-block">
                <h3>To.Ashley Kim</h3>
                <div className="to-block-right">
                    <div className="to-profiles-wrap">
                        <ul className="to-profiles">
                            <li>
                                <img src={profile_01} alt="프로필이미지" />
                            </li>
                            <li>
                                <img src={profile_02} alt="프로필이미지" />
                            </li>
                            <li>
                                <img src={profile_03} alt="프로필이미지" />
                            </li>
                            <li>
                                <div>+27</div>
                            </li>
                        </ul>
                        <div className="to-profiles-write">
                            <h4>23</h4>명이 작성했어요!
                        </div>
                    </div>
                    <div className="to-emoji-wrap">
                        <ul className="emoji-list">
                            <li>
                                👍<span>20</span>
                            </li>
                            <li>
                                😍<span>20</span>
                            </li>
                            <li>
                                😢<span>7</span>
                            </li>
                        </ul>
                        <img src={arrow_down} alt="화살표 아이콘" />
                        <div className="to-add-emoji">
                            <img src={addIcon} alt="이모지추가 아이콘" />
                            <span>추가</span>
                        </div>
                    </div>
                    <div className="share-btn">
                        <img src={shareIcon} alt="공유아이콘" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubHeader;
