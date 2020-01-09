import React from "react";
import styled from "styled-components";

export default function Sec_3_contents() {
  return (
    <SelectBox>
      <UlBox>
        <Btn>
          <BtnTitle>Keyword Optimization</BtnTitle>
        </Btn>
        <Btn2>
          <BtnTitle>Sales Forcasting</BtnTitle>
        </Btn2>
        <Btn3>
          <BtnTitle>Image Retrival</BtnTitle>
        </Btn3>
      </UlBox>
      <div class="main_section_3_sel_box_contents">
        <div class="main_section_3_sel_box_contents_titleArea">
          <Title>Keyword Optimization</Title>
          <Content>
            1억건 이상의 자체 판매데이터와 실시간 트렌드에 대한
            <br />
            딥러닝 분석을 통해 최적의 상품 검색 키워드들을 도출합니다.
          </Content>
        </div>
        <ContentArea>
          <ImgWrap>
            <Img1 src="./assets/images/main/main_box_img_1.png" alt="" />
          </ImgWrap>
        </ContentArea>
      </div>
    </SelectBox>
  );
}

const SelectBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  box-shadow: 0px 8px 10px rgba(0, 63, 154, 0.1);
  background-color: #fff;
  max-width: 1250px;
  margin: 0 auto;
  border-radius: 21px;
  margin-top: 9rem;
  position: relative;
`;

const Img1 = styled.img`
  width: 100%;
  padding: 3rem 0 4rem 0;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  display: block;
  text-align: center;
  color: black;
  font-weight: bold;
  padding: 6rem 0 1.5rem 0;
`;

const Content = styled.h2`
  text-align: center;
  color: #4d4d4d;
  font-size: 1.6rem;
  height: 4rem;
`;

const ContentArea = styled.div`
  width: 100%;
  text-align: center;
  overflow: hidden;
`;

const ImgWrap = styled.div`
  width: 80%;
  padding: 3rem 0 4rem 0;
  margin-left: 10%;
`;

const UlBox = styled.ul`
  width: 100%;
  /* font-size: 0; */
  position: absolute;
  top: -3rem;
`;
const Btn = styled.li`
  display: inline-block;
  width: 33.333%;
  text-align: center;
  color: white;
  padding: 1.5rem 0;
  border-radius: 21px 21px 0 0;
  font-size: 1.75rem;
  cursor: pointer;
  list-style: none;
  background-color: #3bbbb4;
`;

const Btn2 = styled(Btn)`
  background-color: #00768f;
`;
const Btn3 = styled(Btn)`
  background-color: #007add;
`;
const BtnTitle = styled.span`
  font-size: 1.75rem;
`;
