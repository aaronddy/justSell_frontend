import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Items from "./Items";
import axios from "axios";

export default function ProductList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const token = sessionStorage.getItem("access_token");

    axios({
      url: "http://18.191.159.217:8080/product/myproducts",
      method: "GET",
      headers: {
        Authorization: token
      },
      data: {}
    })
      .then(res => {
        console.log(res.data.MY_PRODUCTS);
        setData(res.data.MY_PRODUCTS);
      })
      .catch(res => {
        console.log("error");
      });
  }, []);

  const list = data.map((product, index) => (
    <Items
      info={product.vendorcode}
      product_name={product.product_name}
      buyer={product.brand}
      taker={product.supply_price}
      price={product.sale_price}
      post_price={product.minimum_buying}
      order_state={product.stock_amount}
      key={index}
    />
  ));

  return (
    <ListContainer>
      <Table>
        <thead>
          <TrContainer>
            <TdWrap>상품코드</TdWrap>
            <TdWrap2>상품명</TdWrap2>
            <TdWrap3>브랜드</TdWrap3>
            <TdWrap3>공급가</TdWrap3>
            <TdWrap3>판매가</TdWrap3>
            <TdWrap3>최소구매량</TdWrap3>
            <TdWrap3>재고현황</TdWrap3>
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
  width: 18%;
`;

const TdWrap3 = styled(TdWrap2)`
  width: 6%;
`;
