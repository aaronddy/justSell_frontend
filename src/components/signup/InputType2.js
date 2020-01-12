import React from "react";
import styled from "styled-components";
export default function InputType2({ name, type, state, inputName, dispatch }) {
  return (
    <Wrapper>
      <Name>{name}</Name>
      <Area>
        <Event>
          <Input
            type={type}
            value={state}
            name={inputName}
            onChange={e => {
              dispatch({ action: e.target });
            }}
          />
        </Event>
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
const Event = styled.div`
  width: 100%;
`;
const Input = styled.input`
  width: 99.5%;
  padding: 10px 0px;
  border: 1px solid #b3b3b3;
  vertical-align: middle;
  border-radius: 2px;
`;
