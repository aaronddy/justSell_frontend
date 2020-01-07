import React, { useState } from "react";
import styled from "styled-components";

const ConsultingInput = () => {
  const [userName, setUserName] = useState("");
  const [phoneNum, setPhoneNum] = useState({ one: "", two: "", three: "" });

  const handleName = e => {
    setUserName(e.target.value);
    console.log(userName);
  };

  const handleNumber = e => {
    const { name } = e.target;

    const newNum = {
      ...phoneNum,
      [name]: e.target.value
    };
    setPhoneNum(newNum);
    console.log(phoneNum);
  };

  return (
    <LieBox>
      <Div>
        <Name>
          <TextBox>
            <Text>성함</Text>
          </TextBox>
          <NameInput onChange={handleName} />
        </Name>
        <Name>
          <TextBox>
            <Text>연락처</Text>
          </TextBox>
          <TextBox>
            <PhoneInput
              name="one"
              value={phoneNum.one}
              onChange={handleNumber}
            />
            -
            <PhoneInput
              name="two"
              value={phoneNum.two}
              onChange={handleNumber}
            />
            -
            <PhoneInput
              name="three"
              value={phoneNum.three}
              onChange={handleNumber}
            />
          </TextBox>
        </Name>
      </Div>
    </LieBox>
  );
};
export default ConsultingInput;

const LieBox = styled.div`
  height: 128px;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const Div = styled.div`
  height: 128px;
  width: 500px;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
`;
const Name = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  /* border: 1px solid black; */
`;
const NameInput = styled.input`
  height: 45px;
  width: 376px;
  border-radius: 5px;
  border: 1px solid #b3b3b3;
  font-size: 22px;
  outline: none;
`;
const PhoneInput = styled.input`
  height: 45px;
  width: 119px;
  border-radius: 5px;
  border: 1px solid #b3b3b3;
  font-size: 22px;
  outline: none;
`;
const TextBox = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  font-size: 20px;
  letter-spacing: -2px;
`;
