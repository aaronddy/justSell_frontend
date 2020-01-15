import React from "react";
import styled from "styled-components";
import OrderTable from "../components/Orderlist/OrderTable";
import ProductList from "../components/Orderlist/ProductList";
import Layout from "../components/layouts/Layout";
OrderList.Layout = Layout;

export default function OrderList() {
  return (
    <Container>
      <TableContainer>
        <TitleWrapper>
          <TitleImg />
          <H1>주문현황</H1>
          <H2>주문현황을 확인하세요</H2>
        </TitleWrapper>
        <OrderTable />
        <OrderBtn>
          <Btn1>검색하기</Btn1>
          <Btn2>초기화</Btn2>
        </OrderBtn>
        <ProductList />
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

const OrderBtn = styled.div`
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 5rem;
  text-align: center;
`;
const Btn1 = styled.a`
  background: linear-gradient(
    150deg,
    rgba(55, 209, 187, 1) 0%,
    rgba(25, 177, 214, 1) 50.6%,
    rgba(0, 150, 236, 1) 100%
  );
  margin-right: 1rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
  display: inline-block;
  width: 14rem;
  padding: 1rem 0;
  border-radius: 2px;
`;

const Btn2 = styled(Btn1)`
  background: #e5e5e5;
  color: black;
  font-weight: normal;
`;
