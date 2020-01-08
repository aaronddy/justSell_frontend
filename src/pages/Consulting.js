import React from "react";
import styled from "styled-components";
import ConsultingInput from "../components/Consulting/ConsultingInput";

const Div = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f7f7;
`;
const MainDiv = styled.div`
  width: 1100px;
  height: 776px;
  /* border: 1px solid black; */
  background: #fff;
  box-shadow: 0px 15.13px 15.13px rgba(0, 63, 154, 0.1);
`;

const LogoDiv = styled.div`
  height: 152px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;
const Logo = styled.div`
  background-image: url("/assets/images/ui/color_logo.png");
  width: 160px;
  height: 50px;
  background-size: 160px 50px;
`;
const LogoText = styled.div`
  font-size: 15px;
  color: #007add;
  font-weight: 800;
  padding-top: 20px;
  letter-spacing: -1px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-top: 45px;
  letter-spacing: -2px;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px;
`;

const Button = styled.button`
  width: 400px;
  height: 72px;
  border-radius: 30px;
  border: none;
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
const FooterBox = styled.footer`
  display: flex;
  justify-content: center;
`;
const Footer = styled.div`
  width: 368px;
  height: 100px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #cccccc;
  color: #b2b2b2;
`;

const Consulting = () => {
  return (
    <Div>
      <MainDiv>
        <LogoDiv>
          <Logo></Logo>
          <LogoText>가입상담 신청</LogoText>
        </LogoDiv>
        <Title>연락처를 남겨주시면 가입상담을 진행해 드립니다.</Title>
        <ConsultingInput />
        <ButtonBox>
          <Button>상담신청하기</Button>
        </ButtonBox>
        <FooterBox>
          <Footer>저스트셀 / support@equality.co.kr / T. 1522-1522</Footer>
        </FooterBox>
      </MainDiv>
    </Div>
  );
};

export default Consulting;
