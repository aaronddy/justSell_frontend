import React, { useState } from "react";
import styled from "styled-components";
import ItemList from "../components/Managing/ItemList";
import Layout from "../components/layouts/Layout";
Managing.Layout = Layout;

export default function Managing() {
  return (
    <Container>
      <TableContainer>
        <TitleWrapper>
          <div>
            <TitleImg />
            <H1>상품관리</H1>
            <H2>당신의 상품을 관리하세요</H2>
          </div>
          <BtnToEleven>
            <ElevenImg src="./assets/images/manage/logo_eleven.png" />로
            연동하기
          </BtnToEleven>
        </TitleWrapper>
        {/* <ItemTable /> */}
        <ItemList />
      </TableContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: 100%;
  padding: 0.8rem;
`;
const TitleWrapper = styled.div`
  margin: 3rem;
  display: flex;
  justify-content: space-between;
`;
const TitleImg = styled.div`
  background-image: url("/assets/images/order_state/order_title_icon.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 35px;
  height: 35px;
  display: inline-block;
  margin-right: 1rem;
  margin-left: 2rem;
  vertical-align: middle;
`;
const TableContainer = styled.div`
  border: 1px solid #eaeaea;
  border-radius: 3px;
  margin: 3rem 5rem 2rem 5rem;
  background-color: white;
`;
const H1 = styled.h1`
  display: inline-block;
  margin-right: 1rem;
  font-size: 1.7rem;
  color: #007add;
  vertical-align: middle;
`;
const H2 = styled(H1)`
  font-size: 1rem;
`;
const ElevenImg = styled.img`
  width: 2.5rem;
`;
const BtnToEleven = styled.a`
  background-color: white;
  margin-right: 5rem;
  color: #e53935;
  font-weight: bold;
  cursor: pointer;
  display: inline-block;
  width: 13rem;
  padding: 1rem 0;
  border-radius: 7px;
  display: flex;
  justify-content: center;
`;
