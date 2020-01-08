import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const AdminClickBox = () => {
  const [orderArrow, setOrderArrow] = useState(true);
  const [reportArrow, setReportArrow] = useState(true);
  const [chargeArrow, setChargeArrow] = useState(true);
  const [orderIconSize, setOrderIconSize] = useState(true);
  const [reportIconSize, setReportIconSize] = useState(true);
  const [chargeIconSize, setChargeIconSize] = useState(true);

  const handleHover = e => {
    if (e.target.id === "1") {
      setOrderArrow(false);
      setOrderIconSize(false);
    } else if (e.target.id === "2") {
      setReportArrow(false);
      setReportIconSize(false);
    } else if (e.target.id === "3") {
      setChargeArrow(false);
      setChargeIconSize(false);
    }
  };
  const handleHoverLeave = e => {
    setOrderArrow(true);
    setReportArrow(true);
    setChargeArrow(true);
    setOrderIconSize(true);
    setReportIconSize(true);
    setChargeIconSize(true);
  };

  return (
    <>
      <Link href="/">
        <DivDiv
          id={1}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverLeave}
        >
          <Num>86</Num>
          <NameDiv>
            <Span>주문현황</Span>
            <Arrow
              whiteArrow={
                orderArrow
                  ? "/assets/images/index/icon_next.png"
                  : "/assets/images/index/icon_next_w.png"
              }
            />
          </NameDiv>
          <Icon
            size={orderIconSize ? "80px" : "100px"}
            onBigIcon={
              orderArrow
                ? "/assets/images/index/index_box_icon_1.png"
                : "/assets/images/index/box_icon_big_1.png"
            }
          />
        </DivDiv>
      </Link>
      <Link href="/report">
        <DivDiv
          id={2}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverLeave}
        >
          <Num>156</Num>
          <NameDiv>
            <Span>투자 리포트</Span>
            <Arrow
              whiteArrow={
                reportArrow
                  ? "/assets/images/index/icon_next.png"
                  : "/assets/images/index/icon_next_w.png"
              }
            />
          </NameDiv>
          <Icon
            size={reportIconSize ? "80px" : "100px"}
            onBigIcon={
              reportArrow
                ? "/assets/images/index/index_box_icon_2.png"
                : "/assets/images/index/box_icon_big_2.png"
            }
          />
        </DivDiv>
      </Link>
      <Link href="/">
        <DivDiv
          id={3}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverLeave}
        >
          <NameDiv>
            <Span>충전금 내역</Span>
            <Arrow
              whiteArrow={
                chargeArrow
                  ? "/assets/images/index/icon_next.png"
                  : "/assets/images/index/icon_next_w.png"
              }
            />
          </NameDiv>
          <Icon
            size={chargeIconSize ? "80px" : "100px"}
            onBigIcon={
              chargeArrow
                ? "/assets/images/index/index_box_icon_3.png"
                : "/assets/images/index/box_icon_big_3.png"
            }
          />
        </DivDiv>
      </Link>
    </>
  );
};

export default AdminClickBox;

const DivDiv = styled.div`
  width: 331px;
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
  background-image: url(${props => props.onBigIcon});
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
