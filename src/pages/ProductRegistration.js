import React, { useState } from "react";
import Layout from "../components/layouts/Layout";
import styled from "styled-components";
import RegistrationBox from "../components/ProductRegistration/RegistrationBox";
import BasicInfoInputBox from "../components/ProductRegistration/BasicInfoInputBox";
import SalesInfoBox from "../components/ProductRegistration/SalesInfoBox";
import ImageInfoInputBox from "../components/ProductRegistration/ImageInfoInputBox";
import DeliverInputBox from "../components/ProductRegistration/DeliverInputBox";
ProductRegistration.Layout = Layout;

export default function ProductRegistration() {
  return (
    <Wrapper>
      <H2Wrapper>
        <H2>상품등록</H2>
        <RegistrationBox
          name="기본등록"
          status="상품명(입력안함) / 판매유형(일반) / 상품유형(새상품) / 브랜드(없음) / 제조사(없음) /
          담당MD(선택안함) / 노출여부(노출)"
        >
          <BasicInfoInputBox />
        </RegistrationBox>
        <RegistrationBox
          name="판매정보"
          status=" 판매가격(입력안함) / 과세 / 판매기간(2020-01-12 ~ 2037-12-31) / 재고수량(입력안함)"
        >
          <SalesInfoBox />
        </RegistrationBox>
        <RegistrationBox name="이미지 정보">
          <ImageInfoInputBox />
        </RegistrationBox>
        <RegistrationBox name="배송 정보">
          <DeliverInputBox />
        </RegistrationBox>
      </H2Wrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  border: 1px solid greenyellow;
  padding: 32px 0;
`;

const H2Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 32px 0 16px;
  position: relative;
  min-height: auto;
`;
const H2 = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;
