import React from "react";
import styled from "styled-components";
// import dynamic from "next/dynamic";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

// const DatePicker = dynamic(() => import("./DatePicker"), {
//   ssr: false
// });

export default function OrderTable() {
  return (
    <TableWrap>
      <tbody>
        {/* ---first--- */}
        <TrWrap>
          <Keyword_th>상품명검색</Keyword_th>
          <TdWrap>
            <Search name="looking for">
              <option value="search">상품명</option>
            </Search>
            <TypeBox type="textarea" className="type" />
          </TdWrap>
        </TrWrap>
        {/* ---second--- */}
        <TrWrap>
          <Keyword_th>주문상태</Keyword_th>
          <TdWrap>
            <CheckBoxDiv>
              <input
                type="radio"
                name="state"
                className="orderState"
                value="1"
              />
              <label>주문</label>
            </CheckBoxDiv>
            <CheckBoxDiv>
              <input
                type="radio"
                name="state"
                className="orderState"
                value="2"
              />
              <label>발송</label>
            </CheckBoxDiv>
            <CheckBoxDiv>
              <input
                type="radio"
                name="state"
                className="orderState"
                value="3"
              />
              <label>대기</label>
            </CheckBoxDiv>
            <CheckBoxDiv>
              <input
                type="radio"
                name="state"
                className="orderState"
                value="4"
              />
              <label>취소</label>
            </CheckBoxDiv>
            <CheckBoxDiv>
              <input
                type="radio"
                name="state"
                className="orderState"
                value="5"
              />
              <label>품절</label>
            </CheckBoxDiv>
            <CheckBoxDiv>
              <input
                type="radio"
                name="state"
                className="orderState"
                value="6"
              />
              <label>입금확인</label>
            </CheckBoxDiv>
            <CheckBoxDiv>
              <input
                type="radio"
                name="state"
                className="orderState"
                value="7"
              />
              <label>교환완료</label>
            </CheckBoxDiv>
            <CheckBoxDiv>
              <input
                type="radio"
                name="state"
                className="orderState"
                value="8"
              />
              <label>반품중</label>
            </CheckBoxDiv>
            <CheckBoxDiv>
              <input
                type="radio"
                name="state"
                className="orderState"
                value="9"
              />
              <label>반품완료</label>
            </CheckBoxDiv>
            <CheckBoxDiv>
              <input
                type="radio"
                name="state"
                className="orderState"
                value="10"
              />
              <label>환불대기</label>
            </CheckBoxDiv>
          </TdWrap>
        </TrWrap>
        {/* ---third--- */}
        <TrWrap>
          <Keyword_th>처리일자</Keyword_th>
          <TdWrap>
            <DateWrap>
              <RangePicker onChange={onChange} />
              <TableLi_date>
                <DateTerm>오늘</DateTerm>
              </TableLi_date>
              <TableLi_date>
                <DateTerm>15일</DateTerm>
              </TableLi_date>
              <TableLi_date>
                <DateTerm>한달</DateTerm>
              </TableLi_date>
              <TableLi_date>
                <DateTerm>전체</DateTerm>
              </TableLi_date>
            </DateWrap>
          </TdWrap>
        </TrWrap>
      </tbody>
    </TableWrap>
  );
}

const TableWrap = styled.table`
  border: 1px solid #dddddd;
  border-bottom: none;
  width: 93.5%;
  margin: 0 3rem;
`;
const TrWrap = styled.tr`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dddddd;
`;

const Keyword_th = styled.th`
  border-right: 1px solid #dddddd;
  background-color: #fafafa;
  width: 18%;
  padding: 2.5rem 2rem;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
`;

const TdWrap = styled.td`
  display: inline-block;
  margin-left: 3rem;
  font-size: 1rem;
`;
const TableLi_date = styled(TdWrap)`
  margin-left: 0.5rem;
`;
const CheckBoxDiv = styled.div`
  display: inline-block;
  margin-right: 1.5rem;
`;

const DateWrap = styled(CheckBoxDiv)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const DateTerm = styled.a`
  display: block;
  line-height: 2.3rem;
  padding: 0 1rem;
  margin-left: 1rem;
  color: #333333;
  border: 1px solid #e5e5e5;
  background-color: #e5e5e5;
  cursor: pointer;
  ${DateWrap}:hover & {
    background-color: #007add;
    color: white;
  }
`;
const TextB = styled.b`
  line-height: 2;
  padding: 0 1rem;
  font-size: 1rem;
`;

const Search = styled.select`
  font-size: 0.95rem;
  text-align: center;
  line-height: 1.9rem;
  background-color: white;
  border-radius: 3px;
  padding: 0.5rem;
`;
const TypeBox = styled.input`
  height: 2.2rem;
  width: 30rem;
  margin-left: 0.4rem;
  border-radius: 3px;
  border: 1px solid #b3b3b3;
`;
