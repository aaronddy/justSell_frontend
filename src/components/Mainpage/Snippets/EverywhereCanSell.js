import React from "react";
import styled from "styled-components";

export default function EverwhereCanSell() {
  return (
    <Section>
      <div class="section_7_titleArea">
        <TitleAreaH1>
          회사, 집 <B>그 밖</B> 어디에서나
        </TitleAreaH1>
        <TitleAreaH2>판매가 계속 이루어집니다.</TitleAreaH2>
      </div>
      <ContentArea>
        <ContentLi>
          <ContentP>
            <ContentImg />
          </ContentP>
          <TextWrap>
            <TextWrapH1>
              적은 시간 투자로 창업할 수 있습니다.
              <br />
              <TextWrapB>한달에 약 5시간만 투자하세요.</TextWrapB>
            </TextWrapH1>
          </TextWrap>
        </ContentLi>
        <ContentLi>
          <TextWrap>
            <TextWrapH1>
              원래 셀러였던 회원님께는
              <br />
              <TextWrapB>
                JustSell의 자체상품과 입점몰을
                <br />
                추가해드립니다.
              </TextWrapB>
            </TextWrapH1>
          </TextWrap>
          <ContentP>
            <Img2 />
          </ContentP>
        </ContentLi>
        <ContentLi>
          <ContentP>
            <Img3 />
          </ContentP>
          <TextWrap>
            <TextWrapH1>
              새로 셀러가 되실 회원님께는
              <br />
              <TextWrapB>
                상품등록과 판매, 정산관리까지
                <br />
                한번에 제공해드립니다.
              </TextWrapB>
            </TextWrapH1>
          </TextWrap>
        </ContentLi>
      </ContentArea>
    </Section>
  );
}

const Section = styled.div`
  padding-bottom: 12rem;
`;

const TitleAreaH1 = styled.h1`
  text-align: center;
  margin-top: 8rem;
  font-size: 3rem;
`;

const B = styled.b`
  font-weight: lighter;
  font-family: noto_L;
`;

const TitleAreaH2 = styled.h2`
  text-align: center;
  font-size: 1.875rem;
  letter-spacing: 6px;
  font-family: noto_L;
  margin-top: 0.3rem;
`;

const ContentArea = styled.ul`
  max-width: 1300px;
  width: 80%;
  margin: 0 auto;
  margin-top: 7rem;
`;

const ContentLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 6rem;
`;

const TextWrap = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: calc(100% - 37.5rem);
`;

const TextWrapH1 = styled.h1`
  color: #1a1a1a;
  font-size: 2rem;
  display: table;
  float: right;
  margin-right: 5rem;
  /* margin-left: 2rem; */
`;

const TextWrapB = styled.b`
  font-size: 1.3rem;
  color: #007add;
  font-weight: normal;
  font-family: noto_L;
`;

const ContentP = styled.p`
  max-width: 37.5rem;
  display: inline-block;
  vertical-align: middle;
`;

const ContentImg = styled.div`
  width: 650px;
  height: 550px;
  background-image: url("/assets/images/main_sec_7_1.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Img2 = styled(ContentImg)`
  background-image: url("/assets/images/main_sec_7_2.png");
`;
const Img3 = styled(ContentImg)`
  background-image: url("/assets/images/main_sec_7_3.png");
`;
