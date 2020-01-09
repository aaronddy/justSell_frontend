import React from "react";
import styled from "styled-components";

export default function Sec_6_contents() {
  return (
    <>
      <ContentArea>
        <ContentLi>
          <ContentTitle>
            Point <DivB>1</DivB>
          </ContentTitle>
          <H1>
            <H1b>실패할 수 없는</H1b>
            <H1b>확률</H1b>로<br />
            <H1b>성공적인</H1b> <H1b>창업</H1b>을 할 수 있습니다.
          </H1>
        </ContentLi>
        <ContentLi>
          <ContentTitle>
            Point <DivB>2</DivB>
          </ContentTitle>
          <H1>
            <H1b>적은</H1b> <H1b>시간</H1b>만 투자해도
            <br />
            <H1b>효율적인</H1b> <H1b>창업</H1b>을 할 수 있습니다.
          </H1>
        </ContentLi>
        <ContentLi>
          <ContentTitle>
            Point <DivB>3</DivB>
          </ContentTitle>
          <H1>
            <H1b>적은</H1b> <H1b>자본</H1b>만으로
            <br />
            <H1b>많은</H1b> <H1b>매출</H1b>을 올릴 수 있습니다.
          </H1>
        </ContentLi>
        <ContentLi>
          <ContentTitle>
            Point <DivB>4</DivB>
          </ContentTitle>
          <H1>
            <H1b>재고 부담</H1b>
            <H1b class="section_6_textColor">전혀 없이</H1b>
            <br />
            <H1b class="section_6_textColor">많은</H1b> <H1b>판매량</H1b>을 올릴
            수 있습니다.
          </H1>
        </ContentLi>
      </ContentArea>
    </>
  );
}

const ContentArea = styled.ul`
  max-width: 1300px;
  width: 80%;
  margin: 0 auto;
  padding-top: 9rem;
  position: relative;
`;

const ContentLi = styled.li`
  display: inline-block;
  width: 49%;
  padding: 8rem 0;
`;

const ContentTitle = styled.div`
  width: 11rem;
  background-color: #fff;
  height: 3.5rem;
  border-radius: 2rem;
  text-align: center;
  line-height: 3.45rem;
  font-size: 1.85rem;
  color: #3fa8f4;
  margin: 0 auto;
`;
const H1 = styled.h1`
  font-size: 1.875rem;
  text-align: center;
  color: #fff;
  margin-top: 1.5rem;
  font-family: noto_L;
`;
const H1b = styled.b`
  font-weight: normal;
  vertical-align: bottom;
  color: #ffe112;
  font-family: noto_DL;
`;
const DivB = styled.b`
  font-family: noto_DL;
  color: #007add;
`;
