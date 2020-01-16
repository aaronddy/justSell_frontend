import React, { useState, useReducer } from "react";
import styled from "styled-components";
import Header from "../components/signup/Header";
import Footer from "../components/signup/Footer";
import Agreement from "../components/signup/Agreement";
import SignUpInfo from "../components/signup/SignUpInfo";
import Complete from "../components/signup/Complete";

export default function Signup() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [infoState, infoDispatch] = useReducer(infoReducer, infoInitialState);

  const [stepStatus, setStepStatus] = useState(0);
  const handleStep = next => {
    if (next === 1) checkSignAgreement(next);
    else if (next === 2) checkSingInfoCondition(next);
    else setStepStatus(next);
    // setStepStatus(next);
    // alert("입력을 완료해주세요");
  };

  const checkSignAgreement = next => {
    if (
      state.check1 &&
      state.check2 &&
      state.signcode !== "" &&
      state.corpname !== "" &&
      state.corpnum1 !== "" &&
      state.corpnum2 !== "" &&
      state.corpnum3 !== ""
    ) {
      setStepStatus(next);
    } else setStepStatus(next);
    // } else alert("입력을 완료해주세요");
  };
  const checkSingInfoCondition = next => {
    setStepStatus(next);
  };
  const step = {
    0: <Agreement handleStep={handleStep} state={state} dispatch={dispatch} />,
    1: (
      <SignUpInfo
        handleStep={handleStep}
        infoState={infoState}
        infoDispatch={infoDispatch}
      />
    ),
    2: <Complete />
  };

  return (
    <Background>
      <SignUpWholeWrapper>
        <Header stepStatus={stepStatus} />
        {step[stepStatus]}
        <Footer />
      </SignUpWholeWrapper>
    </Background>
  );
}

const initialState = {
  check1: false,
  check2: false,
  signcode: "",
  corpname: "",
  corpnum: "",
  corpnum1: "",
  corpnum2: "",
  corpnum3: ""
};

const infoInitialState = {
  user_email: "",
  password: "",
  password_check: "",
  representative_name: "",
  online_distributor_certification_text: "",
  manager_name: "",
  manager_phone_number: "",
  company_phone_number: "",
  manager_email: "",
  maanger_email2: ""
};
const reducer = (state, { action }) => {
  const { name, value } = action;
  if (name === "check1") return { ...state, [name]: !state.check1 };
  if (name === "check2") return { ...state, [name]: !state.check2 };
  return { ...state, [name]: value };
};
const infoReducer = (state, { action }) => {
  const { name, value } = action;
  return { ...state, [name]: value };
};

const Background = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: #f2f7f7;
`;

const SignUpWholeWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  background-color: #fff;
  display: block;
  border-radius: 10px;
  box-shadow: 0px 15.13px 15.13px rgba(0, 63, 154, 0.1);
  margin: 6rem auto;
`;
