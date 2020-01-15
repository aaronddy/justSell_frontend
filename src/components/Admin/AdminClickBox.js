import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const AdminClickBox = () => {
  const [isActive, setIsActive] = useState("");

  const handleHover = e => {
    if (e.target.id === "1") {
      setIsActive("order");
    } else if (e.target.id === "2") {
      setIsActive("report");
    } else if (e.target.id === "3") {
      setIsActive("charge");
    }
  };
  const handleHoverLeave = () => {
    setIsActive("");
  };

  return (
    <>
      <Link href="/">
        <DivBox
          id={1}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverLeave}
        >
          <Num>86</Num>
          <NameDiv>
            <Span>주문현황</Span>
            <Arrow
              whiteArrow={
                isActive === "order"
                  ? "/assets/images/index/icon_next_w.png"
                  : "/assets/images/index/icon_next.png"
              }
            />
          </NameDiv>
          <Icon
            size={isActive === "order" ? "100px" : "80px"}
            onIcon={
              isActive === "order"
                ? "/assets/images/index/box_icon_big_1.png"
                : "/assets/images/index/index_box_icon_1.png"
            }
          />
        </DivBox>
      </Link>
      <Link href="/report">
        <DivBox
          id={2}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverLeave}
        >
          <Num>156</Num>
          <NameDiv>
            <Span>투자 리포트</Span>
            <Arrow
              whiteArrow={
                isActive === "report"
                  ? "/assets/images/index/icon_next_w.png"
                  : "/assets/images/index/icon_next.png"
              }
            />
          </NameDiv>
          <Icon
            size={isActive === "report" ? "100px" : "80px"}
            onIcon={
              isActive === "report"
                ? "/assets/images/index/box_icon_big_2.png"
                : "/assets/images/index/index_box_icon_2.png"
            }
          />
        </DivBox>
      </Link>
      <Link href="/">
        <DivBox
          id={3}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverLeave}
        >
          <NameDiv>
            <Span>충전금 내역</Span>
            <Arrow
              whiteArrow={
                isActive === "charge"
                  ? "/assets/images/index/icon_next_w.png"
                  : "/assets/images/index/icon_next.png"
              }
            />
          </NameDiv>
          <Icon
            size={isActive === "charge" ? "100px" : "80px"}
            onIcon={
              isActive === "charge"
                ? "/assets/images/index/box_icon_big_3.png"
                : "/assets/images/index/index_box_icon_3.png"
            }
          />
        </DivBox>
      </Link>
    </>
  );
};

export default AdminClickBox;

const DivBox = styled.div`
  width: 100%;
  max-width: 331px;
  height: 240px;
  background: #fff;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: #007add;
    color: #fff;
  }
`;
const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 30px;
`;
const Span = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
const Arrow = styled.div`
  background-image: url(${props => props.whiteArrow});
  width: 23px;
  height: 15px;
  margin-top: 30px;
`;

const Icon = styled.div`
  background-image: url(${props => props.onIcon});
  background-repeat: no-repeat;
  background-size: cover;
  width: ${props => props.size};
  height: ${props => props.size};
  align-self: flex-end;
  margin: 0 30px 30px 0;
`;

const Num = styled.div`
  width: 50px;
  height: 30px;
  border-radius: 30px;
  background: linear-gradient(
    30deg,
    rgba(255, 201, 0, 1) 0%,
    rgba(255, 164, 0, 1) 100%
  );
  color: #fff;
  text-align: center;
  line-height: 2;
  font-weight: 700;
  position: absolute;
  right: -25px;
  top: 10px;
  z-index: 5;
`;
