import React, { useState } from "react";
import Layout from "../components/layouts/Layout";
import styled, { css } from "styled-components";
import ChargeList from "../components/Charge/ChargeList";
Charge.Layout = Layout;

export default function Charge() {
  return (
    <ChargeWrapper>
      <ChargeDetails>
        <Header>
          <HeaderImg src="/assets/images/charge/charge_title_icon.png"></HeaderImg>
          <HeaderH2>충전금내역</HeaderH2>{" "}
          <HeaderP>충전금 내역을 확인하세요</HeaderP>
        </Header>
        <MyCurrentCharge>
          <MyCurrentChargeComment>
            현재 나의 충전금은<MyCash>13,743,050</MyCash>원 입니다.
          </MyCurrentChargeComment>
        </MyCurrentCharge>
        <ChargeMoneyBtn>
          6,256,950 원 <br />
          충전하기
        </ChargeMoneyBtn>
      </ChargeDetails>
      <ChargeSearch>
        <KeywordSalesWrap>
          <KeywordSearchBorder>
            <Title>키워드검색(통합)</Title>
            <Area>
              <CombineSearchText>통합검색</CombineSearchText>
              <CombineSearchBtn src="/assets/images/ui/select2_bottom.png"></CombineSearchBtn>
              <CombineSearchInput />
            </Area>
          </KeywordSearchBorder>
          <SalesDayPeriod>
            <Title>판매기간</Title>
            <Area>
              <SalesStartPeriod>20190528</SalesStartPeriod>
              <StartEndSpan>-</StartEndSpan>
              <SalesEndPeriod>20190529</SalesEndPeriod>
              <PeriodConditionWrapper>
                <SalesPeriodCondition>오늘</SalesPeriodCondition>
                <SalesPeriodCondition>일주일</SalesPeriodCondition>
                <SalesPeriodCondition>15일</SalesPeriodCondition>
                <SalesPeriodCondition>한달</SalesPeriodCondition>
                <SalesPeriodCondition>두달</SalesPeriodCondition>
                <SalesPeriodCondition>전체</SalesPeriodCondition>
              </PeriodConditionWrapper>
            </Area>
          </SalesDayPeriod>
        </KeywordSalesWrap>
        <SearchTwoBtnWrapper>
          <SearchBtn>검색하기</SearchBtn>
          <SearchReInit>초기화</SearchReInit>
        </SearchTwoBtnWrapper>
      </ChargeSearch>
      <SearchResult>
        <ChargeList name="입금내역 보기" />
        <ChargeList name="출금내역 보기" />
      </SearchResult>
    </ChargeWrapper>
  );
}
const ChargeWrapper = styled.div`
  background-color: #fafafa;
  padding: 12px 12px;
`;

const ChargeDetails = styled.section`
  width: 90%;
  border-radius: 4px;
  background-color: #fdfdfd;
  margin: 24px auto 0;
  padding: 24px 24px;
  border: 1px solid #ddd;
`;
const Header = styled.div`
  display: flex;
`;
const HeaderImg = styled.img`
  width: 48px;
  height: auto;
`;
const HeaderH2 = styled.h2`
  color: #007add;
  margin: auto 0;
  font-size: 22px;
  margin-left: 16px;
`;
const HeaderP = styled.p`
  color: #007add;
  margin: auto 0;
  font-size: 13px;
  margin-left: 12px;
`;
const MyCurrentCharge = styled.div`
  max-width: 1380px;
  margin: 16px auto;
  width: 96%;
  padding: 26px 0px 10px;
  background: -moz-linear-gradient(
    0% 50% 0deg,
    rgba(55, 209, 187, 1) 0%,
    rgba(0, 135, 239, 1) 100%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(55, 209, 187, 1) 0%,
    rgba(0, 135, 239, 1) 100%
  );
  background: -webkit-gradient(
    linear,
    0% 50%,
    100% 50%,
    color-stop(0, rgba(55, 209, 187, 1)),
    color-stop(1, rgba(0, 135, 239, 1))
  );
  background: -o-linear-gradient(
    0deg,
    rgba(55, 209, 187, 1) 0%,
    rgba(0, 135, 239, 1) 100%
  );
  background: -ms-linear-gradient(
    0deg,
    rgba(55, 209, 187, 1) 0%,
    rgba(0, 135, 239, 1) 100%
  );
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#37D1BB', endColorstr='#0087EF' ,GradientType=0)";
  background: linear-gradient(
    90deg,
    rgba(55, 209, 187, 0.3) 0%,
    rgba(0, 135, 239, 0.3) 100%
  );
  border-style: Solid;
  border-color: #007add;
  border-color: rgba(0, 122, 221, 0.3);
  border-width: 1px;
  border-radius: 4px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  filter: alpha(opacity=30) progid: DXImageTransform.Microsoft.Alpha(opacity=30)
    progid:
    DXImageTransform.Microsoft.gradient(
      startColorstr= "#37D1BB",
      endColorstr= "#0087EF",
      GradientType=1
    );
`;
const MyCurrentChargeComment = styled.p`
  text-align: center;
  font-size: 20px;
  letter-spacing: 0px;
`;
const MyCash = styled.span`
  font-size: 24px;
  font-weight: bold;
  padding: 6px 20px;
`;
const BtnWrapper = styled.div``;
const ChargeMoneyBtn = styled.button`
  display: block;
  font-size: 16px;
  margin: 0 auto;
  background-color: #007add;
  padding: 10px 64px;
  border-radius: 4px;
  border: 1px solid #fdfdfd;
  color: #fafafa;
`;

