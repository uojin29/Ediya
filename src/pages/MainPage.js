import React, { useState } from "react";
import '../styles/MainPage.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import Header from "../component/Header";

const CustomButton = styled(Button)(({ theme }) => ({
  color: '#84847c;',
  borderColor: 'white',

  '&:hover': {
    color: '#84847c;',
    borderColor: 'white',
    backgroundColor: 'white',
  },
}));

const buttons = [
  <CustomButton key="drink">음료</CustomButton>,
  <CustomButton key="food">푸드</CustomButton>,
  <CustomButton key="md">MD</CustomButton>,
];

function MainPage() {
  const [selectedButton, setSelectedButton] = useState(0);

  const navigate = useNavigate();

  const handleButtonClick = (index) => {
    setSelectedButton(index);
    if (index === 0) {
        navigate("/");
    }
    else if (index === 1) {
        navigate("/FoodPage");
    }
    else if (index === 2) {
        navigate("/MDPage");
    }
  };

  return (
    <div className="body">
      <Header/>
      <div className="container">
        <img className="drinkImage" alt="drink" src="img/drink_visual.jpg" />
        <h1 className="drink">음료</h1>
        <p className="menu"> ALWAYS BESIDE YOU,
          <strong>EDIYA COFFEE</strong>
        </p>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
              m: 1,
              position: 'absolute',
              top: '75%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
            },
          }}
        >
          <ButtonGroup size="large" aria-label="large button group">
            {buttons.map((button, index) => (
              React.cloneElement(button, {
                key: index,
                sx: {
                  ...button.props.sx,
                  backgroundColor: selectedButton === index ? 'white' : undefined,
                },
                onClick: () => handleButtonClick(index),
              })
            ))}
          </ButtonGroup>
        </Box>
      </div>
      <div className="block_new">
        <div className="location">
            HOME  메뉴  음료
        </div>
        {/* <div>
            <div className="con_align">
                <h3 className="nunito">추천상품</h3>
            </div>
        </div> */}
      </div>
      <div>
      {/* <div class="bx-wrapper" style="max-width: 1179px;">
          <div class="bx-viewport" aria-live="polite" style="width: 100%; overflow: hidden; position: relative; height: 358px;">
              <ul class="pro_n bxSlider" style="width: 31215%; position: relative; transition-duration: 0.5s; transform: translate3d(-9456px, 0px, 0px);">
                  <li style="float: left; list-style: none; position: relative; width: 393px;" class="bx-clone" aria-hidden="true">
						<a href="#c" onclick="show_slide_detail('135')">
                            <span class="new_icon"><img src="/images/common/best_icon.png" alt="new"/></span>
                            <img src="/files/menu/IMG_1647319867876.png" alt="HOT 토피넛 라떼"/>
                        </a>
						<p><a href="#c" onclick="show_slide_detail('135')">HOT 토피넛 라떼</a></p>
                    </li>
                    <li style="float: left; list-style: none; position: relative; width: 393px;" class="bx-clone" aria-hidden="true">
                        <a href="#c" onclick="show_slide_detail('136')">
                            <span class="new_icon"><img src="/images/common/best_icon.png" alt="new"/></span>
                            <img src="/files/menu/IMG_1647319854660.png" alt="ICED 토피넛 라떼"/>
                        </a>
                        <p><a href="#c" onclick="show_slide_detail('136')">ICED 토피넛 라떼</a></p>
                    </li>
                    <li style="float: left; list-style: none; position: relative; width: 393px;" class="bx-clone" aria-hidden="true">
                            <a href="#c" onclick="show_slide_detail('250')">
                                <span class="new_icon"><img src="/images/common/best_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1647322170791.png" alt="꿀복숭아 플랫치노"/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('250')">꿀복숭아 플랫치노</a></p>
                    </li>
                    <li style="float: left; list-style: none; position: relative; width: 393px;" aria-hidden="true">
                            <a href="#c" onclick="show_slide_detail('651')">
                                <span class="new_icon"><img src="/images/common/new_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1686560524185.png" alt="블루문 에이드 "/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('651')">블루문 에이드 </a></p>
                    </li>
                    <li style="float: left; list-style: none; position: relative; width: 393px;" aria-hidden="true">
                            <a href="#c" onclick="show_slide_detail('657')">
                                <span class="new_icon"><img src="/images/common/new_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1688351274794.png" alt="더블 초코칩 쉐이크 "/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('657')">더블 초코칩 쉐이크 </a></p>
                    </li>
                    <li style="float: left; list-style: none; position: relative; width: 393px;" aria-hidden="true">
                            <a href="#c" onclick="show_slide_detail('656')">
                                <span class="new_icon"><img src="/images/common/new_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1688351123852.png" alt="피스타치오 쉐이크 "/></a>
                            <p><a href="#c" onclick="show_slide_detail('656')">피스타치오 쉐이크 </a></p>
                    </li>
                    <li aria-hidden="true" style="float: left; list-style: none; position: relative; width: 393px;">
                            <a href="#c" onclick="show_slide_detail('645')">
                                <span class="new_icon"><img src="/images/common/new_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1684299991102.png" alt="생과일 수박주스 "/></a>
                            <p><a href="#c" onclick="show_slide_detail('645')">생과일 수박주스 </a></p>
                    </li>
                    <li aria-hidden="true" style="float: left; list-style: none; position: relative; width: 393px;">
                            <a href="#c" onclick="show_slide_detail('646')">
                                <span class="new_icon"><img src="/images/common/new_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1684300102851.png" alt="(EX) 생과일 수박주스 "/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('646')">(EX) 생과일 수박주스 </a></p>
                    </li>
                    <li aria-hidden="true" style="float: left; list-style: none; position: relative; width: 393px;">
                            <a href="#c" onclick="show_slide_detail('647')">
                                <span class="new_icon"><img src="/images/common/new_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1684300375641.png" alt="생과일 수박 리프레싱 모히토"/></a>
                            <p><a href="#c" onclick="show_slide_detail('647')">생과일 수박 리프레싱 모히토</a></p>
                    </li>
                    <li aria-hidden="true" style="float: left; list-style: none; position: relative; width: 393px;">
                            <a href="#c" onclick="show_slide_detail('648')">
                                <span class="new_icon"><img src="/images/common/new_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1684300507180.png" alt="(EX) 생과일 수박 리프레싱 모히토"/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('648')">(EX) 생과일 수박 리프레싱 모히토</a></p>
                    </li>
                    <li aria-hidden="true" style="float: left; list-style: none; position: relative; width: 393px;">
                            <a href="#c" onclick="show_slide_detail('649')">
                                <span class="new_icon"><img src="/images/common/new_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1684300616217.png" alt="생과일 토마토 주스 "/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('649')">생과일 토마토 주스 </a></p>
                    </li>
                    <li aria-hidden="true" style="float: left; list-style: none; position: relative; width: 393px;">
                            <a href="#c" onclick="show_slide_detail('650')">
                                <span class="new_icon"><img src="/images/common/new_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1684300699164.png" alt="(EX) 생과일 토마토 주스 "/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('650')">(EX) 생과일 토마토 주스 </a></p>
                    </li>
                    <li aria-hidden="true" style="float: left; list-style: none; position: relative; width: 393px;">
                            <a href="#c" onclick="show_slide_detail('652')">
                                <span class="new_icon"><img src="/images/common/new_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1687488159352.png" alt="마이멜로디 딸기 플랫치노"/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('652')">마이멜로디 딸기 플랫치노</a></p>
                    </li>
                    <li aria-hidden="true" style="float: left; list-style: none; position: relative; width: 393px;">
                            <a href="#c" onclick="show_slide_detail('653')">
                                <span class="new_icon"><img src="/images/common/new_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1687488340334.png" alt="폼폼푸린 슈크림 플랫치노"/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('653')">폼폼푸린 슈크림 플랫치노</a></p>
                    </li>
                    <li aria-hidden="true" style="float: left; list-style: none; position: relative; width: 393px;">
                            <a href="#c" onclick="show_slide_detail('654')">
                                <span class="new_icon"><img src="/images/common/new_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1687488610262.png" alt="쿠로미 망고피치 에이드 "/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('654')">쿠로미 망고피치 에이드 </a></p>
                    </li>
                    <li aria-hidden="true" style="float: left; list-style: none; position: relative; width: 393px;">
                            <a href="#c" onclick="show_slide_detail('655')"
                            ><span class="new_icon"><img src="/images/common/new_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1687488730665.png" alt="(EX)쿠로미 망고피치 에이드"/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('655')">(EX)쿠로미 망고피치 에이드</a></p>
                    </li>
                    <li aria-hidden="true" style="float: left; list-style: none; position: relative; width: 393px;">
                            <a href="#c" onclick="show_slide_detail('639')">
                                <span class="new_icon"><img src="/images/common/new_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1683183444861.png" alt="더블베리 요거놀라 1인빙수"/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('639')">더블베리 요거놀라 1인빙수</a></p>
                    </li>
                    <li aria-hidden="true" style="float: left; list-style: none; position: relative; width: 393px;">
                            <a href="#c" onclick="show_slide_detail('640')">
                                <span class="new_icon"><img src="/images/common/new_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1683183689194.png" alt="애플망고 요거놀라 1인빙수 "/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('640')">애플망고 요거놀라 1인빙수 </a></p>
                    </li>
                    <li aria-hidden="true" style="float: left; list-style: none; position: relative; width: 393px;">
                            <a href="#c" onclick="show_slide_detail('642')">
                                <span class="new_icon"><img src="/images/common/new_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1683184355706.png" alt="흑임자 크런치 눈꽃빙수 "/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('642')">흑임자 크런치 눈꽃빙수 </a></p>
                    </li>
                    <li aria-hidden="true" style="float: left; list-style: none; position: relative; width: 393px;">
                            <a href="#c" onclick="show_slide_detail('604')">
                                <span class="new_icon"> <img src="/images/common/new_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1672618018525.png" alt="ICED 딸기 듬뿍 라떼"/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('604')">ICED 딸기 듬뿍 라떼</a></p>
                    </li>
                    <li aria-hidden="true" style="float: left; list-style: none; position: relative; width: 393px;">
                            <a href="#c" onclick="show_slide_detail('605')">
                                <span class="new_icon"><img src="/images/common/new_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1672618812774.png" alt="(EX) 딸기 듬뿍 라떼"/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('605')">(EX) 딸기 듬뿍 라떼</a></p>
                    </li>
                    <li aria-hidden="true" style="float: left; list-style: none; position: relative; width: 393px;">
                            <a href="#c" onclick="show_slide_detail('538')">
                                <span class="new_icon"><img src="/images/common/best_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1671587873712.png" alt="(L) ICED 넛츠 크림 라떼"/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('538')">(L) ICED 넛츠 크림 라떼</a></p>
                    </li>
                    <li aria-hidden="true" style="float: left; list-style: none; position: relative; width: 393px;">
                            <a href="#c" onclick="show_slide_detail('572')">
                                <span class="new_icon"><img src="/images/common/best_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1660608743501.png" alt="ICED 살얼음 식혜 "/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('572')">ICED 살얼음 식혜 </a></p>
                    </li>
                    <li aria-hidden="true" style="float: left; list-style: none; position: relative; width: 393px;">
                            <a href="#c" onclick="show_slide_detail('573')">
                                <span class="new_icon"><img src="/images/common/best_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1660608842680.png" alt="(EX) ICED 살얼음 식혜"/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('573')">(EX) ICED 살얼음 식혜</a></p>
                    </li>
                    <li aria-hidden="false" style="float: left; list-style: none; position: relative; width: 393px;">
                            <a href="#c" onclick="show_slide_detail('501')">
                                <span class="new_icon"><img src="/images/common/new_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1647322809136.png" alt="ICED 퓨어 페퍼민트"/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('501')">ICED 퓨어 페퍼민트</a></p>
                    </li>
                    <li aria-hidden="false" style="float: left; list-style: none; position: relative; width: 393px;">
                            <a href="#c" onclick="show_slide_detail('374')">
                                <span class="new_icon"><img src="/images/common/best_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1647321929656.png" alt="ICED 달고나 라떼"/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('374')">ICED 달고나 라떼</a></p>
                    </li>
                    <li aria-hidden="false" style="float: left; list-style: none; position: relative; width: 393px;">
                            <a href="#c" onclick="show_slide_detail('320')">
                                <span class="new_icon"><img src="/images/common/best_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1564379279645.png" alt="이디야 콤부차 복숭아망고"/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('320')">이디야 콤부차 복숭아망고</a></p>
                    </li>
                    <li aria-hidden="true" style="float: left; list-style: none; position: relative; width: 393px;">
                            <a href="#c" onclick="show_slide_detail('321')">
                                <span class="new_icon"><img src="/images/common/best_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1564379353475.png" alt="이디야 콤부차 청포도레몬"/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('321')">이디야 콤부차 청포도레몬</a></p>
                    </li>
                    <li aria-hidden="true" style="float: left; list-style: none; position: relative; width: 393px;">
                            <a href="#c" onclick="show_slide_detail('249')">
                                <span class="new_icon"><img src="/images/common/best_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1647320860534.png" alt="ICED 콜드브루 화이트 비엔나"/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('249')">ICED 콜드브루 화이트 비엔나</a></p>
                    </li>
                    <li aria-hidden="true" style="float: left; list-style: none; position: relative; width: 393px;">
                            <a href="#c" onclick="show_slide_detail('333')">
                                <span class="new_icon"><img src="/images/common/best_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1671585023298.png" alt="(L) ICED 연유 카페 라떼 "/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('333')">(L) ICED 연유 카페 라떼 </a></p>
                    </li>
                    <li aria-hidden="true" style="float: left; list-style: none; position: relative; width: 393px;">
                            <a href="#c" onclick="show_slide_detail('266')">
                                <span class="new_icon"><img src="/images/common/best_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1647323138803.png" alt="(EX) ICED 유자피나콜라다"/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('266')">(EX) ICED 유자피나콜라다</a></p>
                    </li>
                    <li style="float: left; list-style: none; position: relative; width: 393px;" aria-hidden="true">
                            <a href="#c" onclick="show_slide_detail('135')">
                                <span class="new_icon"><img src="/images/common/best_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1647319867876.png" alt="HOT 토피넛 라떼"/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('135')">HOT 토피넛 라떼</a></p>
                    </li>
                    <li style="float: left; list-style: none; position: relative; width: 393px;" aria-hidden="true">
                            <a href="#c" onclick="show_slide_detail('136')">
                                <span class="new_icon"><img src="/images/common/best_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1647319854660.png" alt="ICED 토피넛 라떼"/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('136')">ICED 토피넛 라떼</a></p>
                    </li>
                    <li style="float: left; list-style: none; position: relative; width: 393px;" aria-hidden="true">
                            <a href="#c" onclick="show_slide_detail('250')">
                                <span class="new_icon"><img src="/images/common/best_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1647322170791.png" alt="꿀복숭아 플랫치노"/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('250')">꿀복숭아 플랫치노</a></p>
                    </li>
                    <li style="float: left; list-style: none; position: relative; width: 393px;" class="bx-clone" aria-hidden="true">
                            <a href="#c" onclick="show_slide_detail('651')">
                                <span class="new_icon"><img src="/images/common/new_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1686560524185.png" alt="블루문 에이드 "/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('651')">블루문 에이드 </a></p>
                    </li>
                    <li style="float: left; list-style: none; position: relative; width: 393px;" class="bx-clone" aria-hidden="true">
                            <a href="#c" onclick="show_slide_detail('657')">
                                <span class="new_icon"><img src="/images/common/new_icon.png" alt="new"/></span>
                                <img src="/files/menu/IMG_1688351274794.png" alt="더블 초코칩 쉐이크 "/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('657')">더블 초코칩 쉐이크 </a></p>
                    </li>
                    <li style="float: left; list-style: none; position: relative; width: 393px;" class="bx-clone" aria-hidden="true">
                            <a href="#c" onclick="show_slide_detail('656')">
                                <span class="new_icon"><img src="/images/common/new_icon.png" alt="new"/>
                                </span><img src="/files/menu/IMG_1688351123852.png" alt="피스타치오 쉐이크 "/>
                            </a>
                            <p><a href="#c" onclick="show_slide_detail('656')">피스타치오 쉐이크 </a></p>
                    </li>
                </ul>
                </div>
                <div class="bx-controls bx-has-controls-direction">
                    <div class="bx-controls-direction">
                        <a class="bx-prev" href="">Prev</a>
                        <a class="bx-next" href="">Next</a>
                    </div>
                </div>
            </div>*/}
      </div>
    </div>
  );
}

export default MainPage;
