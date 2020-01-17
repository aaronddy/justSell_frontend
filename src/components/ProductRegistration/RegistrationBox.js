import React, { useState } from "react";
import styled, { css } from "styled-components";
import BasicInfoInputBox from "../ProductRegistration/BasicInfoInputBox";
import SalesInfoBox from "../ProductRegistration/SalesInfoBox";
export default function RegistrationBox({ name, status, children }) {
  const [modal, setModal] = useState(true);
  const changeModal = () => {
    setModal(!modal);
  };
  return (
    <BasicInfo>
      <InfoWrap modal={modal}>
        <Name>
          <P>{name}</P>
        </Name>
        {!modal && (
          <InfoStatus>
            <p>{status}</p>
          </InfoStatus>
        )}
        <ButtonWrapper>
          <Button onClick={changeModal} modal={modal}></Button>
        </ButtonWrapper>
      </InfoWrap>
      {/* children들 */}
      {modal && children}
    </BasicInfo>
  );
}
const BasicInfo = styled.div`
  width: 100%;
  margin: 30px auto;
  max-width: 1400px;
  min-height: 78px;
  border: 1px solid #c3c3c3;
  border-radius: 4px;
`;
const InfoWrap = styled.div`
  padding: 24px 0 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  ${props =>
    props.modal &&
    css`
      padding: 24px 0 0;
    `}
`;
const Name = styled.div`
  width: 20%;
  margin: auto 0;
`;
const P = styled.p`
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  padding-left: 32px;
`;
const InfoStatus = styled.div`
  margin-right: 64px;
  width: 60%;
  font-size: 14px;
  /* margin: auto 0; */
  padding-top: 4px;
  color: #007acc;
`;
const ButtonWrapper = styled.div`
  padding-right: 3%;
`;
const Button = styled.button`
  display: block;
  background-image: url("/assets/images/ui/header_btn.png");
  background-position: -33px 0;
  background-size: 65px 33px;
  background-repeat: no-repeat;
  width: 33px;
  height: 34px;
  ${props =>
    props.modal &&
    css`
      background-position: 0px 0;
    `}
`;
