import React, { useState } from "react";
import styled, { css } from "styled-components";
export default function BasicInfoInputBox({
  basicInfoData,
  basicInfoDataHandler
}) {
  const { category, product_name, brand } = basicInfoData;
  const [isBrandChecked, setIsBrandChecked] = useState(true);
  const toggleIsBrandChecked = () => {
    setIsBrandChecked(!isBrandChecked);
  };

  return (
    <CheckAreaWrapper>
      {/* 카테고리 */}
      <InputWrap>
        <Title>
          <h3>카테고리</h3>
        </Title>
        <EventArea>
          <CategorySearchButton>카테고리명 검색</CategorySearchButton>
        </EventArea>
      </InputWrap>
      {/* 키워드로 검색 */}
      <InputWrap marginTop={"0"}>
        <Title></Title>
        <EventArea>
          <SearchWrap>
            <SearchInput
              type="text"
              name="category"
              placeholder="키워드로 검색 예)운동화"
              value={category}
              onChange={basicInfoDataHandler}
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
          <h3>상품명</h3>
        </Title>
        <EventArea>
          <ProductNameInput
            type="text"
            placeholder="판매할 상품에 적합한 상품명을 입력해주세요. 최대(70자)"
            name="product_name"
            value={product_name}
            onChange={basicInfoDataHandler}
          />
          <ProductLength>
            <Length>0</Length>/70자
          </ProductLength>
        </EventArea>
      </InputWrap>
      {/* 브랜드 */}
      <InputWrap>
        <Title>
          <h3>브랜드</h3>
        </Title>
        <EventArea>
          <SearchWrap title={true}>
            <BrandSearch
              type="text"
              placeholder="브랜드명을 검색하세요"
              name="brand"
              value={brand}
              disabled={isBrandChecked ? "disabled" : ""}
              isBrandChecked={isBrandChecked}
              onChange={basicInfoDataHandler}
            />
            <SearchIcon
              src="/assets/images/ui/ico_search.png"
              alt="searchIcon"
            />
          </SearchWrap>
          <BrandCheckBox>
            <BrandExistCheck
              isBrandChecked={isBrandChecked}
              onClick={toggleIsBrandChecked}
            >
              브랜드없음
            </BrandExistCheck>
          </BrandCheckBox>
        </EventArea>
      </InputWrap>
    </CheckAreaWrapper>
  );
}

const CheckAreaWrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0px auto 24px;
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
  ${props =>
    props.marginTop &&
    css`
      margin-top: ${props.marginTop}px;
    `}
`;
const CategorySearchButton = styled.button`
  display: block;
  margin: auto 0;
  background-color: #0891e4;
  border: 1px solid #0d99de;
  color: white;
  padding: 8px 18px;
  border-radius: 3px;
  font-size: 14px;
`;
const SearchWrap = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  display: block;
  margin: auto 0;
  padding: 12px 108px 12px 12px;
  font-size: 14px;
  border: 1px solid #ddd;
  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

const SearchIcon = styled.img`
  display: inline-block;
  position: absolute;
  top: 27%;
  right: 2%;
  width: 24px;
  height: 22px;
`;

const ProductNameInput = styled.input`
  display: block;
  margin: auto 0;
  width: 85%;
  padding: 16px 12px;
  border: 1px solid #ddd;
  font-size: 14px;
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
  display: block;
  margin: auto 0;
  font-size: 14px;
  padding: 16px 108px 16px 12px;
  border: 1px solid #ddd;
  background-color: #ffffff;
  cursor: default;
  ::placeholder {
    color: #aaa;
  }
  ${props =>
    props.isBrandChecked &&
    css`
      background-color: #f5f5f5;
    `}
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
    background-position: 0px 0;
  }
  ${props =>
    props.isBrandChecked &&
    css`
      :before {
        background-position: -20px 0;
      }
    `}
`;
