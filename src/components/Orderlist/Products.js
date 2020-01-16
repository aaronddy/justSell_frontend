import React from "react";
import styled from "styled-components";

export default function Products(props) {
  return (
    <Tr>
      <TdWrap>{props.date}</TdWrap>
      <TdWrap2>
        <Image />
        {props.product_name}
      </TdWrap2>
      <TdWrap3>{props.buyer}</TdWrap3>
      <TdWrap3>{props.taker}</TdWrap3>
      <TdWrap3>{props.price}</TdWrap3>
      <TdWrap3>{props.post_price}</TdWrap3>
      <TdWrap3>{props.order_state}</TdWrap3>
    </Tr>
  );
}

const Tr = styled.tr`
  border-bottom: 1px solid #ececec;
  width: 100%;
`;
const TdWrap = styled.td`
  font-size: 0.9rem;
  text-align: center;
  padding: 2rem;
  text-decoration: underline;
  color: #1c9d9f;
  vertical-align: middle;
`;
const TdWrap2 = styled(TdWrap)`
  text-decoration: none;
  color: black;
  border-left: 1px solid #ececec;
  text-align: left;
  display: flex;
  flex-direction: row;
  align-content: center;
  line-height: 1.3rem;
`;
const Image = styled.div`
  background-image: url("/assets/images/order_state/order_list_img.png");
  background-repeat: no-repeat;
  background-size: 4rem 4rem;
  width: 4rem;
  height: 4rem;
  display: inline-block;
  padding-right: 3rem;
`;
const TdWrap3 = styled(TdWrap)`
  color: black;
  text-decoration: none;
  border-left: 1px solid #ececec;
  vertical-align: middle;
  padding: 2rem;
`;
