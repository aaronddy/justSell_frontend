import React, { useState, useMemo } from "react";
import styled, { css } from "styled-components";
import InputType1 from "../../components/signup/InputType1";
import InputType2 from "../../components/signup/InputType2";
import InputType3 from "../../components/signup/InputType3";
export default function SignUpCheck({
  state,
  dispatch,
  corpNumGroupState,
  corpNumGroupDispatch,
  getInvitationCodeAuthed
}) {
  const [isInvitationCodeAuthed, setisInvitationCodeAuthed] = useState(false);
  return (
    <>
      {/* 가입 여부 확인 */}
      <CheckAreaWrapper>
        <Title>
          <p>가입 여부 확인 (사업자 등록번호 인증)</p>
        </Title>
        <InputType1
          name="가입코드입력"
          type="text"
          btnName="인증하기"
          state={state.signcode}
          inputName={"signcode"}
          dispatch={dispatch}
          getInvitationCodeAuthed={getInvitationCodeAuthed}
          setisInvitationCodeAuthed={setisInvitationCodeAuthed}
        />
        {!isInvitationCodeAuthed ? (
          <CodeMore>
            가입상담이 완료되신 분만 회원가입이 가능합니다.
            <SingInCodeAreaMoreLink href="/">
              가입상담 바로가기
            </SingInCodeAreaMoreLink>
          </CodeMore>
        ) : (
          <CodeMore auth={true}>가입코드가 인증되었습니다.</CodeMore>
        )}

        {/*  */}
        <InputType2
          name="상호 / 법인명"
          type="text"
          state={state.corpname}
          inputName={"corpname"}
          dispatch={dispatch}
        />

        {/*  */}
        <InputType3
          name="사업자등록번호"
          type="text"
          corpNumGroupState={corpNumGroupState}
          inputNum1={"corpnum1"}
          inputNum2={"corpnum2"}
          inputNum3={"corpnum3"}
          corpNumGroupDispatch={corpNumGroupDispatch}
        />
      </CheckAreaWrapper>
    </>
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
  ${props =>
    props.auth &&
    css`
      color: #01c75a;
      padding-right: 260px;
    `}
`;
const SingInCodeAreaMoreLink = styled.a`
  font-size: 11px;
  margin-left: 12px;
  display: inline-block;
  color: #007add;
  text-decoration: underline;
`;