const ChargeSearch = styled(ChargeDetails)``;
const KeywordSalesWrap = styled.div`
  border: 0.5px solid #ddd;
  border-radius: 4px;
`;
const KeywordSearchBorder = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
`;
const Title = styled.div`
  border-bottom: 0.5px solid #ddd;
  border-right: 0.5px solid #ddd;
  border-left: 0.5px solid #ddd;
  text-align: center;
  padding: 10px 16px;
  width: 20%;
  font-size: 13px;
  background-color: #fafafa;
`;
const Area = styled.div`
  width: 100%;
  border-bottom: 0.5px solid #ddd;
  padding: 12px 32px;
  display: flex;
`;
const SalesDayPeriod = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
`;

const SearchResult = styled(ChargeDetails)`
  display: flex;
`;

const CombineSearchText = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px 0px 0px 4px;
  padding: 6px 32px;
  font-size: 12px;
`;
const CombineSearchBtn = styled.span`
  background-image: url("/assets/images/ui/select2_bottom.png");
  background-repeat: no-repeat;
  background-size: 16px auto;
  background-position: 6px 9px;
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  border-radius: 0px 4px 4px 0px;
  width: 30px;
  background-color: #eee;
`;
const CombineSearchInput = styled.input`
  border: 1px solid #eee;
  width: 40%;
  margin-left: 28px;
  padding: 6px 32px;
`;
const SalesStartPeriod = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 12px;
  padding: 6px 28px;
`;
const StartEndSpan = styled.span`
  padding: 6px 8px;
`;
const SalesEndPeriod = styled(SalesStartPeriod)``;

const PeriodConditionWrapper = styled.div`
  display: flex;
  margin-left: 12px;
  width: 50%;
  justify-content: space-around;
`;
const SalesPeriodCondition = styled.span`
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 12px;
  background-color: #eee;
`;
const SearchTwoBtnWrapper = styled.div`
  text-align: center;
  padding: 32px 0 0;
`;

const SearchBtn = styled.button`
  padding: 12px 52px;
  border-radius: 4px;
  border: 1px solid #fdfdfd;
  font-size: 16px;
  background: -moz-linear-gradient(
    32.79% -79.57% -60deg,
    rgba(55, 209, 187, 1) 0%,
    rgba(25, 177, 214, 1) 50.6%,
    rgba(0, 150, 236, 1) 100%
  );
  background: -webkit-linear-gradient(
    -60deg,
    rgba(55, 209, 187, 1) 0%,
    rgba(25, 177, 214, 1) 50.6%,
    rgba(0, 150, 236, 1) 100%
  );
  background: -webkit-gradient(
    linear,
    32.79% -79.57%,
    67.21% 179.57%,
    color-stop(0, rgba(55, 209, 187, 1)),
    color-stop(0.506, rgba(25, 177, 214, 1)),
    color-stop(1, rgba(0, 150, 236, 1))
  );
  background: -o-linear-gradient(
    -60deg,
    rgba(55, 209, 187, 1) 0%,
    rgba(25, 177, 214, 1) 50.6%,
    rgba(0, 150, 236, 1) 100%
  );
  background: -ms-linear-gradient(
    -60deg,
    rgba(55, 209, 187, 1) 0%,
    rgba(25, 177, 214, 1) 50.6%,
    rgba(0, 150, 236, 1) 100%
  );
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#37D1BB', endColorstr='#0096EC' ,GradientType=0)";
  background: linear-gradient(
    150deg,
    rgba(55, 209, 187, 1) 0%,
    rgba(25, 177, 214, 1) 50.6%,
    rgba(0, 150, 236, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#37D1BB', endColorstr='#0096EC', GradientType=1);
  color: #fff;
`;
const SearchReInit = styled.button`
  padding: 12px 52px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 16px;
  margin-left: 16px;
`;
const ChargeListDetails = styled(ChargeDetails)`
  border: 1px solid red;
`;
const ChargeH3 = styled.h3`
  border: 1px solid blue;
  font-size: 20px;
  font-weight: bold;
`;
const ChargeListBox = styled.table`
  border: 1px solid red;
  width: 100%;
`;
