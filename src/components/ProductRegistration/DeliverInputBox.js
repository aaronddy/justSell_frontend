import React from "react";
import styled, { css } from "styled-components";
import DaumPostcode from "react-daum-postcode";

export default function BasicInfoInputBox() {
  const handleAddress = data => {
    let fullAddress = data.address;
    let extraAddress = "";
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };
  return (
    <CheckAreaWrapper>
      {/* 카테고리 */}
      <InputWrap>
        <Title>
          <h3>택배사</h3>
        </Title>
        <EventArea>
          <SearchWrap>
            <SearchInput type="text" placeholder="택배사 조회" />
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
      <InputWrap>
        <Title>
          <h3>출고지</h3>
        </Title>
        <EventArea>
          <DaumPostcode onComplete={handleAddress} width="400" />
        </EventArea>
      </InputWrap>
      {/* 브랜드 */}
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
  padding: 15px 24px;
  border-radius: 4px;
  font-size: 14px;
`;
const SearchWrap = styled.div`
  position: relative;
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
  width: 85%;
  padding: 16px 0 16px 12px;
  font-size: 16px;
  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;
const ProductLength = styled.div`
  margin: auto 0;
  padding-left: 8px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
`;
const Length = styled.span`
  color: black;
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

const DeliverPrice = styled.div`
  margin: auto 0;
  color: #0d99de;
`;
