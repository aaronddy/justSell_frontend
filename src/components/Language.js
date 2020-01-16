import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { changeEnglish, changeKorean } from "../reducers/ChangeLanguage";

const Language = ({ changeEnglish, changeKorean }) => {
  return (
    <LanguageBox>
      <KoreaBox onClick={() => changeKorean()} />
      <UsBox onClick={() => changeEnglish()} />
    </LanguageBox>
  );
};

export default connect(null, { changeEnglish, changeKorean })(Language);

const LanguageBox = styled.div`
  /* border: 1px solid black; */
  width: 70px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 10px;
  right: 20px;
  /* cursor: pointer; */
`;
const KoreaBox = styled.button`
  background-image: url("/assets/images/korea.png");
  background-size: cover;
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  border: none;
  outline: none;
  cursor: pointer;
`;
const UsBox = styled.button`
  background-image: url("/assets/images/us.png");
  background-size: cover;
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  border: none;
  outline: none;
  cursor: pointer;
`;
