import React from "react";
import styled from "styled-components";
import Sec_6_contents from "../../components/Mainpage/Sec_6_contents";

export default function WhyChooseUs() {
  return (
    <Section>
      <div class="section_6_titleArea">
        <H1>왜 JustSell을 선택했을까요?</H1>
        <H2>
          JustSell은 <Yellow>적은 것</Yellow>으로
          <Yellow> 많은 것</Yellow>을 만들어냅니다.
        </H2>
      </div>
      {/* <SecSixBefore /> */}
      <Sec_6_contents />
      {/* <SecSixAfter /> */}
    </Section>
  );
}

const Section = styled.div`
  background-image: url("/assets/images/main_section_6_back.png");
  background-repeat: no-repeat;
  width: 100%;
  background-size: cover;
  padding-bottom: 4rem;
`;
const H1 = styled.h1`
  color: #fff;
  font-size: 3.5rem;
  text-align: center;
  padding: 8rem 0 1rem 0;
`;

const H2 = styled.h2`
  text-align: center;
  font-size: 1.75rem;
  color: #fff;
  vertical-align: middle;
  font-family: noto_DL;
`;
const Yellow = styled.b`
  vertical-align: bottom;
  color: #ffe112;
  font-family: noto_DL;
`;

// const SecSixBefore = styled.div`
//   content: "";
//   position: absolute;
//   width: 100%;
//   height: 1px;
//   background: #fff;
//   top: 50%;
//   margin-top: -0.5px;
// `;

// const SecSixAfter = styled.div`
//   content: "";
//   position: absolute;
//   background: #fff;
//   width: 1px;
//   height: 76%;
//   top: 12%;
//   left: 50%;
//   margin-left: -0.5px;
// `;
