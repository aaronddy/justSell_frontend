import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import InputType1 from "./InputType1";
import InputType2 from "./InputType2";
import InputType4 from "./InputType4";
import SignButton from "../shared/SignButton";

export default function SignUpInfo({
  handleStep,
  infoState,
  managerEmailGroupState,
  managerEmailGroupDispatch,
  infoDispatch
}) {
  useEffect(() => {
    window.scrollTo(0, 100);
  }, []);
  const { password, password_check } = infoState;
  return (
    <div>
      {/* 가입 여부 확인 */}
      <CheckAreaWrapper>
        <Title>
          <p>기본 정보 입력</p>
        </Title>
        <InputType1
          name="아이디(이메일)*"
          type="text"
          btnName="중복확인"
          state={infoState.user_email}
          inputName={"user_email"}
          dispatch={infoDispatch}
        />
        <InputType2
          name="비밀번호*"
          type="password"
          state={password}
          inputName={"password"}
          dispatch={infoDispatch}
        />
        <CodeMore>
          6~15자 이내의 영문, 숫자, 특수문자(1개 이상)를 모두 포함한 조합
        </CodeMore>
        <InputType2
          name="비밀번호 확인*"
          type="password"
          state={password_check}
          inputName={"password_check"}
          dispatch={infoDispatch}
        />
        {password &&
          password.length === password_check.length &&
          (password !== password_check ? (
            <CodeMore color="#F42C26">비밀번호가 일치하지 않습니다.</CodeMore>
          ) : (
            <CodeMore color="#3EC84E">비밀번호가 일치합니다.</CodeMore>
          ))}
      </CheckAreaWrapper>

      {/* 사업자 정보 입력 */}
      <CheckAreaWrapper>
        <Title>
          <p>사업자 정보 입력</p>
        </Title>
        <InputType2
          name="대표자명*"
          type="text"
          state={infoState.representative_name}
          inputName={"representative_name"}
          dispatch={infoDispatch}
        />
        <InputType1 name="사업자등록증 첨부*" type="file" btnName="첨부하기" />
        <InputType2
          name="통신판매업신고번호*"
          type="text"
          state={infoState.online_distributor_certification_text}
          inputName={"online_distributor_certification_text"}
          dispatch={infoDispatch}
        />
        <InputType1
          name="통신판매업신고증 첨부*"
          type="file"
          btnName="첨부하기"
        />
      </CheckAreaWrapper>

      {/* 연락처 정보 입력 */}
      <CheckAreaWrapper>
        <Title>
          <p>연락처 정보 입력</p>
        </Title>
        <InputType2
          name="담당자명*"
          type="text"
          state={infoState.manager_name}
          inputName={"manager_name"}
          dispatch={infoDispatch}
        />
        <InputType2
          name="담당자 연락처*"
          type="text"
          state={infoState.manager_phone_number}
          inputName={"manager_phone_number"}
          dispatch={infoDispatch}
        />
        {/* 여기빠짐 */}
        <InputType2
          name="사업장 연락처*"
          type="text"
          state={infoState.company_phone_number}
          inputName={"company_phone_number"}
          dispatch={infoDispatch}
        />
        <InputType4
          name="담당자 이메일*"
          type="text"
          state1={managerEmailGroupState.manager_email1}
          state2={managerEmailGroupState.manager_email2}
          inputName1="manager_email1"
          inputName2="manager_email2"
          managerEmailGroupDispatch={managerEmailGroupDispatch}
        />
      </CheckAreaWrapper>
      <SignButton name={"다음단계"} handleStep={handleStep} nextPage={2} />
    </div>
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
  padding-left: 23.5%;
  margin-top: 6px;
  font-size: 11px;
  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;
