import React from "react";
import styled from "styled-components";

export default function SignUpHeader({ stepStatus }) {
  let imageSrc = "";
  if (stepStatus == 0) imageSrc = "/assets/images/member/sign_in_top_steps.png";
  if (stepStatus == 1)
    imageSrc = "/assets/images/member/sign_in_top_steps_2.png";
  if (stepStatus == 2)
    imageSrc = "/assets/images/member/sign_in_top_steps_3.png";
  return (
    <>
      <HeaderWrapper>
        <TitleLogoWrap>
          <TitleLogoImg src="/assets/images/ui/color_logo.png" alt="" />
        </TitleLogoWrap>
        <TitleH1>판매자 회원가입</TitleH1>
      </HeaderWrapper>
      <SignUpStepWrap>
        <p>
          <StepImage src={imageSrc} alt="step" />
          {/* <img
                class="sign_in_step_m"
                src="/assets/images/member/sign_in_top_steps_m.png"
                alt="step"
              /> */}
        </p>
      </SignUpStepWrap>
    </>
  );
}

const HeaderWrapper = styled.div`
  padding-top: 4rem;
`;
const TitleLogoWrap = styled.p`
  width: 10rem;
  height: 4rem;
  display: block;
  margin: 0 auto;
`;
const TitleLogoImg = styled.img`
  width: 100%;
  cursor: pointer;
`;
const TitleH1 = styled.h1`
  color: #007add;
  text-align: center;
  font-size: 1rem;
`;
const SignUpStepWrap = styled.div`
  width: 781px;
  margin: 0 auto;
  margin-top: 4rem;
`;
const StepImage = styled.img`
  width: 100%;
`;
