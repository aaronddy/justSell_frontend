import React from "react";
import styled from "styled-components";

export default function CompareItems() {
  return (
    <div>
      <VsContainer>
        <ContentWrapper>
          <ContentTitle>
            <ContentTitleH1>창업비용 비교</ContentTitleH1>
            <TitleLine />
          </ContentTitle>
          <TextWrapper>
            <TextH1>프랜차이즈 가맹 창업비용</TextH1>
            <TextH2>
              평균 <LeftB>1억 6천만원</LeftB> 소요
            </TextH2>
            <TextH3>
              "프랜차이즈산업현황보고서
              <br />
              5,044개 브랜드 기준 평균 "
            </TextH3>
          </TextWrapper>
          <Versus>VS</Versus>
          <TextWrapper>
            <TextH1>JustSell 가맹 창업비용</TextH1>
            <TextH2>
              평균 <RightB>2천만원</RightB> 소요
            </TextH2>
            <TextH3>
              "JustSell 수익보장 시스템 <br />
              기준 창업비용 참고 "
            </TextH3>
          </TextWrapper>
        </ContentWrapper>
        <ContentWrapper_1>
          <ContentTitle>
            <ContentTitleH1>창업 준비기간 비교</ContentTitleH1>
            <TitleLine />
          </ContentTitle>
          <TextWrapper>
            <TextH1>프랜차이즈 창업 준비기간</TextH1>
            <TextH2>
              평균 <LeftB>3개월</LeftB> 소요
            </TextH2>
          </TextWrapper>
          <Versus>VS</Versus>
          <TextWrapper>
            <TextH1>JustSell 창업 준비기간</TextH1>
            <TextH2>
              평균 <RightB>2일</RightB> 소요
            </TextH2>
          </TextWrapper>
        </ContentWrapper_1>
        <ContentWrapper_1>
          <ContentTitle>
            <ContentTitleH1>창업 위험요소 비교</ContentTitleH1>
            <TitleLine />
          </ContentTitle>
          <TextWrapper>
            <TextH2>
              <LeftB>재고 및 월세, 관리비 등</LeftB>
            </TextH2>
            <TextSpan>위험요소 존재</TextSpan>
          </TextWrapper>
          <Versus>VS</Versus>
          <TextWrapper>
            <TextH2>
              <RightB>위험없는</RightB>
            </TextH2>
            <TextSpan>창업</TextSpan>
          </TextWrapper>
        </ContentWrapper_1>
      </VsContainer>
    </div>
  );
}

const VsContainer = styled.div`
  width: 100%;
  display: block;
  padding-bottom: 14rem;
`;
const ContentTitleH1 = styled.h1`
  display: table;
  text-align: center;
  color: #198bbe;
  font-size: 2.1rem;
  position: relative;
  margin: 0 auto;
`;
const ContentTitle = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding-bottom: 4rem;
`;

const TitleLine = styled.div`
  background: -moz-linear-gradient(
    0% 50% 0deg,
    rgba(55, 208, 186, 1) 0%,
    rgba(0, 134, 238, 1) 100%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(55, 208, 186, 1) 0%,
    rgba(0, 134, 238, 1) 100%
  );
  background: -webkit-gradient(
    linear,
    0% 50%,
    100% 50%,
    color-stop(0, rgba(55, 208, 186, 1)),
    color-stop(1, rgba(0, 134, 238, 1))
  );
  background: -o-linear-gradient(
    0deg,
    rgba(55, 208, 186, 1) 0%,
    rgba(0, 134, 238, 1) 100%
  );
  background: -ms-linear-gradient(
    0deg,
    rgba(55, 208, 186, 1) 0%,
    rgba(0, 134, 238, 1) 100%
  );
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#37D0BA', endColorstr='#0086EE' ,GradientType=0)";
  background: linear-gradient(
    90deg,
    rgba(55, 208, 186, 1) 0%,
    rgba(0, 134, 238, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#37D0BA', endColorstr='#0086EE', GradientType=1);
  width: 100%;
  height: 1px;
  margin-top: 1.5rem;
`;

const ContentWrapper = styled.div`
  padding-top: 20rem;
  text-align: center;
  max-width: 1250px;
  margin: 0 auto;
  margin-top: 10rem;
`;

const Dot = styled.p`
  content: "";
  position: absolute;
  width: 7px;
  height: 7px;
  background-color: #198bbe;
  border-radius: 100%;
  top: 50%;
  margin-top: -3.5px;
  left: -2.5rem;
`;
const ContentWrapper_1 = styled(ContentWrapper)`
  padding-top: 0;
`;
const TextWrapper = styled.div`
  display: inline-block;
  width: 29rem;
  vertical-align: middle;
`;
const TextH1 = styled.h1`
  color: #333333;
  font-size: 1.688rem;
  font-family: noto_L;
  text-align: center;
`;

const TextH2 = styled.h2`
  font-size: 3rem;
  text-align: center;
`;

const TextH3 = styled.h3`
  font-size: 1.5rem;
  font-family: noto_L;
  text-align: center;
  margin-top: 0.75rem;
`;
const LeftB = styled.b`
  color: #24aaaa;
  font-size: 3rem;
  position: relative;
  /* text-decoration: underline;
  text-decoration-color: #24aaaa; */
`;
const RightB = styled.b`
  color: #007add;
  position: relative;
`;

const TextSpan = styled.span`
  color: #333333;
  font-size: 3rem;
  margin-top: 0.3rem;
  display: block;
`;

const Versus = styled.h2`
  display: inline-block;
  color: #198bbe;
  font-size: 3.3rem;
  vertical-align: middle;
  padding: 0 7rem;
  margin-top: -3rem;
`;
