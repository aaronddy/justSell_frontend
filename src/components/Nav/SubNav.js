import React from "react";
import styled from "styled-components";

const SubNav = ({ children }) => {
  return (
    <>
      <NavContainer>
        <NavDiv>
          <Login href="/home">로그인</Login>
          <Signup>회원가입</Signup>
        </NavDiv>
      </NavContainer>
      <MenuNav>
        <ImgDiv>
          <Image></Image>
        </ImgDiv>
        <MenuContainer>
          <Menu>주문 현황</Menu>
          <Menu>투자 리포트</Menu>
          <Menu>충전금 내역</Menu>
          <Menu>상품 등록</Menu>
          <Menu>상품 관리</Menu>
        </MenuContainer>
      </MenuNav>
    </>
  );
};

export default SubNav;

const NavContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  height: 64px;
  background: #363d49;
  display: flex;
  justify-content: center;
`;
const NavDiv = styled.div`
  height: 64px;
  width: 1400px;
  background: #363d49;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0;
`;
// #363d49
const MenuNav = styled.div`
  height: 100vh;
  width: 240px;
  background: #363d49;
  /* display: flex; */
  align-items: center;
  position: fixed;
  left: 0;
`;
const Login = styled.a`
  text-decoration: none;
  color: white;
  font-weight: 700;
  letter-spacing: -1px;
  cursor: pointer;
  z-index: 200;
`;
const Signup = styled.a`
  text-decoration: none;
  color: white;
  font-weight: 700;
  letter-spacing: -1px;
  margin-left: 25px;
  cursor: pointer;
`;
const ImgDiv = styled.div`
  width: 379px;
  height: 131px;
  background-image: url("/assets/images/ui/ui_logo_base.png");
  /* background-repeat: no-repeat;
  background-size: cover; */
  position: fixed;
  top: 0;
  z-index: 10;
`;
const Image = styled.div`
  width: 160px;
  height: 50px;
  background-image: url("/assets/images/ui/w_logo_pc.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 30px;
  left: 48px;
  z-index: 1;
`;
const MenuContainer = styled.div`
  width: 100%;
  /* background: red; */
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  top: 200px;
  letter-spacing: -2px;
`;
const Menu = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 60px;
  cursor: pointer;
`;
