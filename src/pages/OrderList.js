import React from "react";
import styled from "styled-components";
import OrderTable from "../components/Orderlist/OrderTable";
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
