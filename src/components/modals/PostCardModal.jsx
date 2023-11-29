import React from 'react';
import './postCardModal.scss';
import profile_01 from '../../assets/images/svg/profile1.svg';
import profile_02 from '../../assets/images/svg/profile2.svg';
import profile_03 from '../../assets/images/svg/profile3.svg';

const PostCardModal = () => {
    return (
        <div className="post-card-modal">
            <div className="card-modal">
                <div className="post-card-block">
                    <img src={profile_01} alt="프로필이미지" />
                    <div className="post-card-block-name">
                        <div className="name">
                            From.<h3>김동훈</h3>
                        </div>
                        <div className="tag">가족</div>
                    </div>
                    <div className="post-card-date">2023.07.08</div>
                </div>
                <p className="post-card-text">
                    코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두
                    조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요.
                    건강, 체력 모두 조심 또 하세요!요즘이네요. 건강, 체력 모두
                    조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요.
                    건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는
                    요즘이네요. 건강, 체력 모두 조심 또 하세요!요즘이네요. 건강,
                    체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는
                    요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시
                    기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또
                    하세요!요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가
                    또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또
                    하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력
                    모두 조심 또 하세요!요즘이네요. 건강, 체력 모두 조심 또
                    하세요!
                </p>
                <div className="card-modal-btn">확인</div>
            </div>
        </div>
    );
};

export default PostCardModal;
