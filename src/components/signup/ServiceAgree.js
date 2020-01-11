import React, { useMemo } from "react";
import styled from "styled-components";

export default function ServiceAgree({ check1, check2, dispatch }) {
  return (
    <>
      {/* <!--약관_1--> */}
      <AgreeArea>
        <Title>서비스 이용약관(필수)</Title>
        <AgreeTextWrapper>
          <AgreeTextH2>
            제 1 장 총 칙<br />
            <br />
            제 1 조 (목적)
            <br />
            이 약관은 저스트셀(이하 "사이트"라 합니다)에서 제공하는
            인터넷서비스(이하 "서비스"라 합니다)의 이용 조건 및 절차에 관한
            기본적인 사항을 규정함을 목적으로 합니다.
            <br />
            <br />
            제 2 조 (약관의 효력 및 변경)
            <br />
            ① 이 약관은 서비스 화면이나 기타의 방법으로 이용고객에게
            공지함으로써 효력을 발생합니다.
            <br />
            ② 사이트는 이 약관의 내용을 변경할 수 있으며, 변경된 약관은 제1항과
            같은 방법으로 공지 또는 통지함으로써 효력을 발생합니다.
            <br />
            <br />
            제 3 조 (용어의 정의)
            <br />
            이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
            <br />
            ① 회원 : 사이트와 서비스 이용계약을 체결하거나 이용자 아이디(ID)를
            부여받은 개인 또는 단체를 말합니다.
            <br />
            ② 신청자 : 회원가입을 신청하는 개인 또는 단체를 말합니다.
            <br />
            ③ 아이디(ID) : 회원의 식별과 서비스 이용을 위하여 회원이 정하고
            사이트가 승인하는 문자와 숫자의 조합을 말합니다.
            <br />
            ④ 비밀번호 : 회원이 부여 받은 아이디(ID)와 일치된 회원임을 확인하고,
            회원 자신의 비밀을 보호하기 위하여 회원이 정한 문자와 숫자의 조합을
            말합니다.
            <br />
            ⑤ 해지 : 사이트 또는 회원이 서비스 이용계약을 취소하는 것을
            말합니다.
            <br />
          </AgreeTextH2>
        </AgreeTextWrapper>
        <AgreeInputArea>
          <AgreeInput
            type="checkbox"
            name="check1"
            checked={check1}
            onChange={e => {
              dispatch({ action: e.target });
            }}
          />
          <AgreeInputAreaLabel></AgreeInputAreaLabel>
          <InputSubText>동의합니다.</InputSubText>
        </AgreeInputArea>
      </AgreeArea>
      {/* <!--약관_2--> */}
      <AgreeArea>
        <Title>개인정보 수집 및 이용 (필수)</Title>
        <AgreeTextWrapper>
          <AgreeTextH2>
            제 1 장 총 칙<br />
            <br />
            제 1 조 (목적)
            <br />
            이 약관은 저스트셀(이하 "사이트"라 합니다)에서 제공하는
            인터넷서비스(이하 "서비스"라 합니다)의 이용 조건 및 절차에 관한
            기본적인 사항을 규정함을 목적으로 합니다.
            <br />
            <br />
            제 2 조 (약관의 효력 및 변경)
            <br />
            ① 이 약관은 서비스 화면이나 기타의 방법으로 이용고객에게
            공지함으로써 효력을 발생합니다.
            <br />
            ② 사이트는 이 약관의 내용을 변경할 수 있으며, 변경된 약관은 제1항과
            같은 방법으로 공지 또는 통지함으로써 효력을 발생합니다.
            <br />
            <br />
            제 3 조 (용어의 정의)
            <br />
            이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
            <br />
            ① 회원 : 사이트와 서비스 이용계약을 체결하거나 이용자 아이디(ID)를
            부여받은 개인 또는 단체를 말합니다.
            <br />
            ② 신청자 : 회원가입을 신청하는 개인 또는 단체를 말합니다.
            <br />
            ③ 아이디(ID) : 회원의 식별과 서비스 이용을 위하여 회원이 정하고
            사이트가 승인하는 문자와 숫자의 조합을 말합니다.
            <br />
            ④ 비밀번호 : 회원이 부여 받은 아이디(ID)와 일치된 회원임을 확인하고,
            회원 자신의 비밀을 보호하기 위하여 회원이 정한 문자와 숫자의 조합을
            말합니다.
            <br />
            ⑤ 해지 : 사이트 또는 회원이 서비스 이용계약을 취소하는 것을
            말합니다.
            <br />
          </AgreeTextH2>
        </AgreeTextWrapper>
        <AgreeInputArea>
          <AgreeInput
            type="checkbox"
            name="check2"
            checked={check2}
            onChange={e => {
              dispatch({ action: e.target });
            }}
          />
          <AgreeInputAreaLabel></AgreeInputAreaLabel>
          <InputSubText>동의합니다.</InputSubText>
        </AgreeInputArea>
      </AgreeArea>
    </>
  );
}

const AgreeArea = styled.div`
  padding-top: 50px;
  width: 74%;
  margin: 20px auto;
`;
const Title = styled.span`
  font-size: 16px;
  color: #1a1a1a;
  font-family: noto_M;
`;
const AgreeTextWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  border: 1px solid #e0e0e0;
  overflow-y: auto;
  height: 15rem;
  margin-top: 1rem;
`;
const AgreeTextH2 = styled.h2`
  font-size: 0.875rem;
  color: #b3b3b3;
  padding: 1rem 2rem 1rem 2rem;
  font-family: noto_R;
  font-weight: normal;
`;
const AgreeInputArea = styled.div`
  text-align: right;
  margin-top: 1rem;
`;
const AgreeInputAreaLabel = styled.label`
  font-size: 1rem;
  color: #333333;
`;
const InputSubText = styled.h1`
  display: inline-block;
  margin-left: 0.3rem;
  color: #333333;
  font-size: 14px;
`;

const AgreeInput = styled.input`
  vertical-align: middle;
`;
