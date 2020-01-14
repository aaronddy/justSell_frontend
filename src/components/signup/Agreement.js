import React from "react";
import styled from "styled-components";
import ServiceAgree from "./ServiceAgree";
import SignUpCheck from "./SignUpCheck";
import SignButton from "../shared/SignButton";

export default function Agreement({
  handleStep,
  state,
  dispatch,
  corpNumGroupState,
  corpNumGroupDispatch,
  getInvitationCodeAuthed
}) {
  return (
    <div>
      <ServiceAgree
        check1={state.check1}
        check2={state.check2}
        dispatch={dispatch}
      />
      <SignUpCheck
        state={state}
        corpNumGroupState={corpNumGroupState}
        dispatch={dispatch}
        corpNumGroupDispatch={corpNumGroupDispatch}
        getInvitationCodeAuthed={getInvitationCodeAuthed}
      />
      <SignButton name={"다음단계"} handleStep={handleStep} nextPage={1} />
    </div>
  );
}
