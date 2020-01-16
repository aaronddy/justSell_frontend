import React from "react";
import styled from "styled-components";

export default function WinWithJust() {
  return (
    <MainSection>
      <TitleArea>
        <Title>POINT 4</Title>
      </TitleArea>
      <SubTitleArea>
        <SubH1>
          JustSell과 <SubB>Win - Win</SubB> 하는 창업
        </SubH1>
      </SubTitleArea>
      <ContentWrap>
        <ContentBox>
          <H1>
            <Green>창업자는</Green>
            <br />
            <Blue>JustSell</Blue>을 통해
            <br />
            높은 수익을
            <br />
            리스크없이
            <br />
            손쉽게
            <br />
            이룰 수 있습니다.
          </H1>
        </ContentBox>
        <Image />
        <ContentBox_right>
          <H1>
            <Blue>JustSell</Blue>은<br />
            <Green>창업자</Green>를 통해
            <br />
            더 많은 상품을
            <br />
            판매사이트에
            <br />
            판매할 수 있습니다.
          </H1>
          <Span>
            1개의 판매몰에서 사업자당 5,000개의 상품만 등록 가능
            <br />
            (Auc**,Gma** 등의 판매사이트 기준 / 2019년7월 기준)
          </Span>
        </ContentBox_right>
      </ContentWrap>
    </MainSection>
  );
}

const MainSection = styled.div`
  margin-top: 12rem;
  padding-bottom: 12rem;
`;

const TitleArea = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  border-bottom: 2px solid #007add;
  padding-bottom: 2rem;
  width: 90%;
`;

const Title = styled.h1`
  color: #007add;
  font-family: noto_L;
  font-size: 1.9rem;
  position: relative;
  width: 9rem;
  display: block;
  margin: 0 auto;
`;

const SubTitleArea = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
`;

const SubH1 = styled.h1`
  font-size: 3.563rem;
  padding-top: 2rem;
  color: #007add;
`;

const SubB = styled.b`
  font-family: noto_R;
  color: #003f9a;
`;

const ContentWrap = styled.div`
  max-width: 1550px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  position: relative;
  margin-top: 8rem;
`;
const ContentBox = styled.div`
  background-color: #fff;
  border-radius: 21px;
  display: inline-block;
  width: 36rem;
  box-shadow: 0px 8px 10px rgba(0, 63, 154, 0.1);
  height: 33rem;
  vertical-align: middle;
`;
const ContentBox_right = styled(ContentBox)`
  margin-left: 13rem;
`;
const Span = styled.span`
  font-size: 1rem;
  color: #989898;
  padding-top: 1rem;
  display: block;
  font-family: noto_L;
`;
const H1 = styled.h1`
  vertical-align: middle;
  font-family: noto_DL;
  color: #333333;
  font-size: 2.625rem;
  margin-top: 5rem;
`;
const Blue = styled.b`
  color: #007add;
  font-family: noto_DL;
`;
const Green = styled(Blue)`
  color: #24aaaa;
`;

const Image = styled.div`
  width: 20rem;
  height: 20rem;
  background-image: url("/assets/images/main_hand_s.png");
  background-repeat: no-repeat;
  border-radius: 100%;
  background-size: 135%;
  background-position: center center;
  background-color: #37d1bb;
  position: absolute;
  left: 50%;
  margin-left: -10rem;
  top: 50%;
  margin-top: -10rem;
  border: 6px solid #fff;
  box-shadow: 0px 8px 10px rgba(0, 63, 154, 0.1);
`;
