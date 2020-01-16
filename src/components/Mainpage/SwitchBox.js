import React, { Component } from "react";
import styled, { css } from "styled-components";

export default class SwitchBox extends Component {
  state = {
    active: null
  };

  clickHandler = id => {
    this.setState({ active: id });
    // console.log(this.state.active);
    // console.log(id);
  };

  render() {
    let tapContent;

    if (this.state.active === 1) {
      tapContent = (
        <ContentBox>
          <div>
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
        </ContentBox>
      );
    } else if (this.state.active === 2) {
      tapContent = (
        <ContentBox myId={this.state.active}>
          <div>
            <Title>Sales Forcasting</Title>
            <Content>
              매일 3억개 이상의 데이터 수집 분석을 통해
              <br />
              '지금 이 순간' 구매매력도가 높을 상품들로 판매합니다.
            </Content>
          </div>
          <ContentArea>
            <ImgWrap>
              <Img1 src="./assets/images/main/main_box_img_2.png" alt="" />
            </ImgWrap>
          </ContentArea>
        </ContentBox>
      );
    } else if (this.state.active === 3) {
      tapContent = (
        <ContentBox myId={this.state.active}>
          <div>
            <Title>Image Retrival</Title>
            <Content>
              Feature Detection 기술을 활용하여
              <br />
              기존 상품 이미지들을 더욱 구매 매력적인 이미지들로 치환합니다.
            </Content>
          </div>
          <ContentArea>
            <ImgWrap>
              <Img1 src="./assets/images/main/main_box_img_3.png" alt="" />
            </ImgWrap>
          </ContentArea>
        </ContentBox>
      );
    }
    return (
      <SelectBox>
        <UlBox>
          <Btn
            onClick={e => {
              this.clickHandler(1);
            }}
            isActive={this.state.active === 1}
          >
            <span>Keyword Optimization</span>
          </Btn>
          <Btn2
            onClick={e => {
              this.clickHandler(2);
            }}
            isActive={this.state.active === 2}
          >
            <span>Sales Forcasting</span>
          </Btn2>
          <Btn3
            onClick={e => {
              this.clickHandler(3);
            }}
            isActive={this.state.active === 3}
          >
            <span>Image Retrival</span>
          </Btn3>
        </UlBox>
        {tapContent}
      </SelectBox>
    );
  }
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
  padding: 1.5rem 0;
  border-radius: 21px 21px 0 0;
  font-size: 1.75rem;
  cursor: pointer;
  list-style: none;
  background-color: #72d2c0;
  ${props =>
    props.isActive &&
    css`
      background-color: white;
    `};
  > span {
    color: white;
    ${props =>
      props.isActive &&
      css`
        color: #24aaaa;
      `}
  }
`;

const Btn2 = styled(Btn)`
  background-color: #3bbbb4;
  ${props =>
    props.isActive &&
    css`
      background-color: white;
    `};
  > span {
    color: white;
    ${props =>
      props.isActive &&
      css`
        color: #00768f;
      `}
  }
`;

const Btn3 = styled(Btn)`
  background-color: #3ba6e1;
  ${props =>
    props.isActive &&
    css`
      background-color: white;
    `};
  > span {
    color: white;
    ${props =>
      props.isActive &&
      css`
        color: #007add;
      `}
  }
`;

const ContentBox = styled.div`
  display: ${props => props.display};
`;
