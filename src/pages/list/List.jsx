import React from 'react';
import './list.scss';
import profile_01 from '../../assets/images/svg/profile1.svg';
import profile_02 from '../../assets/images/svg/profile2.svg';
import profile_03 from '../../assets/images/svg/profile3.svg';
import { Link } from 'react-router-dom';

const List = () => {
    return (
        <div className="list">
            <div className="list-upper">
                <div className="list_01-wrap list-wrap">
                    <h2>인기 롤링 페이퍼🔥</h2>
                    <div className="list-slide">
                        <div className="list-card">
                            <h3>To.Sowon</h3>
                            <ul className="list-profiles">
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
                            <div className="list-write-length">
                                <h3>30</h3>명이 작성했어요!
                            </div>
                            <div className="list-card-line"></div>
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
                        </div>
                        <div className="list-card">
                            <h3>To.Sowon</h3>
                            <ul className="list-profiles">
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
                            <div className="list-write-length">
                                <h3>30</h3>명이 작성했어요!
                            </div>
                            <div className="list-card-line"></div>
                            <ul className="emoji-list">
                                <li>
                                    👍<span>20</span>
                                </li>
                                <li>
                                    😍<span>20</span>
                                </li>
                                <li>
                                    😢<span>20</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="list_02-wrap list-wrap">
                    <h2>최근에 만든 롤링 페이퍼⭐</h2>
                    <div className="list-slide">
                        <div className="list-card">
                            <h3>To.Sowon</h3>
                            <ul className="list-profiles">
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
                            <div className="list-write-length">
                                <h3>30</h3>명이 작성했어요!
                            </div>
                            <div className="list-card-line"></div>
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
                        </div>
                        <div className="list-card">
                            <h3>To.Sowon</h3>
                            <ul className="list-profiles">
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
                            <div className="list-write-length">
                                <h3>30</h3>명이 작성했어요!
                            </div>
                            <div className="list-card-line"></div>
                            <ul className="emoji-list">
                                <li>
                                    👍<span>20</span>
                                </li>
                                <li>
                                    😍<span>20</span>
                                </li>
                                <li>
                                    😢<span>20</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="list-button">
                <Link to={'/list'}>나도 만들어보기</Link>
            </div>
        </div>
    );
};

export default List;
