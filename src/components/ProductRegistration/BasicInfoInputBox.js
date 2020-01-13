import React from "react";
import styled, { css } from "styled-components";
export default function BasicInfoInputBox({
  basicInfoData,
  basicInfoDataHandler
}) {
  const { category, product_name, brand } = basicInfoData;
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
      <InputWrap>
        <EventArea>
          <SearchWrap title={false}>
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
              value={brand}
              onChange={basicInfoDataHandler}
            />
            <SearchIcon
              src="/assets/images/ui/ico_search.png"
              alt="searchIcon"
            />
          </SearchWrap>
          <BrandCheckBox>
            <BrandExistCheck>브랜드없음</BrandExistCheck>
          </BrandCheckBox>
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
  padding: 15px 24px;
  border-radius: 4px;
  font-size: 14px;
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
