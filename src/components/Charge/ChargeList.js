import React from "react";
import styled, { css } from "styled-components";
export default function ChargeList({ name }) {
  return (
    <ChargeListDetails>
      <ChargeH3>{name}</ChargeH3>
      <ChargeListBox>
        {" "}
        <thead>
          <tr>
            <th>발생일자</th>
            <th>주문코드</th>
            <th>발생내역</th>
            <th>적립금</th>
            <th>적립금잔액</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              2019-06-13
              <br />
              09:32
            </td>
            <td>201905290402366907A</td>
            <td>적립금 충전</td>
            <td>+2,500</td>
            <td>59,793</td>
          </tr>
          <tr>
            <td>
              2019-06-13
              <br />
              09:32
            </td>
            <td>201905290402366907A</td>
            <td>적립금 충전</td>
            <td>+2,500</td>
            <td>59,793</td>
          </tr>
          <tr>
            <td>
              2019-06-13
              <br />
              09:32
            </td>
            <td>201905290402366907A</td>
            <td>적립금 충전</td>
            <td>+2,500</td>
            <td>59,793</td>
          </tr>
          <tr>
            <td>
              2019-06-13
              <br />
              09:32
            </td>
            <td>201905290402366907A</td>
            <td>적립금 충전</td>
            <td>+2,500</td>
            <td>59,793</td>
          </tr>
          <tr>
            <td>
              2019-06-13
              <br />
              09:32
            </td>
            <td>201905290402366907A</td>
            <td>적립금 충전</td>
            <td>+2,500</td>
            <td>59,793</td>
          </tr>
        </tbody>
      </ChargeListBox>
    </ChargeListDetails>
  );
}
const ChargeListDetails = styled.div`
  width: 100%;
  border-radius: 4px;
  background-color: #fdfdfd;
  margin: 12px auto 0;
  padding: 32px 24px;
  word-break: break-all;
`;
const ChargeH3 = styled.h3`
  font-size: 18px;
  font-weight: bold;
  padding: 0 18px;
`;
const ChargeListBox = styled.table`
  border: 1px solid red;
  width: 100%;
  font-size: 12px;
  margin-top: 24px;
  border-collapse: collapse;
  color: #414141;
  th {
    background-color: #7bbabc;
    color: #fafafa;
  }
  th,
  td {
    border: 1px solid #ddd;
    text-align: center;
    vertical-align: middle;
    padding: 6px 4px;
  }
  tr:nth-child(2n) {
    background-color: #fafafa;
  }
  td {
    height: 32px;
  }
  th:nth-child(2) {
    width: 20%;
  }
  th:nth-child(3) {
    width: 30%;
  }
`;
