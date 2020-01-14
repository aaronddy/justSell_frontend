import React from "react";
import styled from "styled-components";
import Layout from "../components/layouts/Layout";
Admin.Layout = Layout;
import AdminBox from "../components/Admin/AdminBox";
import Link from "next/link";

export default function Admin() {
  return (
    <>
      <Background>
        <Div>
          <TextContainer>
            <div>
              <Text>실패없는 고수익</Text>
              <Text>
                <Span>저스트셀 창업</Span> 플랫폼
              </Text>
            </div>
            <Link href="/">
              <Button>충전금 충전하기</Button>
            </Link>
          </TextContainer>
          <AdminBox></AdminBox>
        </Div>
      </Background>
    </>
  );
}

const Background = styled.div`
  background-image: url("/assets/images/index/index_background.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  background-size: contain;
  height: 1000px;
  z-index: -10;
`;
const Div = styled.div`
  display: flex;
  height: 1000px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TextContainer = styled.div`
  width: 1000px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 50px;
`;
const Text = styled.p`
  font-size: 32px;
  font-weight: 700;
`;
const Span = styled.span`
  font-size: 32px;
  color: #00768f;
  font-weight: 700;
`;
const Button = styled.button`
  width: 192px;
  height: 48px;
  color: #00768f;
  border: 1px solid #00768f;
  background-color: #fff;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    background: #00768f;
    color: #fff;
  }
`;
