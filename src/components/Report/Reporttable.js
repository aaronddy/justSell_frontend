import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Reporttable = () => {
  const [data, setData] = useState([]);
  const [isClicked, setIsClicked] = useState("2019/01~06");
  const [istrue, setIsTrue] = useState(true);
  const [isClick, setIsClick] = useState("2019/01~06");
  const [isfalse, setIsFalse] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/data/reporttable.json")
      .then(res => res.json())
      .then(res => setData(res));
  }, []);

  if (data.table === undefined) return <></>;

  const nexttable = data.nexttable.map((el, index) => {
    if (index === 1 || index === 2 || index === 5)
      return (
        <Info2 key={el.id}>
          <Span>{el.year}월</Span>
          <Span>{el.money}원</Span>
        </Info2>
      );
    else
      return (
        <Info key={el.id}>
          <Span>{el.year}월</Span>
          <Span>{el.money}원</Span>
        </Info>
      );
  });

  const table = data.table.map((el, index) => {
    if (index === 1 || index === 2 || index === 5)
      return (
        <Info2 key={el.id}>
          <Span>{el.year}월</Span>
          <Span>{el.money}원</Span>
        </Info2>
      );
    else
      return (
        <Info key={el.id}>
          <Span>{el.year}월</Span>
          <Span>{el.money}원</Span>
        </Info>
      );
  });
  const nextmoney = data.nextMoney.map((el, index) => {
    if (index === 1 || index === 2 || index === 5)
      return (
        <Info2 key={el.id}>
          <Span>{el.year}월</Span>
          <Span>{el.money}원</Span>
        </Info2>
      );
    else
      return (
        <Info key={el.id}>
          <Span>{el.year}월</Span>
          <Span>{el.money}원</Span>
        </Info>
      );
  });

  const money = data.money.map((el, index) => {
    if (index === 1 || index === 2 || index === 5)
      return (
        <Info2 key={el.id}>
          <Span>{el.year}월</Span>
          <Span>{el.money}원</Span>
        </Info2>
      );
    else
      return (
        <Info key={el.id}>
          <Span>{el.year}월</Span>
          <Span>{el.money}원</Span>
        </Info>
      );
  });

  const handleClick = e => {
    setIsClicked(e.target.value);
    if (isClicked === "2019/07~12") return setIsTrue(true);
    else if (isClicked === "2019/01~06") return setIsTrue(false);

    console.log(e.target.value);
  };
  const handleChange = e => {
    setIsClick(e.target.value);
    if (isClick === "2019/07~12") return setIsFalse(true);
    else if (isClick === "2019/01~06") return setIsFalse(false);

    console.log(e.target.value);
  };

  return (
    <Container>
      <InfoBox>
        <Box>
          <InfoTitle>
            <Title>월별 수익금</Title>
            <Select onChange={handleClick}>
              <Option>2019/01~06</Option>
              <Option>2019/07~12</Option>
            </Select>
          </InfoTitle>
          <MapBox>
            {istrue ? table : nexttable}
            {/* {table} */}
          </MapBox>
        </Box>
      </InfoBox>
      <InfoBox>
        <Box>
          <InfoTitle>
            <Title>월별 충전금 사용금액</Title>
            <Select onChange={handleChange}>
              <Option>2019/01~06</Option>
              <Option>2019/07~12</Option>
            </Select>
          </InfoTitle>
          <MapBox>{isfalse ? money : nextmoney}</MapBox>
        </Box>
      </InfoBox>
    </Container>
  );
};

export default Reporttable;

const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-around;
`;

const InfoBox = styled.div`
  border-radius: 5px;
  box-shadow: 0px 15.13px 15.13px rgba(0, 63, 154, 0.1);
  width: 550px;
  height: 300px;
  /* border: 1px solid green; */
  display: flex;
  justify-content: center;
  background: #fff;
`;

const InfoTitle = styled.div`
  width: 500px;
  height: 60px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.div`
  width: 500px;
  /* border: 2px solid orange; */
`;

const Title = styled.h1`
  color: #363d49;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -2px;
`;

const Option = styled.option``;
const Select = styled.select`
  width: 130px;
  height: 45px;
  font-size: 18px;
  color: #363d49;
  font-weight: 700;
`;
const Info = styled.div`
  width: 230px;
  height: 50px;
  background: #eaf8ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 5px 0;
  border-radius: 10px;
`;
const Info2 = styled(Info)`
  background: #e5f9f3;
`;

const Span = styled.span`
  letter-spacing: -1px;
  font-size: 16px;
  margin-right: 15px;
  &:first-child {
    margin-left: 15px;
    margin-right: 0;
  }
`;
const MapBox = styled.div`
  width: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
