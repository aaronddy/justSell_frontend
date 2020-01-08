import React from "react";
import styled from "styled-components";

export default function InputType4({
  name,
  type,
  state,
  state2,
  inputName,
  inputName2,
  infoDispatch
}) {
  return (
    <>
      <Wrapper>
        <Name>{name}</Name>
        <Area>
          <Input
            type={type}
            name={inputName}
            value={state}
            onChange={e => {
              infoDispatch({ action: e.target });
            }}
          />
          <Span>@</Span>
          {/* <SelectWrapper> */}
          <Select
            name={inputName2}
            value={state2}
            onChange={e => {
              infoDispatch({ action: e.target });
            }}
          >
            <option defaultValue="DEFAULT">이메일을 선택</option>
            <option value="gmail.com">gmail.com</option>
            <option value="naver.com">naver.com</option>
            <option value="hanmail.net">hanmail.net</option>
            <option value="daum.net">daum.net</option>
            <option value="nate.com">nate.com</option>
            <option value="hotmail.com">hotmail.com</option>
            <option value="icloud.com">icloud.com</option>
          </Select>
          {/* </SelectWrapper> */}
        </Area>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 40px;
`;
const Name = styled.label`
  color: #4d4d4d;
  font-size: 14px;
  width: 30%;
  margin: auto 0;
`;
const Area = styled.div`
  width: 100%;
`;
const Input = styled.input`
  display: inline-block;
  width: 50%;
  padding: 10px 0px;
  border: 1px solid #b3b3b3;
  vertical-align: middle;
  border-radius: 2px;
`;
const Span = styled.span`
  padding: 0 7.5px;
`;
const SelectWrapper = styled.div`
  display: inline-block;
  width: 200px;
`;
const Select = styled.select`
  border: 1px solid #b3b3b3;
  width: 44.3%;
  height: 100%;
  border-radius: 5px;
  outline: none;
  background-color: #fafafa;
  /* display: none; */
`;
