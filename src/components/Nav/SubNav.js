import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const removeToken = () => {
  window.localStorage.clear();
};

const SubNav = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <NavContainer>
        <NavDiv>
          <Link href="/">
            <Login onClick={removeToken}>로그아웃</Login>
          </Link>
        </NavDiv>
      </NavContainer>
      <MenuNav>
        <ImgDiv>
          <Image onClick={() => router.push("/admin")}></Image>
        </ImgDiv>
        <MenuContainer>
          <Menu
            id={1}
            background={router.pathname === "/orderlist" ? "#2B313B" : ""}
            onClick={() => router.push("/orderlist")}
          >
            주문 현황
          </Menu>
          <Menu
            background={router.route === "/report" ? "#2B313B" : ""}
            onClick={() => router.push("/report")}
          >
            투자 리포트
          </Menu>
          <Menu onClick={() => router.push("/")}>충전금 내역</Menu>
          <Menu
            id={4}
            background={
              router.pathname === "/productRegistration" ? "#2B313B" : ""
            }
            onClick={() => router.push("/productRegistration")}
          >
            상품 등록
          </Menu>
          <Menu onClick={() => router.push("/")}>상품 관리</Menu>
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
  z-index: 2;
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
  z-index: 2;
`;
const Login = styled.button`
  text-decoration: none;
  color: white;
  font-weight: 700;
  letter-spacing: -1px;
  cursor: pointer;
  z-index: 200;
  border: none;
  font-size: 17px;
  background: none;
  outline: none;
`;
const Signup = styled.button`
  text-decoration: none;
  outline: none;
  color: white;
  font-weight: 700;
  letter-spacing: -1px;
  margin-left: 25px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 17px;
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
  cursor: pointer;
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
const Menu = styled.div`
  color: #fff;
  text-decoration: none;
  font-size: 19px;
  font-weight: 700;
  /* margin-bottom: 60px; */
  cursor: pointer;
  background-color: ${props => props.background};
  width: 100%;
  padding: 35px 0;
  text-align: center;
`;
