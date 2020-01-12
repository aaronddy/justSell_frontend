import React, { useEffect } from "react";
import styled from "styled-components";
import SignButton from "../shared/SignButton";
export default function Complete() {
  useEffect(() => {
    window.scrollTo(0, 100);
  }, []);
  return (
    <CompleteWrapper>
      <H1>가입완료</H1>
      <P>가입을 축하드립니다</P>
      <SignButton name={"메인으로"} last={true} />
    </CompleteWrapper>
  );
}
const CompleteWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 48px;
`;
const H1 = styled.h1`
  font-size: 32px;
`;
const P = styled.p`
  padding-top: 8px;
  color: #249ced;
`;
