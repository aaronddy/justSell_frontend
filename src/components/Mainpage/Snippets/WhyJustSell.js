import React from "react";
import styled from "styled-components";
import FourImgBox from "../FourImgBox";

export default function WhyJustSell() {
  return (
    <div>
      <MainSection>
        <TitleArea>
          <Title>POINT 1</Title>
        </TitleArea>
        <SubTitleArea>
          <SubH1>
            왜 ‘실패없는’ <SubB>창업인가요?</SubB>
          </SubH1>
          <SubH2>
            JustSell은 상품이 팔렸을 때 배송할 상품을 매입하기 때문에
            <br />
            원금과 이익이 보장된 창업입니다!
          </SubH2>
        </SubTitleArea>
        <FourImgBox />
      </MainSection>
    </div>
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
  color: #003f9a;
`;

const SubB = styled.b`
  color: #007add;
  font-family: noto_R;
`;

const SubH2 = styled.h2`
  font-size: 2.25rem;
  color: #4d4d4d;
  margin-top: 3.5rem;
  font-family: noto_DL;
`;
