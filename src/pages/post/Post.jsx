import React from 'react';
import plusIcon from '../../assets/images/svg/plus.svg';
import profile_01 from '../../assets/images/svg/profile1.svg';
import profile_02 from '../../assets/images/svg/profile2.svg';
import profile_03 from '../../assets/images/svg/profile3.svg';
import './post.scss';

const Post = () => {
    return (
        <div className="post">
            <div className="post-wrap">
                <div className="post-card">
                    <div className="plus-icon-bg">
                        <img src={plusIcon} alt="추가 아이콘" />
                    </div>
                </div>
                <div className="post-card-list">
                    <div className="post-card-block">
                        <img src={profile_01} alt="프로필이미지" />
                        <div className="post-card-block-name">
                            <div className="name">
                                From.<h3>김동훈</h3>
                            </div>
                            <div className="tag">가족</div>
                        </div>
                    </div>
                    <p className="post-card-text">
                        코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력
                        모두 조심 또 하세요!코로나가 또다시 기승을 부리는
                        요즘이네요. 건강, 체력 모두 조심 또 하세요!요즘이네요.
                        건강, 체력 모두 조심 또 하세요!
                    </p>
                    <div className="post-card-date">2023.07.08</div>
                </div>
            </div>
        </div>
    );
};

export default Post;
