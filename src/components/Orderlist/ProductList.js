import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Products from "./Products";

export default function ProductList(props) {
  const [data, setData] = useState(props.data);

  // useEffect(() => {
  //   fetch("http://localhost:3000/assets/data/orderdata.json")
  //     .then(res => res.json())
  //     .then(res => setData(res.data));
  //   // const fetchPosts = async () => {
  //   //   const res = await axios.get("http://localhost:3000/data/orderdata.json");
  //   // setData(res);
  //   // console.log(res);
  //   // };
  //   // fetchPosts();
  // }, []);
  // // console.log(data);

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

        <tbody>
          {data.map((product, index) => (
            <Products
              date={product.date}
              // image={product.image}
              product_name={product.product_name}
              buyer={product.buyer}
              taker={product.taker}
              price={product.price}
              post_price={product.post_price}
              order_state={product.order_state}
              key={index}
            />
          ))}
        </tbody>
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
