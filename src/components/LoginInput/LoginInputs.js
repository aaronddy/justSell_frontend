import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Router from "next/router";
import { connect } from "react-redux";
import {ajaxUrl} from "../../ajax/api";
const LoginInputs = ({ apple }) => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const idValue = e => {
    setUserId(e.target.value);
  };
  const pwValue = e => {
    setUserPw(e.target.value);
  };

  const moving = () => {
    Router.push("/admin");
  };

  const onSubmit = e => {
    console.log("Id: ", userId, "pw: ", userPw);
    fetch(`${ajaxUrl}/user/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_email: userId,
        password: userPw
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.access_token) {
          sessionStorage.setItem("access_token", response.access_token);
          moving();
        }
      })
      .catch(err => console.log(err));

    setUserId("");
    setUserPw("");
    e.preventDefault();
  };

  return (
    <InputWrapper onSubmit={onSubmit}>
      <IdInput
        type="email"
        value={userId}
        onChange={idValue}
        placeholder={apple.idPlaceholder}
      ></IdInput>
      <PwInput
        type="password"
        value={userPw}
        onChange={pwValue}
        placeholder={apple.pwPlaceholder}
      ></PwInput>
      <Div>
        <Id>{apple.save}</Id>
        <Find href="/">{apple.find}</Find>
      </Div>
      <Button>{apple.login}</Button>
      <InfoCotainer>
        <Abox>
          <Link href="/signup">
            <LieBox>{apple.signup}</LieBox>
          </Link>
        </Abox>

        <Abox>{apple.bookMark}</Abox>
      </InfoCotainer>
      <Pbox>
        <Ptext>{apple.footer}</Ptext>
      </Pbox>
    </InputWrapper>
  );
};

const mapStateToProps = state => {
  return { apple: state.ChangeLanguage };
};

export default connect(mapStateToProps)(LoginInputs);

const InputWrapper = styled.form`
  height: 160px;
  display: flex;
  flex-direction: column;
  /* margin-top: px; */
  align-items: center;
`;
const IdInput = styled.input`
  /* height: 72px; */
  width: 370px;
  border-radius: 30px;
  border: 1px solid #cccccc;
  margin-bottom: 20px;
  padding: 20px 40px;
  outline: none;
  font-size: 18px;
`;
const PwInput = styled(IdInput)`
  /* height: 72px; */
  /* width: 370px;
  border-radius: 30px;
  border: 1px solid #cccccc;
  padding: 20px 40px;
  outline: none;
  font-size: 18px; */
`;
const Div = styled.div`
  width: 280px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;
const Id = styled.h1`
  font-size: 12px;
  font-weight: 800;
  cursor: pointer;
`;
const Find = styled.a`
  font-size: 12px;
  text-decoration: none;
  color: black;
  font-weight: 800;
`;
const Button = styled.button`
  text-decoration: none;
  text-align: center;
  width: 370px;
  height: 58px;
  margin-top: 40px;
  padding: 35px;
  border-radius: 35px;
  border: none;
  line-height: 5px;
  background: -moz-linear-gradient(
    32.7% -80.26% -60deg,
    rgba(55, 209, 187, 1) 0%,
    rgba(25, 177, 214, 1) 50.6%,
    rgba(0, 150, 236, 1) 100%
  );
  background: -webkit-linear-gradient(
    -60deg,
    rgba(55, 209, 187, 1) 0%,
    rgba(25, 177, 214, 1) 50.6%,
    rgba(0, 150, 236, 1) 100%
  );
  background: -webkit-gradient(
    linear,
    32.7% -80.26%,
    67.3% 180.26%,
    color-stop(0, rgba(55, 209, 187, 1)),
    color-stop(0.506, rgba(25, 177, 214, 1)),
    color-stop(1, rgba(0, 150, 236, 1))
  );
  background: -o-linear-gradient(
    -60deg,
    rgba(55, 209, 187, 1) 0%,
    rgba(25, 177, 214, 1) 50.6%,
    rgba(0, 150, 236, 1) 100%
  );
  background: -ms-linear-gradient(
    -60deg,
    rgba(55, 209, 187, 1) 0%,
    rgba(25, 177, 214, 1) 50.6%,
    rgba(0, 150, 236, 1) 100%
  );
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#37D1BB', endColorstr='#0096EC' ,GradientType=0)";
  background: linear-gradient(
    150deg,
    rgba(55, 209, 187, 1) 0%,
    rgba(25, 177, 214, 1) 50.6%,
    rgba(0, 150, 236, 1) 100%
  );
  color: #fff;
  font-size: 19px;
  font-weight: 800;
  outline: none;
  cursor: pointer;
`;
const InfoCotainer = styled.div`
  display: flex;
  height: 100px;
  border-bottom: 1px solid #cccccc;
`;
const Abox = styled.a`
  cursor: pointer;
  width: 187px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #808080;
`;
const LieBox = styled.div`
  height: 25px;
  width: 100%;
  border-right: 1px solid #cccccc;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Pbox = styled.div`
  padding-top: 20px;
`;

const Ptext = styled.p`
  font-size: 9px;
  color: #cccccc;
  font-weight: 700;
`;
