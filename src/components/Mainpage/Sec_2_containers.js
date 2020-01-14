import React from "react";
import styled from "styled-components";

export default function Sec_2_containers() {
  return (
    <div>
      <List>
        <Listli>
          {/* <ListOrder></ListOrder> */}
          {/* <Arrow></Arrow> */}
          <ListHead></ListHead>
          {/* <Arrow></Arrow> */}
          <ListBody>
            <div class="list_body_text_wrap">
              <BodyH1>충전금 충전</BodyH1>
              <BodyH2>
                일정 금액의
                <br />
                충전금을 충전합니다.
              </BodyH2>
            </div>
          </ListBody>
        </Listli>
        <Listli>
          <ListHead2></ListHead2>
          <ListBody2>
            <div class="list_body_text_wrap">
              <BodyH1>매출발생</BodyH1>
              <BodyH2>
                소비자가 상품을 구매하면
                <br />
                매입가에 이익을 붙인
                <br />
                소비자가로 매출이 발생합니다.
              </BodyH2>
            </div>
          </ListBody2>
        </Listli>
        <Listli>
          <ListHead3></ListHead3>
          <ListBody3>
            <div class="list_body_text_wrap">
              <BodyH1>충전금으로 상품 매입</BodyH1>
              <BodyH2>
                판매된 상품을 충전금을 이용해
                <br />
                저스트셀에서 매입합니다.
              </BodyH2>
            </div>
          </ListBody3>
        </Listli>
        <Listli>
          <ListHead4></ListHead4>
          <ListBody4>
            <div class="list_body_text_wrap">
              <BodyH1>수익</BodyH1>
              <BodyH2>
                발생하는 수익을
                <br />
                분배합니다.
              </BodyH2>
            </div>
          </ListBody4>
        </Listli>
      </List>
    </div>
  );
}

const List = styled.ul`
  margin: 0 auto;
  margin-top: 7rem;
  text-align: center;
`;
const Listli = styled.li`
  max-width: 17.75rem;
  display: inline-block;
  background-color: #fff;
  border-radius: 1.75rem;
  margin-right: 2.6rem;
  vertical-align: top;
  box-shadow: 3px 0px 23px -10px #d4dff8;
`;

const ListHead = styled.div`
  background-color: #fff;
  width: 100%;
  height: 10rem;
  border-radius: 1.75rem 1.75rem 0 0;
  width: 17.75rem;
  height: 15.6rem;
  background-image: url("/assets/images/main_list_img_1.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 9rem;
  position: relative;
`;

const ListHead2 = styled(ListHead)`
  background-image: url("/assets/images/main_list_img_2.png");
`;

const ListHead3 = styled(ListHead)`
  background-image: url("/assets/images/main_list_img_3.png");
`;

const ListHead4 = styled(ListHead)`
  background-image: url("/assets/images/main_list_img_4.png");
`;

const Arrow = styled.div`
  content: "dd";
  position: absolute;
  background-image: url("/assets/images/main_list_right.png");
  background-repeat: no-repeat;
  background-size: 100%;
  width: 2rem;
  height: 3.2rem;
  text-align: center;
  line-height: 3.9rem;
  color: #fff;
  font-size: 1.5rem;
  top: 50%;
  margin-top: -1.6rem;
  right: -2rem;
`;
const ListBody = styled.div`
  background-color: #2bc6ba;
  border-radius: 0 0 1.75rem 1.75rem;
  height: 13rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListBody2 = styled(ListBody)`
  background-color: #38afb2;
`;

const ListBody3 = styled(ListBody)`
  background-color: #299ec6;
`;

const ListBody4 = styled(ListBody)`
  background-color: #007add;
`;

const BodyH1 = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 2rem;
  font-family: noto_B;
  display: block;
  width: 100%;
  margin-bottom: 1rem;
`;

const BodyH2 = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 1.3rem;
  display: block;
  width: 100%;
  height: 6rem;
`;
const ListOrder = styled.div`
  content: "1";
  position: absolute;
  background-image: url("/assets/images/main_list_num_1.png");
  background-repeat: no-repeat;
  background-size: 100%;
  width: 4rem;
  height: 4rem;
  text-align: center;
  line-height: 3.9rem;
  color: #fff;
  font-size: 1.5rem;
  top: -1.25rem;
  left: -1rem;
`;
