import React, { useState } from "react";
import styled, { css } from "styled-components";
let fileInput = "";
let companyName = "";
export default function InputType1({
  name,
  type,
  btnName,
  state,
  inputName,
  dispatch
}) {
  const [file, setFile] = useState("");
  //공통 Input
  const setImage = e => {
    setFile(e.target.files[0]);
  };
  let inputVar = (
    <Input
      type={type}
      value={state}
      name={inputName}
      onChange={e => {
        dispatch({ action: e.target });
      }}
    />
  );
  if (btnName === "인증하기")
    fileInput = (
      <Event>
        {inputVar}
        <Button>{btnName}</Button>
      </Event>
    );
  if (btnName === "중복확인")
    fileInput = (
      <Event>
        {inputVar}
        <Button>{btnName}</Button>
      </Event>
    );

  if (btnName === "첨부하기") {
    fileInput = (
      <Event>
        <Label>
          <Input type={type} name={inputName} onChange={setImage} />
          <FileName>{file && file.name}</FileName>
          <Button>{btnName}</Button>
        </Label>
      </Event>
    );
  }
  return (
    <Wrapper>
      <Title>{name}</Title>
      <EventWrapper>{fileInput}</EventWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  margin-top: 40px;
`;
const Title = styled.label`
  color: #4d4d4d;
  font-size: 14px;
  width: 30%;
  margin: auto 0;
`;
const EventWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Event = styled.div`
  font-size: 11px;
  display: flex;
  justify-content: space-between;
`;
const Input = styled.input`
  display: none;
  ${props =>
    props.type === "text" &&
    css`
      display: inline-block;
      width: 80%;
      padding: 12px 4px;
      border: 1px solid #b3b3b3;
      border-radius: 2px;
    `}
`;
const Label = styled.label`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const FileName = styled.div`
  width: 80%;
  padding: 12px 4px;
  border: 1px solid #b3b3b3;
  border-radius: 2px;
`;
const Button = styled.div`
  border: 1px solid #b3b3b3;
  border-radius: 2px;
  padding: 12px 16px 9px;
  background-color: #e6e6e6;
`;
