import React, { useEffect } from "react";
import styled from "styled-components";
import InputType1 from "./InputType1";
import InputType2 from "./InputType2";
import InputType4 from "./InputType4";
import SignButton from "../shared/SignButton";

export default function SignUpInfo({ handleStep, infoState, infoDispatch }) {
  useEffect(() => {
    window.scrollTo(0, 100);
  }, []);
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
          state={infoState.password}
          inputName={"password"}
          dispatch={infoDispatch}
        />
        <CodeMore>
          6~15자 이내의 영문, 숫자, 특수문자(1개 이상)를 모두 포함한 조합
        </CodeMore>
        <InputType2
          name="비밀번호 확인*"
          type="password"
          state={infoState.password_check}
          inputName={"password_check"}
          dispatch={infoDispatch}
        />
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
          state={infoState.manager_email}
          state2={infoState.manager_email2}
          inputName="manager_email"
          inputName2="manager_email2"
          infoDispatch={infoDispatch}
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
  text-align: center;
  margin-top: 6px;
  font-size: 11px;
  padding-right: 54px;
`;
