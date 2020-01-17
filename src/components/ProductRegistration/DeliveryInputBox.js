import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import DaumPostcode from "react-daum-postcode";
import PopUpPostBox from "./PopUpPostBox";
export default function DeliveryInputBox({
  deliveryInfoData,
  startDeliveryHandler,
  returnDeliveryHandler,
  deliveryInfoDataHandler
}) {
  const {
    delivery_company,
    delivery_fee,
    return_delivery_fee,
    start_delivery_address_RJ,
    start_delivery_address,
    start_delivery_address_sigungucode,
    start_delivery_address_extraddress,
    return_delivery_address_RJ,
    return_delivery_address,
    return_delivery_address_sigungucode,
    return_delivery_address_extraddress
  } = deliveryInfoData;
  const [startDeliveryPopup, setStartDeliveryPopup] = useState(false);
  const [returnDeliveryPopup, setReturnDeliveryPopup] = useState(false);
  const [toggleStartAddress, setToggleStartAddress] = useState(false);
  const [toggleReturnAddress, setToggleReturnAddress] = useState(false);
  const toggleAddress = name => () => {
    console.log("test");
    console.log(name);
    if (name == "start") setToggleStartAddress(!toggleStartAddress);
    else if (name == "return") setToggleReturnAddress(!toggleReturnAddress);
  };
  const togglePopup = name => () => {
    if (name === "startDeliveryPopup")
      setStartDeliveryPopup(!startDeliveryPopup);
    else if (name === "returnDeliveryPopup")
      setReturnDeliveryPopup(!returnDeliveryPopup);
  };
  const closePopup = name => () => {
    if (name === "startDeliveryPopup") setStartDeliveryPopup(false);
    else if (name === "returnDeliveryPopup") setReturnDeliveryPopup(false);
  };
  const handleAddress = (i, data) => {
    console.log("i : ", i);
    console.log("data : ", data);
    if (i == "start") startDeliveryHandler(data);
    else if (i == "return") returnDeliveryHandler(data);
  };
  useEffect(() =>
    window.addEventListener("beforeunload", () => {
      closePopup();
    })
  );
  return (
    <CheckAreaWrapper>
      {/* 카테고리 */}
      <InputWrap>
        <Title>
          <h3>택배사</h3>
        </Title>
        <EventArea>
          <SearchWrap>
            <SearchInput
              type="text"
              placeholder="택배사 조회"
              name="delivery_company"
              value={delivery_company}
              onChange={deliveryInfoDataHandler}
            />
            <SearchIcon
              src="/assets/images/ui/ico_search.png"
              alt="searchIcon"
            />
          </SearchWrap>
        </EventArea>
      </InputWrap>
      {/* 상품명 */}
      <InputWrap>
        <Title>
          <h3>배송비</h3>
        </Title>
        <EventArea>
          <DeliverPrice>2500원</DeliverPrice>
        </EventArea>
      </InputWrap>
      {/* 반품/교환 배송비 (편도) */}
      <InputWrap>
        <Title>
          <h3>
            반품/교환 <br /> 배송비(편도)
          </h3>
        </Title>
        <ReturnArea>
          <ProductNameInput
            type="number"
            placeholder="3000"
            name="return_delivery_fee"
            value={return_delivery_fee}
            onChange={deliveryInfoDataHandler}
          />
          <Won>원(편도)</Won>
        </ReturnArea>
      </InputWrap>
      {/* 출고지 */}
      <InputWrap>
        <Title>
          <h3>출고지</h3>
        </Title>
        <EventArea>
          <CategorySearchButton onClick={togglePopup("startDeliveryPopup")}>
            주소 검색
          </CategorySearchButton>
          {startDeliveryPopup && (
            <PopUpPostBox closePopup={closePopup}>
              <DaumPostcode
                onComplete={data => {
                  handleAddress("start", data);
                }}
                width="570"
              />
            </PopUpPostBox>
          )}
        </EventArea>
      </InputWrap>
      {/* 배송 정보 */}
      <InputWrap>
        <AddressArea>
          <AddressWrap title={true}>
            <SearchAddress
              type="text"
              placeholder="05833"
              name="start_delivery_address_sigungucode"
              value={start_delivery_address_sigungucode}
              onChange={deliveryInfoDataHandler}
            />
            <SearchAddress
              width={205}
              type="text"
              placeholder="서울특별시 송파구 문정도 150-4"
              name="start_delivery_address"
              value={start_delivery_address}
              onChange={deliveryInfoDataHandler}
            />
            <SearchAddress
              color="white"
              type="text"
              placeholder="국제빌딩 7층 38호 아이에스샵"
              width={205}
              name="start_delivery_address_extraddress"
              value={start_delivery_address_extraddress}
              onChange={deliveryInfoDataHandler}
            />
          </AddressWrap>
          <BrandCheckBox>
            <AddressExistCheck
              onClick={toggleAddress("start")}
              toggleStartAddress={toggleStartAddress}
            >
              사업자 주소 동일 적용
            </AddressExistCheck>
          </BrandCheckBox>
        </AddressArea>
      </InputWrap>
      <FullAddress>
        {`${start_delivery_address_RJ} ${start_delivery_address} ${start_delivery_address_extraddress}`}
      </FullAddress>
      {/* 회수지 */}
      <InputWrap>
        <Title>
          <h3>회수지</h3>
        </Title>
        <EventArea>
          <CategorySearchButton onClick={togglePopup("returnDeliveryPopup")}>
            주소 검색
          </CategorySearchButton>
          {returnDeliveryPopup && (
            <PopUpPostBox closePopup={closePopup}>
              <DaumPostcode
                width="570"
                onComplete={data => {
                  handleAddress("return", data);
                }}
              />
            </PopUpPostBox>
          )}
        </EventArea>
      </InputWrap>
      {/* 배송 정보 */}
      <InputWrap>
        <AddressArea>
          <AddressWrap title={true}>
            <SearchAddress
              type="text"
              placeholder="05833"
              name="return_delivery_address_sigungucode"
              value={return_delivery_address_sigungucode}
              onChange={deliveryInfoDataHandler}
            />
            <SearchAddress
              width={205}
              type="text"
              placeholder="서울특별시 송파구 문정도 150-4"
              name="return_delivery_address"
              value={return_delivery_address}
              onChange={deliveryInfoDataHandler}
            />
            <SearchAddress
              color="white"
              type="text"
              placeholder="국제빌딩 7층 38호 아이에스샵"
              width={205}
              name="return_delivery_address_extraddress"
              value={return_delivery_address_extraddress}
              onChange={deliveryInfoDataHandler}
            />
          </AddressWrap>
          <BrandCheckBox>
            <AddressExistCheck
              onClick={toggleAddress("return")}
              toggleReturnAddress={toggleReturnAddress}
            >
              출고지 주소 동일 적용
            </AddressExistCheck>
          </BrandCheckBox>
        </AddressArea>
      </InputWrap>
      <FullAddress>
        {`${return_delivery_address_RJ} ${return_delivery_address} ${return_delivery_address_extraddress}`}
      </FullAddress>
      <InputWrap>
        <SafeTitle>
          <h3>안심번호 서비스 사용 노출 여부</h3>
        </SafeTitle>
        <SafeEventArea>노출</SafeEventArea>
      </InputWrap>
    </CheckAreaWrapper>
  );
}

const CheckAreaWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 24px auto;
`;
const Title = styled.div`
  display: block;
  margin: auto 0;
  width: 15%;
  font-size: 15px;
  font-weight: medium;
  color: #1a1a1a;
  padding: 12px 20px;
  text-align: right;
`;
const EventArea = styled.div`
  width: 93%;
  display: flex;
`;
const AddressArea = styled.div`
  width: 100%;
  display: flex;
`;
const InputWrap = styled.div`
  display: flex;
  margin-top: 12px;
`;
const CategorySearchButton = styled.button`
  display: block;
  margin: auto 0;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #0d99de;
  color: #0d99de;
  padding: 8px 20px;
  font-size: 14px;
  ${({ edit }) =>
    edit &&
    css`
      background-color: #0d99de;
      color: #fafafa;
    `}
`;
const SearchWrap = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  display: block;
  margin: auto 0;
  padding: 12px 108px 12px 12px;
  border: 1px solid #ddd;
  font-size: 16px;
  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

const SearchIcon = styled.img`
  display: inline-block;
  position: absolute;
  top: 24%;
  right: 2%;
  width: 24px;
  height: 22px;
`;

const SearchAddress = styled.input`
  padding: 12px 0 12px 8px;
  width: 100px;
  margin-left: 12px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 3px;
  background-color: #f5f5f5;
  cursor: default;
  ::placeholder {
    color: #aaa;
  }
  ${({ color }) =>
    color &&
    css`
      background-color: #fafafa;
    `}
  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `}
`;
const AddressWrap = styled.div`
  position: relative;
  margin-left: 13%;
`;
const BrandCheckBox = styled.div`
  display: inline-block;
  position: relative;
  margin: auto 12px;
`;

const AddressExistCheck = styled.span`
  padding-left: 28px;
  letter-spacing: -1px;
  font-size: 12px;
  :before {
    display: block;
    content: "";
    position: absolute;
    top: 0px;
    left: 0;
    width: 20px;
    height: 20px;
    background: url("/assets/images/ui/ico_checkbox.png") no-repeat;
  }
  ${props =>
    props.toggleStartAddress &&
    css`
      :before {
        background-position: -20px 0;
      }
    `}
  ${props =>
    props.toggleReturnAddress &&
    css`
      :before {
        background-position: -20px 0;
      }
    `}
`;

const DeliverPrice = styled.div`
  margin: auto 0;
  padding-bottom: 7px;
  color: #0d99de;
`;
const FullAddress = styled.div`
  padding: 8px 0 8px 14%;
  font-size: 12px;
  color: #616161;
`;
const SafeTitle = styled.div`
  display: inline-block;
  width: 15%;
  font-size: 15px;
  font-weight: medium;
  color: #818181;
  padding: 16px 20px;
  text-align: right;
`;
const SafeEventArea = styled.div`
  width: 93%;
  display: flex;
  color: #818181;
  margin: auto 0;
`;
const ReturnArea = styled.div`
  width: 93%;
  display: flex;
  margin: auto 0;
`;
const ProductNameInput = styled.input`
  display: block;
  margin: auto 0;
  width: 10%;
  padding: 10px 12px;
  font-size: 14px;
  border: 1px solid #ddd;
  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;
const Won = styled.span`
  border: 1px solid #ddd;
  text-align: center;
  font-size: 13px;
  padding: 11px 12px;
  margin: auto 0 auto -1px;
`;
