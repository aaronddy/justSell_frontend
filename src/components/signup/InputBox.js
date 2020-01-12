import React from "react";
import styled from "styled-components";
export default function InputBox() {
  return (
    <CheckAreaWrapper>
      <Title>
        <p>기본 정보 입력</p>
      </Title>
      <InputType1 name="아이디*" type="text" btnName="중복확인" />
      {/*  */}

      {/*  */}
      <InputType2 name="비밀번호*" type="text" />
      <CodeMore>
        6~15자 이내의 영문, 숫자, 특수문자(1개 이상)를 모두 포함한 조합
      </CodeMore>
      <InputType2 name="비밀번호 확인*" type="text" />
    </CheckAreaWrapper>
  );
}

const CheckAreaWrapper = styled.div`
  max-width: 740px;
  width: 100%;
  margin: 0 auto;
  margin-top: 96px;
`;
const Title = styled.h1`
  font-size: 18px;
  color: #1a1a1a;
`;
const CodeMore = styled.p`
  text-align: center;
  margin-top: 6px;
  font-size: 11px;
  padding-right: 54px;
`;
