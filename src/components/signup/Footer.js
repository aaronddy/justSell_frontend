import React from "react";
import styled from "styled-components";
export default function Footer() {
  return (
    <Wrapper>
      <H1>저스트셀 / support@equality.co.kr / T. 1522-1522</H1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 25rem;
  border-top: 1px solid #bbbbbb;
  margin: 0 auto;
`;
const H1 = styled.h1`
  font-size: 0.76rem;
  color: #888888;
  text-align: center;
  display: block;
  padding: 1.5rem 0 4rem 0;
  font-family: noto_L;
`;
