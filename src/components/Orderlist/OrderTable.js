import React, { useState } from "react";
import styled, { css } from "styled-components";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

export default function OrderTable() {
  const [today, setToday] = useState(false);
  const [half, setHalf] = useState(false);
  const [month, setMonth] = useState(false);
  const [total, setTotal] = useState(false);

  const clickHandler = id => {
    if (id === "1") {
      setToday(!today);
    } else if (id === "2") {
      setHalf(!half);
    } else if (id === "3") {
      setMonth(!month);
    } else if (id === "4") {
      setTotal(!total);
      setToday(false);
      setHalf(false);
      setMonth(false);
    }
    console.log(id);
  };

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
                <DateTerm
                  onClick={() => {
                    clickHandler("1");
                  }}
                  today={today}
                >
                  오늘
                </DateTerm>
              </TableLi_date>
              <TableLi_date>
                <DateTerm
                  onClick={() => {
                    clickHandler("2");
                  }}
                  half={half}
                >
                  15일
                </DateTerm>
              </TableLi_date>
              <TableLi_date>
                <DateTerm
                  onClick={() => {
                    clickHandler("3");
                  }}
                  month={month}
                >
                  한달
                </DateTerm>
              </TableLi_date>
              <TableLi_date>
                <DateTerm
                  onClick={() => {
                    clickHandler("4");
                  }}
                  total={total}
                >
                  전체
                </DateTerm>
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
const DateTerm = styled.button`
  display: block;
  line-height: 2.3rem;
  padding: 0 1rem;
  margin-left: 1rem;
  color: black;
  border: 1px solid #e5e5e5;
  background-color: #e5e5e5;
  cursor: pointer;
  outline: none;
  ${props =>
    props.today &&
    css`
      background-color: #007add;
      color: white;
    `}
    ${props =>
      props.half &&
      css`
        background-color: #007add;
        color: white;
      `}
    ${props =>
      props.month &&
      css`
        background-color: #007add;
        color: white;
      `}
    ${props =>
      props.total &&
      css`
        background-color: #007add;
        color: white;
      `}
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
