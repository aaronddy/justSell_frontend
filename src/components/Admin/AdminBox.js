import React from "react";
import styled from "styled-components";
import AdminClickBox from "./AdminClickBox";

const AdminBox = () => {
  return (
    <>
      <DivWrap>
        <AdminClickBox></AdminClickBox>
      </DivWrap>
      <Box>
        <Hdiv>
          <H1>저스트셀만의 인공지능 관리 시스템에</H1>
          <H1>오신 것을 환영합니다.</H1>
        </Hdiv>
        <BoxImg></BoxImg>
      </Box>
    </>
  );
};

export default AdminBox;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  height: 240px;
  position: relative;

  background: -ms-linear-gradient(
    -45deg,
    rgba(0, 135, 239, 1) 0%,
    rgba(55, 209, 187, 0.6) 100%
  );
  background: linear-gradient(
    135deg,
    rgba(0, 135, 239, 1) 0%,
    rgba(55, 209, 187, 0.6) 100%
  );
`;

const BoxImg = styled.div`
  background-image: url("/assets/images/index/index_banner_back.png");
  background-position: right;
  background-repeat: no-repeat;
  width: 100%;
  
  max-width: 1000px;
  height: 240px;
  z-index: -1;
  background-color: #fff;
  position: absolute;
`;

const DivWrap = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 240px;
  display: flex;
`;

const H1 = styled.h1`
  color: #fff;
  font-size: 23px;
  letter-spacing: -2px;
  font-weight: 600;
`;

const Hdiv = styled.div`
  margin: 40px 0 0 50px;
`;
