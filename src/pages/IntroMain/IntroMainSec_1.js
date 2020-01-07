import React from "react";
import styled from "styled-components";
import justsell_new_logo from "../../assets/Images/IntroMain/justsell_new_logo.png";

const Header = styled.div`
  width: 100%;
  margin: 0 auto;
  position: absolute;
  top: 2rem;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  width: 90%;
`;

const HeaderLogo = styled.a`
  float: left;
`;

const SectionTitle = styled.h1`
  color: #fff;
  font-family: noto_B;
  margin-bottom: 6rem;
  font-size: 3rem;
`;

const SectionPc = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  width: 80%;
  margin-top: -8rem;
`;
export default function IntroMainSec_1() {
  return (
    <>
      <div>
        <Header>
          <Wrapper>
            <a href="/main.html" class="main_section_1_header_logo">
              <img src={justsell_new_logo} alt="이미지" />
              <div
                style={{
                  backgroundImage: `url(${justsell_new_logo})`
                }}
              ></div>
            </a>
            <a href="./index.html" class="main_section_1_header_btn">
              <h1>JustSell 이용하기</h1>
            </a>
          </Wrapper>
        </Header>
        <SectionPc>
          <div class="main_section_1_textarea">
            <SectionTitle>
              실패 없는 고수익
              <br />
              저스트셀 창업 플랫폼
            </SectionTitle>
            <ul class="main_section_1_textarea_chkList">
              <li>
                <h1>재고 없이 판매하세요 !</h1>
              </li>
              <li>
                <h1>소자본으로 판매하세요 !</h1>
              </li>
              <li>
                <h1>높은 수익을 누려보세요 !</h1>
              </li>
            </ul>
            <a class="main_top_btn">상담신청</a>
          </div>
          <img
            class="main_goDown"
            src="./assets/images/main/main_down_icon.png"
            alt=""
          />
        </SectionPc>
        <div class="section_1_m">
          <div class="section_1_m_text">
            <h1 class="section_1_m_text_title">
              실패 없는 고수익
              <br />
              <span>저스트셀 창업</span> 플랫폼
            </h1>
            <img src="./assets/images/main/main_top_mobile_img.png" alt="" />
            <ul class="main_section_1_textarea_chkList">
              <li>
                <h1>재고 없이 판매하세요 !</h1>
              </li>
              <li>
                <h1>소자본으로 판매하세요 !</h1>
              </li>
              <li>
                <h1>높은 수익을 누려보세요 !</h1>
              </li>
            </ul>
            <a class="main_top_btn">상담신청</a>
          </div>
        </div>
      </div>
    </>
  );
}
