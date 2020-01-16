import React from "react";
import styled from "styled-components";
import CompareItems from "../CompareItems";

export default function Comparison() {
  return (
    <div>
      <MainSection>
        <TitleArea>
          <Title>POINT 3</Title>
        </TitleArea>
        <SubTitleArea>
          <SubH1>
            JustSell <SubB>창업 비교분석</SubB>
          </SubH1>
        </SubTitleArea>
        <VsArea>
          <VsAreaTitle>
            <VsTitle>
              <TitleLeftImg />
              <TitleLeftSpan>오프라인 창업</TitleLeftSpan>
            </VsTitle>
            <VsImg />
            <VsTitle>
              <TitleRightImg />
              <TitleRightSpan>JustSell 창업</TitleRightSpan>
            </VsTitle>
          </VsAreaTitle>
          <CompareItems />
          <MiddleBanner>
            <BannerLine>
              <BeforeP />
              <BannerP>
                <BannerImg />
              </BannerP>
              <AfterP />
            </BannerLine>
            <BannerSpan>
              적은 금액으로 효율적인 창업을 원하신다면, JustSell을 선택하세요.
            </BannerSpan>
          </MiddleBanner>
        </VsArea>
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

const VsArea = styled.div`
  width: 100%;
  background-color: #fff;
  margin-top: 15rem;
  position: relative;
  box-shadow: 10px 5px 16px rgba(0, 63, 154, 0.1);
`;

const VsAreaTitle = styled.div`
  position: absolute;
  top: 0;
  text-align: center;
  /* width: 70rem; */
  left: 50%;
  margin-left: -35rem;
  top: -9.5rem;
`;

const VsTitle = styled.div`
  display: inline-block;
  vertical-align: top;
`;

const TitleLeftSpan = styled.span`
  color: #24aaaa;
  font-size: 3.56rem;
  font-family: noto_B;
  text-align: center;
  display: block;
  margin-top: 1rem;
`;
const TitleRightSpan = styled(TitleLeftSpan)`
  color: #007add;
`;
const TitleLeftImg = styled.div`
  background-image: url("/assets/images/vs_top_icon_1.png");
  background-repeat: no-repeat;
  background-size: 200px 200px;
  width: 200px;
  height: 200px;
  display: block;
  margin: 0 auto;
`;

const TitleRightImg = styled(TitleLeftImg)`
  background-image: url("/assets/images/vs_top_icon_2.png");
`;
const VsImg = styled.div`
  background-image: url("/assets/images/vs_img.png");
  background-repeat: no-repeat;
  background-size: 14rem 8rem;
  display: inline-block;
  width: 14rem;
  height: 8rem;
  vertical-align: bottom;
  margin: 0 7rem;
`;

const MiddleBanner = styled.div`
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
  position: relative;
  box-shadow: 0px 8px 10px rgba(0, 63, 154, 0.1);
`;

const BannerLine = styled.div`
  padding: 5rem 0 2rem 0;
  position: relative;
`;

const BannerSpan = styled.span`
  color: #fff;
  font-size: 2.2rem;
  text-align: center;
  display: block;
  padding-bottom: 5rem;
`;
const BannerP = styled.p`
  width: 3.25rem;
  display: block;
  margin: 0 auto;
  position: relative;
`;
const BeforeP = styled.div`
  content: "";
  position: absolute;
  width: 17rem;
  height: 1px;
  background: #fff;
  left: 39rem;
  top: 70%;
  margin-top: -0.5px;
`;
const AfterP = styled.div`
  content: "";
  position: absolute;
  width: 17rem;
  height: 1px;
  background: #fff;
  right: 39rem;
  top: 70%;
  margin-top: -0.5px;
`;

const BannerImg = styled.div`
  /* width: 3.25rem; */
  display: block;
  margin: 0 auto;
  position: relative;
  background-image: url("/assets/images/main_light_icon.png");
  background-repeat: no-repeat;
  background-size: 50px 50px;
  width: 50px;
  height: 50px;
`;
