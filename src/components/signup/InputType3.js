import React from "react";
import styled from "styled-components";
export default function InputType3({
  name,
  type,
  state,
  inputNum1,
  inputNum2,
  inputNum3,
  corpNumGroupState,
  corpNumGroupDispatch
}) {
  return (
    <Wrapper>
      <Name>{name}</Name>
      <Area>
        <Input
          type={type}
          value={corpNumGroupState.corpnum1}
          name={inputNum1}
          onChange={e => {
            corpNumGroupDispatch(e.target);
          }}
        />
        <Span>-</Span>
        <Input
          type={type}
          value={corpNumGroupState.corpnum2}
          name={inputNum2}
          onChange={e => {
            corpNumGroupDispatch(e.target);
          }}
        />
        <Span>-</Span>
        <Input
          type={type}
          value={corpNumGroupState.corpnum3}
          name={inputNum3}
          onChange={e => {
            corpNumGroupDispatch(e.target);
          }}
        />
      </Area>
    </Wrapper>
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
  width: 30%;
  padding: 10px 0px;
  border: 1px solid #b3b3b3;
  vertical-align: middle;
  border-radius: 2px;
  background-color: #fefefe;
`;
const Span = styled.span`
  padding: 0 7.5px;
`;
