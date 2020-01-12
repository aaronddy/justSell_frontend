import React from "react";
import styled from "styled-components";
export default function InputType3({
  name,
  type,
  state,
  inputNum1,
  inputNum2,
  inputNum3,
  dispatch
}) {
  return (
    <Wrapper>
      <Name>{name}</Name>
      <Area>
        <Input
          type={type}
          value={state.corpnum1}
          name={inputNum1}
          onChange={e => {
            console.log("state: ", state.corpnum1);
            console.log("inputNum1 ", inputNum1);
            dispatch({ action: e.target });
          }}
        />
        <Span>-</Span>
        <Input
          type={type}
          value={state.corpnum2}
          name={inputNum2}
          onChange={e => {
            dispatch({ action: e.target });
          }}
        />
        <Span>-</Span>
        <Input
          type={type}
          value={state.corpnum3}
          name={inputNum3}
          onChange={e => {
            dispatch({ action: e.target });
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
`;
const Span = styled.span`
  padding: 0 7.5px;
`;
