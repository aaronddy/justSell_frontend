import React from "react";
import styled from "styled-components";

export default function ServiceOfAssurance() {
  return (
    <div>
      <Section>
        <Content>
          <ContentText>
            <TextH1>
              JustSell
              <br />
              <ListB>확실 보장형</ListB>
              <br />
              서비스란?
            </TextH1>
          </ContentText>
          <ContentList>
            <List>
              <ListImg>1</ListImg>
              <ListH1>
                <ListB>수익률</ListB>을 보장해 드립니다
              </ListH1>
              <ListH2>
                JustSell은 보장한 수익률에 도달하지 못할 시 매출을 보장하는
                <br />
                보장형 상품을 가지고 있습니다.
              </ListH2>
            </List>
            <List>
              <ListImg>2</ListImg>
              <ListH1>
                <ListB>고객유입</ListB>을 보장해 드립니다
              </ListH1>
              <ListH2>
                JustSell은 시즌/고객/상품별 데이터 분석을 적용해 수익성있는
                상품을
                <br />
                선별하고 상품별로 적합한 마켓에 상품을 등록해 수익성을
                보장합니다.
              </ListH2>
            </List>
            <List>
              <ListImg>3</ListImg>
              <ListH1>
                <ListB>운영</ListB>을 보장해 드립니다
              </ListH1>
              <ListH2>
                JustSell은 상품을 등록/관리할 수 있는 시스템을 가지고 있는
                <br />
                커머스테크 플랫폼으로, 500만개의 상품 데이터를 유통하고
                있습니다.
              </ListH2>
            </List>
          </ContentList>
        </Content>
      </Section>
      <MiddleBanner>
        <BannerLine>
          <BannerP>
            <BannerImg />
          </BannerP>
        </BannerLine>
        <BannerSpan>
          상품등록, 재고 관리는 이제 당연합니다.
          <br />
          JustSell은 셀러의 편리함을 넘어 ‘편안함 / 인공지능’ 을 제공합니다.
        </BannerSpan>
      </MiddleBanner>
    </div>
  );
}

const Section = styled.div`
  background-image: url("/assets/images/sec_8_back.png");
  background-repeat: no-repeat;
  background-size: 70% auto;
  background-position: left top;
  padding-bottom: 23rem;
`;
const Content = styled.div`
  max-width: 1300px;
  width: 80%;
  margin: 0 auto;
  padding-top: 11rem;
`;
const ContentText = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-top: 3rem;
  margin-left: 6rem;
  margin-right: 5rem;
`;

const TextH1 = styled.h1`
  color: #fff;
  font-size: 3.5rem;
`;

const ContentList = styled.ul`
  display: inline-block;
`;

const List = styled.li`
  background-color: #fff;
  border-radius: 10px;
  margin-top: 3.5rem;
  box-shadow: 0px 8px 10px rgba(0, 63, 154, 0.1);
  position: relative;
  list-style: none;
`;
const ListH1 = styled.h1`
  padding-top: 2rem;
  font-size: 1.5rem;
  padding-left: 8rem;
`;

const ListH2 = styled.h2`
  color: #333333;
  font-size: 1.5rem;
  font-family: noto_L;
  padding-bottom: 2rem;
  padding-left: 8rem;
  margin-top: 0.3rem;
  padding-right: 4rem;
`;

const ListB = styled.b`
  color: #003f9a;
  font-weight: normal;
  font-family: noto_B;
`;

const ListImg = styled.div`
  content: "1";
  position: absolute;
  left: 0;
  background-image: url("/assets/images/sec_8_title.png");
  background-repeat: no-repeat;
  height: 10rem;
  width: 10rem;
  background-size: 7rem;
  top: -1.5rem;
  left: -1.2rem;
  color: #fff;
  line-height: 6.5rem;
  padding-left: 2rem;
  font-family: noto_B;
  font-size: 5rem;
`;

const MiddleBanner = styled.div`
  background: -moz-linear-gradient(
    0% 50% 0deg,
    rgba(0, 134, 238, 1) 0%,
    rgba(0, 63, 154, 1) 100%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(0, 134, 238, 1) 0%,
    rgba(0, 63, 154, 1) 100%
  );
  background: -webkit-gradient(
    linear,
    0% 50%,
    100% 50%,
    color-stop(0, rgba(0, 134, 238, 1)),
    color-stop(1, rgba(0, 63, 154, 1))
  );
  background: -o-linear-gradient(
    0deg,
    rgba(0, 134, 238, 1) 0%,
    rgba(0, 63, 154, 1) 100%
  );
  background: -ms-linear-gradient(
    0deg,
    rgba(0, 134, 238, 1) 0%,
    rgba(0, 63, 154, 1) 100%
  );
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#0086EE', endColorstr='#003F9A' ,GradientType=0)";
  background: linear-gradient(
    90deg,
    rgba(0, 134, 238, 1) 0%,
    rgba(0, 63, 154, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0086EE', endColorstr='#003F9A', GradientType=1);
  width: 100%;
  position: relative;
  box-shadow: 0px 8px 10px rgba(0, 63, 154, 0.1);
`;

const BannerLine = styled.div`
  padding-top: 5rem;
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

const BannerImg = styled.div`
  display: block;
  margin: 0 auto 3rem auto;
  position: relative;
  background-image: url("/assets/images/main_light_icon.png");
  background-repeat: no-repeat;
  background-size: 70px 70px;
  width: 70px;
  height: 70px;
`;
