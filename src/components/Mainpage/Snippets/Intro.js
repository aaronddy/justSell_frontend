import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";

export default class Intro extends Component {
  clickToLogin = () => {
    console.log("Button is clicked!");
  };
  render() {
    return (
      <>
        <Image>
          <Main>
            <Header>
              <Wrapper>
                <a href="/main.html" className="main_section_1_header_logo">
                  <img
                    src="/assets/images/justsell_new_logo.png"
                    alt="mainLogo"
                  />
                </a>
                <Link href="/Login">
                  <HeaderBtn>
                    <HeaderBtnH1>JustSell 이용하기</HeaderBtnH1>
                  </HeaderBtn>
                </Link>
              </Wrapper>
            </Header>
            <SectionPc>
              <div className="main_section_1_textarea">
                <SectionTitle>
                  실패 없는 고수익
                  <br />
                  저스트셀 창업 플랫폼
                </SectionTitle>
                <ul className="main_section_1_textarea_chkList">
                  <CheckListli>
                    <CheckListH1>
                      <Check />
                      재고 없이 판매하세요 !
                    </CheckListH1>
                  </CheckListli>
                  <CheckListli>
                    <CheckListH1>
                      <Check />
                      소자본으로 판매하세요 !
                    </CheckListH1>
                  </CheckListli>
                  <CheckListli>
                    <CheckListH1>
                      <Check />
                      높은 수익을 누려보세요 !
                    </CheckListH1>
                  </CheckListli>
                </ul>
                <Link href="/Consulting">
                  <MainBtn>상담신청</MainBtn>
                </Link>
              </div>
              <GoDown>
                <img className="main_goDown" alt="" />
              </GoDown>
            </SectionPc>
          </Main>
        </Image>
      </>
    );
  }
}

const Main = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  position: relative;
  height: 1020px;
`;

const Image = styled.div`
  background-image: url("/assets/images/main_background.png");
  background-size: cover;
  background-position: top;
`;

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

const HeaderBtn = styled.a`
  float: right;
  display: block;
  width: 11rem;
  height: 2.5rem;
  border: 1px solid #fff;
  text-align: center;
  line-height: 2.45rem;
  margin-top: 1rem;
  cursor: pointer;
`;

const HeaderBtnH1 = styled.h1`
  color: #fff;
  font-size: 0.875rem;
`;

const CheckListli = styled.li`
  margin-top: 0.5rem;
  list-style: none;
`;

const CheckListH1 = styled.h1`
  font-size: 1.75rem;
  color: #fff;
  font-family: noto_R;
`;

const Check = styled.a`
  content: "";
  background-image: url("/assets/images/main_icon_chk.png");
  width: 1.575rem;
  height: 1.175rem;
  display: inline-block;
  background-position: center;
  background-size: 100%;
  vertical-align: middle;
  margin-right: 1rem;
`;

const MainBtn = styled.a`
  display: block;
  cursor: pointer;
  width: 17.5rem;
  background-color: #ff8e09;
  height: 3.5rem;
  margin-top: 3rem;
  border-radius: 2rem;
  text-align: center;
  line-height: 3.5rem;
  color: #fff;
  font-size: 1.25rem;
  font-family: noto_B;
  background: -moz-linear-gradient(
    23.09% -96.08% -45deg,
    rgba(255, 212, 0, 1) 0%,
    rgba(253, 145, 0, 1) 100%
  );
  background: -webkit-linear-gradient(
    -45deg,
    rgba(255, 212, 0, 1) 0%,
    rgba(253, 145, 0, 1) 100%
  );
  background: -webkit-gradient(
    linear,
    23.09% -96.08%,
    76.91% 196.08%,
    color-stop(0, rgba(255, 212, 0, 1)),
    color-stop(1, rgba(253, 145, 0, 1))
  );
  background: -o-linear-gradient(
    -45deg,
    rgba(255, 212, 0, 1) 0%,
    rgba(253, 145, 0, 1) 100%
  );
  background: -ms-linear-gradient(
    -45deg,
    rgba(255, 212, 0, 1) 0%,
    rgba(253, 145, 0, 1) 100%
  );
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFD400', endColorstr='#FD9100' ,GradientType=0)";
  background: linear-gradient(
    135deg,
    rgba(255, 212, 0, 1) 0%,
    rgba(253, 145, 0, 1) 100%
  );
  border-radius: 28px;
  -moz-border-radius: 28px;
  -webkit-border-radius: 28px;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFD400', endColorstr='#FD9100', GradientType=1);
`;

const GoDown = styled.div`
  position: absolute;
  cursor: pointer;
  bottom: 8rem;
  left: 50%;
  width: 50px;
  height: 35px;
  background-size: 35px 20px;
  background-repeat: no-repeat;
  background-image: url("/assets/images/main_down_icon.png");
`;
