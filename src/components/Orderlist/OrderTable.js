import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { DatePicker } from "antd";
import ProductList from "./ProductList";
import InputRadio from "./Input.Radio";
import axios from "axios";
const { RangePicker } = DatePicker;
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
export default function OrderTable() {
  const [today, setToday] = useState(false);
  const [half, setHalf] = useState(false);
  const [month, setMonth] = useState(false);
  const [total, setTotal] = useState(false);
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    // const token = window.sessionStorage.getItem("access_token");
    // console.log(window.sessionStorage.getItem("access_token"));
  }, []);
  const connect = () => {
    const token = window.sessionStorage.getItem("access_token");
    axios({
      url: "http://18.191.159.217:8080/order/ordersview",
      method: "post",
      headers: {
        Authorization: token
      },
      data: {
        order_status: "1",
        start_date: "2020-01-10 07:09:12.819234",
        end_date: "2020-01-20 07:09:12.819234"
      }
    })
      .then(res => {
        console.log("res: ", res.data.USER_ORDERS);
        setData(res.data.USER_ORDERS);
      })
      .catch(res => {
        console.log("error");
      });
  };
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
  const resetData = () => {
    setData([]);
    console.log(data);
  };
  // const checkState = id => {
  //   switch (id) {
  //     case "1":
  //       setName("주문");
  //     case "2":
  //       setName("발송");
  //     case "3":
  //       setName("대기");
  //     case "4":
  //       setName("취소");
  //     case "5":
  //       setName("품절");
  //     case "6":
  //       setName("입금확인");
  //     case "7":
  //       setName("교환완료");
  //     case "8":
  //       setName("반품중");
  //     case "9":
  //       setName("반품완료");
  //     case "10":
  //       setName("환불대기");
  //     default:
  //       setName("");
  //   }
  //   console.log(id);
  // };
  return (
    <>
      <TableWrap>
        <tbody>
          <TrWrap>
            <Keyword_th>주문상태</Keyword_th>
            <TdWrap>
              <InputRadio
                options={[
                  { value: 1, label: "주문" },
                  { value: 2, label: "발송" },
                  { value: 3, label: "대기" },
                  { value: 4, label: "취소" },
                  { value: 5, label: "품절" },
                  { value: 6, label: "입금확인" },
                  { value: 7, label: "교환완료" },
                  { value: 8, label: "반품중" },
                  { value: 9, label: "반품완료" },
                  { value: 10, label: "환불대기" }
                ]}
                // name="radio_state"
                // onChange={checkState}
              />
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
                    일년
                  </DateTerm>
                </TableLi_date>
              </DateWrap>
            </TdWrap>
          </TrWrap>
        </tbody>
      </TableWrap>
      <OrderBtn>
        <Btn1 onClick={connect}>검색하기</Btn1>
        <Btn2 onClick={resetData}>초기화</Btn2>
      </OrderBtn>
      <ProductList dataArr={data} />
    </>
  );
}
const TableWrap = styled.table`
  border: 1px solid #dddddd;
  border-bottom: none;
  width: 92%;
  margin: 0 auto;
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
const CheckBoxDiv = styled.div`
  display: inline-block;
  margin-right: 1.5rem;
`;
const TdWrap = styled.td`
  display: inline-block;
  margin-left: 3rem;
  font-size: 1rem;
`;
const TableLi_date = styled(TdWrap)`
  margin-left: 0.5rem;
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
const OrderBtn = styled.div`
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 5rem;
  text-align: center;
`;
const Btn1 = styled.a`
  background: linear-gradient(
    150deg,
    rgba(55, 209, 187, 1) 0%,
    rgba(25, 177, 214, 1) 50.6%,
    rgba(0, 150, 236, 1) 100%
  );
  margin-right: 1rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
  display: inline-block;
  width: 14rem;
  padding: 1rem 0;
  border-radius: 2px;
`;
const Btn2 = styled(Btn1)`
  background: #e5e5e5;
  color: black;
  font-weight: normal;
`;
// const Search = styled.select`
//   font-size: 0.95rem;
//   text-align: center;
//   line-height: 1.9rem;
//   background-color: white;
//   border-radius: 3px;
//   padding: 0.5rem;
// `;
// const TypeBox = styled.input`
//   height: 2.2rem;
//   width: 30rem;
//   margin-left: 0.4rem;
//   border-radius: 3px;
//   border: 1px solid #b3b3b3;
// `;
