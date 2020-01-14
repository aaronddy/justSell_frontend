import React from "react";
import styled, { css } from "styled-components";
export default function ExtraInfoInputBox({
  extraInfoData,
  extraInfoDataHandler
}) {
  const { search_keyword, adult_restricted } = extraInfoData;
  return (
    <CheckAreaWrapper>
      {/* 검색키워드로 검색 */}
      <InputWrap>
        <Title>
          <h3>
            검색키워드
            <br />
            (제휴채널)
          </h3>
        </Title>
        <EventArea>
          <SearchWrap>
            <SearchInput
              type="text"
              placeholder="키워드로 검색 예)운동화"
              name="search_keyword"
              value={search_keyword}
              onChange={extraInfoDataHandler}
            />
            <CategorySearchButton>추가</CategorySearchButton>
          </SearchWrap>
        </EventArea>
      </InputWrap>
      <InputWrap>
        <Title>
          <h3>19금제한</h3>
        </Title>
        <EventArea>
          <AdultButton clicked={true}>제한</AdultButton>
          <AdultButton clicked={false}>제한안함</AdultButton>
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
  border-radius: 4px;
  border: 1px solid #0d99de;
  color: #0d99de;
  padding: 17px 24px;
  border-radius: 4px;
  margin-left: 12px;
  font-size: 14px;
  background-color: white;
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
const AdultButton = styled.button`
  background-color: #fafafa;
  border: 1px solid #ddd;
  color: #212121;
  padding: 12px 28px;
  font-size: 14px;
  ${props =>
    !props.clicked &&
    css`
      background-color: #ddd;
      border: 1px solid #ddd;
      color: #212121;
      margin-left: 0px;
    `}
`;
