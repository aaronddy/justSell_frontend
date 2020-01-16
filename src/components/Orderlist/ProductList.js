import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Products from "./Products";

export default function ProductList({ dataArr }) {
  console.log(dataArr);

  const list = dataArr.map((product, index) => (
    <Products
      date={product.order_date}
      product_name={product.product_name}
      buyer={product.orderer_name}
      taker={product.receiver_name}
      price={product.product_sale_price}
      post_price={product.product_deliver_fee}
      order_state={product.order_status}
      key={index}
    />
  ));

  return (
    <ListContainer>
      <Table>
        <thead>
          <TrContainer>
            <TdWrap>주문일시</TdWrap>
            <TdWrap2>주문상품</TdWrap2>
            <TdWrap3>주문자</TdWrap3>
            <TdWrap3>받는분</TdWrap3>
            <TdWrap3>상품금액</TdWrap3>
            <TdWrap3>배송비</TdWrap3>
            <TdWrap3>주문상태</TdWrap3>
          </TrContainer>
        </thead>

        <tbody>{list}</tbody>
      </Table>
    </ListContainer>
  );
}

const ListContainer = styled.div`
  border: 1px solid #dddddd;
  margin: 0 3rem 3rem 3rem;
  width: 93.5%;
  border-radius: 5px 5px 0 0;
`;
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;
const TrContainer = styled.tr``;

const TdWrap = styled.td`
  font-size: 1rem;
  color: #fff;
  text-align: center;
  padding: 1rem 0;
  background-color: rgba(35, 158, 158, 0.7);
  width: 9%;
  font-weight: bold;
`;
const TdWrap2 = styled(TdWrap)`
  border-left: 1px solid #ececec;
  width: 20%;
`;

const TdWrap3 = styled(TdWrap2)`
  width: 6%;
`;
