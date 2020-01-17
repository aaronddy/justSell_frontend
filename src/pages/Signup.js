import React, { useState, useReducer } from "react";
import styled from "styled-components";
import Header from "../components/signup/Header";
import Footer from "../components/signup/Footer";
import Agreement from "../components/signup/Agreement";
import SignUpInfo from "../components/signup/SignUpInfo";
import Complete from "../components/signup/Complete";
import axios from "axios";

let invitationCodeAuthed = false;
export default function Signup() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [infoState, infoDispatch] = useReducer(infoReducer, infoInitialState);
  const [corpNumGroupState, corpNumGroupDispatch] = useReducer(
    corpNumGroupReducer,
    corpNumGroupInitialState
  );
  const [managerEmailGroupState, managerEmailGroupDispatch] = useReducer(
    managerEmailGroupReducer,
    managerEmailGroupInitialState
  );
  const [stepStatus, setStepStatus] = useState(0);

  const handleStep = next => {
    if (next === 1) checkSignAgreement(next);
    else if (next === 2) checkSignInfoCondition(next);
    else setStepStatus(next);
  };
  const getInvitationCodeAuthed = curInvitationCode => {
    invitationCodeAuthed = curInvitationCode;
  };
  const checkSignAgreement = next => {
    if (
      state.check1 &&
      state.check2 &&
      invitationCodeAuthed &&
      corpNumGroupState.corpnum1 &&
      corpNumGroupState.corpnum2 &&
      corpNumGroupState.corpnum3
    ) {
      console.log("1단계 조건을 통과");
      setStepStatus(next);
    } else {
      alert("입력을 완료해주세요");
    }
  };

  const checkSignInfoCondition = next => {
    if (
      infoState.user_email &&
      infoState.password &&
      infoState.password_check &&
      infoState.representative_name &&
      infoState.online_distributor_certification_text &&
      infoState.manager_name &&
      infoState.manager_phone_number &&
      infoState.company_phone_number &&
      managerEmailGroupState.manager_email1 &&
      managerEmailGroupState.manager_email2
    ) {
      const data = {
        user_email: infoState.user_email,
        password: infoState.password,
        company_name: state.corpname,
        company_registeration_number: `${corpNumGroupState.corpnum1}${corpNumGroupState.corpnum2}${corpNumGroupState.corpnum3}`,
        company_phone_number: infoState.company_phone_number,
        representative_name: infoState.representative_name,
        online_distributor_certification_text:
          infoState.online_distributor_certification_text,
        banking_company: "shinhan",
        banking_number: "14017012323",
        banking_account_name: "justq",
        invitation_codes: "6666",
        company_manager_name: infoState.manager_name,
        company_manager_email: `${managerEmailGroupState.manager_email1}@${managerEmailGroupState.manager_email2}`,
        company_manager_phone_number: infoState.manager_phone_number
      };
      axios
        .post("http://3.15.9.70:8080/user/signup", data)
        .then(res => res.message === "SUCCESS" && setStepStatus(next))
        .catch(error => {
          console.log("catch error :", error);
          console.log("catch error.response :", error.response);
        });
    } else {
      alert("입력을 완료해주세요");
    }
  };
  const step = {
    0: (
      <Agreement
        handleStep={handleStep}
        state={state}
        corpNumGroupState={corpNumGroupState}
        dispatch={dispatch}
        corpNumGroupDispatch={corpNumGroupDispatch}
        getInvitationCodeAuthed={getInvitationCodeAuthed}
      />
    ),
    1: (
      <SignUpInfo
        handleStep={handleStep}
        infoState={infoState}
        infoDispatch={infoDispatch}
        managerEmailGroupState={managerEmailGroupState}
        managerEmailGroupDispatch={managerEmailGroupDispatch}
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
  corpnum: ""
};
const corpNumGroupInitialState = {
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
  manager_email: ""
};
const managerEmailGroupInitialState = {
  manager_email1: "",
  manager_email2: ""
};
// prettier-ignore
const reducer = (state,  action ) => {
  const { name, value } = action;
  if (name === "check1")        return { ...state, [name]: !state.check1 };
  else if (name === "check2")   return { ...state, [name]: !state.check2 };
  return { ...state, [name]: value };
};

const infoReducer = (state, action) => {
  const { name, value } = action;
  return { ...state, [name]: value };
};
const corpNumGroupReducer = (state, action) => {
  const { name, value } = action;
  return { ...state, [name]: value };
};
const managerEmailGroupReducer = (state, action) => {
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
  box-shadow: 0px 15px 15px rgba(0, 63, 154, 0.1);
  margin: 6rem auto;
`;
