import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function Benefits() {
  return (
    <div>
      <div class="section_9">
        <TitleArea>
          <TitleH1>JustSell 이용 혜택</TitleH1>
        </TitleArea>
        <ContentSec>
          <ContentAreali>
            {/* <div class="section_9_contentArea_imgSizeFix"> */}
            <ContentImg />
            {/* </div> */}
            <ContentH1>단시간 창업</ContentH1>
          </ContentAreali>
          <ContentAreali>
            {/* <div class="section_9_contentArea_imgSizeFix"> */}
            <ContentImg2 />
            {/* </div> */}
            <ContentH1>소자본 창업</ContentH1>
          </ContentAreali>
          <ContentAreali>
            {/* <div class="section_9_contentArea_imgSizeFix"> */}
            <ContentImg3 />
            {/* </div> */}
            <ContentH1>
              다양한 온라인
              <br />
              채널
            </ContentH1>
          </ContentAreali>
          <ContentAreali>
            {/* <div class="section_9_contentArea_imgSizeFix"> */}
            <ContentImg4 />
            {/* </div> */}
            <ContentH1>
              이퀄리티 인공지능
              <br />
              판매관리
            </ContentH1>
          </ContentAreali>
          <ContentAreali>
            {/* <div class="section_9_contentArea_imgSizeFix"> */}
            <ContentImg5 />
            {/* </div> */}
            <ContentH1>상품 검색 필터</ContentH1>
          </ContentAreali>
          <ContentAreali>
            {/* <div class="section_9_contentArea_imgSizeFix"> */}
            <ContentImg6 />
            {/* </div> */}
            <ContentH1>CS 비용할인</ContentH1>
          </ContentAreali>
          <ContentAreali>
            {/* <div class="section_9_contentArea_imgSizeFix"> */}
            <ContentImg7 />
            {/* </div> */}
            <ContentH1>모바일 지원</ContentH1>
          </ContentAreali>
          <ContentAreali>
            {/* <div class="section_9_contentArea_imgSizeFix"> */}
            <ContentImg8 />
            {/* </div> */}
            <ContentH1>적립금 관리</ContentH1>
          </ContentAreali>
        </ContentSec>
      </div>
      <MainFooter>
        <FooterWrap>
          <FooterH1>
            JustSell은 창업의 시작과 모든 과정을
            <br />
            당신과 함께 합니다.
          </FooterH1>
          <Link href="/Consulting">
            <FooterBtn>상담신청</FooterBtn>
          </Link>
        </FooterWrap>
      </MainFooter>
    </div>
  );
}

const ContentSec = styled.ul`
  max-width: 1200px;
  margin: 0 auto;
`;
const TitleArea = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: block;
  width: 80%;
  font-size: 0;
  text-align: center;
`;

const TitleH1 = styled.h1`
  text-align: center;
  font-size: 3.5rem;
  color: #003f9a;
  padding-top: 10rem;
`;

const ContentAreali = styled.li`
  display: inline-block;
  width: 11rem;
  margin: 6rem 4.2rem 0 3.5rem;
  vertical-align: middle;
`;

const ContentImg = styled.div`
  background-image: url("/assets/images/main_icon_list_1.png");
  background-size: 7rem auto;
  background-repeat: no-repeat;
  width: 7rem;
  height: 8rem;
  display: block;
  margin: 0 auto;
`;

const ContentImg2 = styled(ContentImg)`
  background-image: url("/assets/images/main_icon_list_2.png");
`;
const ContentImg3 = styled(ContentImg)`
  background-image: url("/assets/images/main_icon_list_3.png");
`;
const ContentImg4 = styled(ContentImg)`
  background-image: url("/assets/images/main_icon_list_4.png");
`;
const ContentImg5 = styled(ContentImg)`
  background-image: url("/assets/images/main_icon_list_5.png");
`;
const ContentImg6 = styled(ContentImg)`
  background-image: url("/assets/images/main_icon_list_6.png");
`;
const ContentImg7 = styled(ContentImg)`
  background-image: url("/assets/images/main_icon_list_7.png");
`;
const ContentImg8 = styled(ContentImg)`
  background-image: url("/assets/images/main_icon_list_8.png");
`;

const ContentH1 = styled.h1`
  text-align: center;
  color: #333333;
  font-family: noto_L;
  font-size: 1.2rem;
  margin-top: 1rem;
`;

const FooterH1 = styled.h1`
  font-size: 2.25rem;
  color: #fff;
  line-height: 50px;
`;

const MainFooter = styled.div`
  background-image: url("/assets/images/main_footer_back.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40rem;
  margin-top: 14rem;
`;

const FooterWrap = styled.div`
  max-width: 900px;
  width: 80%;
  margin-top: 8rem;
`;

const FooterBtn = styled.a`
  width: 15.5rem;
  border: 1px solid #fff;
  text-align: center;
  display: block;
  height: 3.5rem;
  line-height: 3.5rem;
  color: #fff;
  font-size: 1.4rem;
  margin-top: 4rem;
  cursor: pointer;
`;
