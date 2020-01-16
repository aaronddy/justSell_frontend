import React, { useState } from "react";
import Layout from "../components/layouts/Layout";
import styled from "styled-components";
import RegistrationBox from "../components/ProductRegistration/RegistrationBox";
import BasicInfoInputBox from "../components/ProductRegistration/BasicInfoInputBox";
import SalesInfoBox from "../components/ProductRegistration/SalesInfoBox";
import ImageInfoInputBox from "../components/ProductRegistration/ImageInfoInputBox";
import DeliveryInputBox from "../components/ProductRegistration/DeliveryInputBox";
import ExtraInfoInputBox from "../components/ProductRegistration/ExtraInfoInputBox";
import axios from "axios";
ProductRegistration.Layout = Layout;

const filterList = [
  "start_delivery_address_RJ",
  "return_delivery_address_RJ",
  "start_delivery_address_extraddress",
  "return_delivery_address_extraddress"
];

export default function ProductRegistration() {
  const [basicInfoData, setBasicInfoData] = useState({
    category: "",
    product_name: "",
    brand: ""
  });
  const [salesInfoData, setSalesInfoData] = useState({
    product_tax: true,
    supply_price: null,
    sale_price: null,
    stock_amount: null,
    minimum_buying: null,
    vendorcode: ""
  });
  //상품상세설명(에디터 작성만되도록 작업)
  const [detail_image, setDetail_image] = useState("");
  const [deliveryInfoData, setDeliveryInfoData] = useState({
    delivery_company: "",
    delivery_fee: "2500",
    return_delivery_fee: "",
    start_delivery_address_RJ: "",
    start_delivery_address: "",
    start_delivery_address_sigungucode: "",
    start_delivery_address_extraddress: "",
    return_delivery_address_RJ: "",
    return_delivery_address: "",
    return_delivery_address_sigungucode: "",
    return_delivery_address_extraddress: ""
  });

  const [extraInfoData, setExtraInfoData] = useState({
    search_keyword: "",
    adult_restricted: false
  });
  const basicInfoDataHandler = e => {
    const { name, value } = e.target;
    setBasicInfoData({ ...basicInfoData, [name]: value });
  };
  const salesInfoDataHandler = e => {
    const { name, value } = e.target;
    setSalesInfoData({ ...salesInfoData, [name]: value });
  };
  //product_tax toggle
  const salesInfoToggleDataHandler = value => () => {
    setSalesInfoData({ ...salesInfoData, product_tax: value });
  };
  const deliveryInfoDataHandler = e => {
    const { name, value } = e.target;
    setDeliveryInfoData({ ...deliveryInfoData, [name]: value });
  };
  const startDeliveryHandler = data => {
    if (data.userSelectedType === "R") {
      setDeliveryInfoData(prevState => ({
        ...prevState,
        ["start_delivery_address_RJ"]: "[도로명]",
        ["start_delivery_address"]: data.address,
        ["start_delivery_address_sigungucode"]: data.sigunguCode
      }));
    } else if (data.userSelectedType === "J") {
      setDeliveryInfoData(prevState => ({
        ...prevState,
        ["start_delivery_address_RJ"]: "[지번]",
        ["start_delivery_address"]: data.address,
        ["start_delivery_address_sigungucode"]: data.sigunguCode
      }));
    }
  };
  const returnDeliveryHandler = data => {
    if (data.userSelectedType === "R") {
      setDeliveryInfoData(prevState => ({
        ...prevState,
        ["return_delivery_address_RJ"]: "[도로명]",
        ["return_delivery_address"]: data.address,
        ["return_delivery_address_sigungucode"]: data.sigunguCode
      }));
    } else if (data.userSelectedType === "J") {
      setDeliveryInfoData(prevState => ({
        ...prevState,
        ["return_delivery_address_RJ"]: "[지번]",
        ["return_delivery_address"]: data.address,
        ["return_delivery_address_sigungucode"]: data.sigunguCode
      }));
    }
  };
  const extraInfoDataHandler = e => {
    const { name, value } = e.target;
    setExtraInfoData(prevState => ({ ...prevState, [name]: value }));
  };

  const sendProductDataToServer = () => {
    const filterDeliveryInfoData = Object.keys(deliveryInfoData)
      .filter(item => !filterList.includes(item))
      .reduce((acc, cur) => {
        acc[cur] = deliveryInfoData[cur];
        return acc;
      }, {});
    console.log("filterDeliveryInfoData: ", filterDeliveryInfoData);
    let WholeInfoData = {
      ...basicInfoData,
      ...salesInfoData,
      ...filterDeliveryInfoData,
      start_delivery_address: `${deliveryInfoData.start_delivery_address} ${deliveryInfoData.start_delivery_address_extraddress}`,
      return_delivery_address: `${deliveryInfoData.return_delivery_address} ${deliveryInfoData.return_delivery_address_extraddress}`,
      ...extraInfoData
    };
    console.log("WholeInfoData: ", WholeInfoData);
    axios
      // .post("http://3.15.9.70:8080/product/productregister", WholeInfoData)
      .post(
        "http://18.191.159.217:8080/product/productregister",
        WholeInfoData,
        {
          headers: {
            Authorization:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTB9._kxKiFvfLCk0TNHAXxowRQf3_PK9BVw4KngMH0cB6m8"
          }
        }
      )
      .then(res => {
        console.log("then res: ", res);
        console.log("then res.data: ", res.data);
      })
      .catch(error => console.log(error));

    ////필드값 존재여부검사(보완필요)
    // let checkInput = Object.values(WholeInfoData).reduce((acc, cur) => {
    //   if (!cur) return false;
    //   else return acc && cur;
    // }, true);
  };
  return (
    <Wrapper>
      <H2Wrapper>
        <H2>상품등록</H2>
        <RegistrationBox
          name="기본등록"
          status="상품명(입력안함) / 판매유형(일반) / 상품유형(새상품) / 브랜드(없음) / 제조사(없음) /
          담당MD(선택안함) / 노출여부(노출)"
        >
          <BasicInfoInputBox
            basicInfoData={basicInfoData}
            basicInfoDataHandler={basicInfoDataHandler}
          />
        </RegistrationBox>
        <RegistrationBox
          name="판매정보"
          status=" 판매가격(입력안함) / 과세 / 판매기간(2020-01-12 ~ 2037-12-31) / 재고수량(입력안함)"
        >
          <SalesInfoBox
            salesInfoData={salesInfoData}
            salesInfoDataHandler={salesInfoDataHandler}
            salesInfoToggleDataHandler={salesInfoToggleDataHandler}
          />
        </RegistrationBox>
        <RegistrationBox name="이미지 정보">
          <ImageInfoInputBox
            detail_image={detail_image}
            setDetail_image={setDetail_image}
          />
        </RegistrationBox>
        <RegistrationBox
          name="배송 정보"
          status="일반-택배배송 / 상품별배송 / 조건부 무료(2,500 (1,000,000원 이상 구매시 무료)) /반품/교환 배송비(편도),3000원"
        >
          <DeliveryInputBox
            deliveryInfoData={deliveryInfoData}
            startDeliveryHandler={startDeliveryHandler}
            returnDeliveryHandler={returnDeliveryHandler}
            deliveryInfoDataHandler={deliveryInfoDataHandler}
          />
        </RegistrationBox>
        <RegistrationBox
          name="부가 정보"
          status="검색키워드(입력안함) 19금(제한안함)"
        >
          <ExtraInfoInputBox
            extraInfoData={extraInfoData}
            extraInfoDataHandler={extraInfoDataHandler}
          />
        </RegistrationBox>
        <EnrollWrapper>
          <EnrollButton onClick={sendProductDataToServer}>
            등록하기
          </EnrollButton>
        </EnrollWrapper>
      </H2Wrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
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
const EnrollWrapper = styled.div`
  text-align: right;
`;
const EnrollButton = styled.button`
  border-radius: 4px;
  border: 2px solid #448aff;
  background-color: #0891e4;
  font-size: 16px;
  color: #fafafa;
  padding: 12px 64px;
`;
