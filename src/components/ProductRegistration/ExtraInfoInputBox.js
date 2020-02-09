import React, { useState } from "react";
import styled, { css } from "styled-components";
export default function ExtraInfoInputBox({
  extraInfoData,
  extraInfoDataHandler
}) {
  const { search_keyword, adult_restricted } = extraInfoData;
  const [isAdultChecked, setIsAdultChecked] = useState(false);
  const toggleIsAdultChecked = () => {
    setIsAdultChecked(!isAdultChecked);
  };

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
              placeholder="키워드 설정 예)운동화"
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
          <AdultButtonStrict
            onClick={toggleIsAdultChecked}
            isAdultChecked={isAdultChecked}
          >
            제한
          </AdultButtonStrict>
          <AdultButtonUnStrict
            onClick={toggleIsAdultChecked}
            isAdultChecked={!isAdultChecked}
          >
            제한안함
          </AdultButtonUnStrict>
        </EventArea>
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
  margin: auto 0;
  width: 15%;
  font-size: 15px;
  font-weight: medium;
  color: #1a1a1a;
  padding: 14px 20px;
  text-align: right;
`;
const EventArea = styled.div`
  width: 93%;
  display: flex;
  margin: auto 0;
`;
const InputWrap = styled.div`
  display: flex;
  margin-top: 12px;
`;
const CategorySearchButton = styled.button`
  border-radius: 4px;
  border: 1px solid #0d99de;
  color: #0d99de;
  padding: 12px 24px;
  border-radius: 4px;
  margin-left: 12px;
  font-size: 13px;
  background-color: white;
`;
const SearchWrap = styled.div`
  position: relative;
`;
const SearchInput = styled.input`
  padding: 12px 108px 12px 12px;
  font-size: 13px;
  border: 1px solid #ddd;
  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

const AdultButtonStrict = styled.button`
  background-color: #fc6060;
  border: 1px solid #ddd;
  color: #fafafa;
  padding: 12px 28px;
  font-size: 14px;
  :focus {
    outline: none;
  }
  ${props =>
    !props.isAdultChecked &&
    css`
      background-color: #ffffff;
      border: 1px solid #ddd;
      color: #212121;
      margin-left: 0px;
    `}
`;
const AdultButtonUnStrict = styled.button`
  background-color: #ddd;
  border: 1px solid #ddd;
  color: #212121;
  padding: 12px 18px;
  font-size: 14px;
  ${props =>
    !props.isAdultChecked &&
    css`
      background-color: #ffffff;
      border: 1px solid #ddd;
      border-left: none;
      color: #212121;
      margin-left: 0px;
    `}
`;
