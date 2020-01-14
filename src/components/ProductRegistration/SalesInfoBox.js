import React from "react";
import styled, { css } from "styled-components";
export default function SalesInfoBox({
  salesInfoData,
  salesInfoDataHandler,
  salesInfoToggleDataHandler
}) {
  const {
    product_tax,
    supply_price,
    sale_price,
    stock_amount,
    minimum_buying,
    vendorcode
  } = salesInfoData;
  return (
    <CheckAreaWrapper>
      {/* 과세여부 */}
      <InputWrap>
        <Title>
          <h3>과세여부</h3>
        </Title>
        <EventArea>
          <CategorySearchButton
            onClick={salesInfoToggleDataHandler(!product_tax)}
            clicked={product_tax}
          >
            과세
          </CategorySearchButton>
          <CategorySearchButton
            onClick={salesInfoToggleDataHandler(!product_tax)}
            clicked={!product_tax}
          >
            면세
          </CategorySearchButton>
        </EventArea>
      </InputWrap>
      {/* 정상가격 */}
      <InputWrap>
        <Title>
          <h3>정상가격</h3>
        </Title>
        <EventArea>
          <ProductNameInput
            type="number"
            placeholder="최대 999,999,999"
            name="supply_price"
            value={supply_price}
            onChange={salesInfoDataHandler}
          />
          <Won>원</Won>
        </EventArea>
      </InputWrap>
      {/* 판매가격 */}
      <InputWrap>
        <Title>
          <h3>판매가격</h3>
        </Title>
        <EventArea>
          <ProductNameInput
            type="number"
            placeholder="최대 999,999,999"
            name="sale_price"
            value={sale_price}
            onChange={salesInfoDataHandler}
          />
          <Won>원</Won>
        </EventArea>
      </InputWrap>
      {/* 수수료(VAT포함) */}
      <InputWrap>
        <Title>
          <h3>수수료(VAT포함)</h3>
        </Title>
        <EventArea></EventArea>
      </InputWrap>
      {/* 재고수량 */}
      <InputWrap>
        <Title>
          <h3>재고수량</h3>
        </Title>
        <EventArea>
          <ProductNameInput
            type="number"
            placeholder="최대 99,999"
            name="stock_amount"
            value={stock_amount}
            onChange={salesInfoDataHandler}
          />
          <Won>개</Won>
        </EventArea>
      </InputWrap>
      <InputWrap>
        <Title>
          <h3>최소구매수량</h3>
        </Title>
        <EventArea>
          <ProductNameInput
            type="number"
            placeholder="1~999"
            name="minimum_buying"
            value={minimum_buying}
            onChange={salesInfoDataHandler}
          />
          <Won>개부터 구매가능</Won>
        </EventArea>
      </InputWrap>
      {/* 업체상품코드 */}
      <InputWrap>
        <Title>
          <h3>업체상품코드</h3>
        </Title>
        <EventArea>
          <ProductNameInput
            type="text"
            placeholder=""
            name="vendorcode"
            value={vendorcode}
            onChange={salesInfoDataHandler}
          />
        </EventArea>
      </InputWrap>
    </CheckAreaWrapper>
  );
}

const CheckAreaWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 24px auto;
`;
const Title = styled.div`
  display: inline-block;
  width: 15%;
  font-size: 15px;
  font-weight: medium;
  color: #1a1a1a;
  padding: 16px 20px;
  text-align: right;
`;
const EventArea = styled.div`
  width: 93%;
  display: flex;
`;
const InputWrap = styled.div`
  display: flex;
  margin-top: 12px;
`;
const CategorySearchButton = styled.button`
  background-color: #0891e4;
  border: 1px solid #0d99de;
  color: white;
  padding: 12px 48px;
  font-size: 14px;
  ${props =>
    !props.clicked &&
    css`
      background-color: #fafafa;
      border: 1px solid #ddd;
      color: #aaa;
      margin-left: 0px;
    `}
`;
const SearchWrap = styled.div`
  position: relative;
  ${props =>
    !props.title &&
    css`
      margin-left: 19%;
    `}
`;
const SearchInput = styled.input`
  padding: 16px 108px 16px 12px;
  font-size: 16px;
  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

const SearchIcon = styled.img`
  display: inline-block;
  position: absolute;
  top: 22%;
  right: 2%;
  width: 30px;
  height: 28px;
`;
const ProductNameInput = styled.input`
  width: 24%;
  padding: 16px 0 16px 12px;
  font-size: 16px;
  border: 1px solid #ddd;
  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;
const BrandSearch = styled.input`
  padding: 16px 108px 16px 12px;
  font-size: 16px;
  border: 1px solid #ddd;
  background-color: #f5f5f5;
  cursor: default;
  ::placeholder {
    color: #aaa;
  }
`;
const BrandCheckBox = styled.div`
  display: inline-block;
  position: relative;
  margin: auto 12px;
`;
const BrandExistCheck = styled.span`
  padding-left: 28px;
  :before {
    display: block;
    content: "";
    position: absolute;
    top: 0px;
    left: 0;
    width: 20px;
    height: 20px;
    background: url("/assets/images/ui/ico_checkbox.png") no-repeat;
    background-position: -20px 0;
  }
`;
const Won = styled.span`
  border: 1px solid #ddd;
  text-align: center;
  font-size: 13px;
  padding: 18px 12px;
  margin: auto 0 auto -1px;
`;
