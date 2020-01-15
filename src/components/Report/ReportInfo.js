import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function ReportInfo(props) {
  // console.log(props);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/data/report.json")
      .then(res => res.json())
      .then(res => setData(res.data));
  }, []);

  const arr = data.map((el, index) => (
    <Box2 key={index}>
      <P>{el.title}</P>
      <Span>{el.info}</Span>
    </Box2>
  ));
  return (
    <>
      <Container>
        <Box>{arr}</Box>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  border-radius: 5px;
  background: #fff;
  border: 1px solid #ededed;
  height: 115px;
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  box-shadow: 0px 15.13px 15.13px rgba(0, 63, 154, 0.1);
  margin-bottom: 50px;
`;
const Box = styled.div`
  width: 1000px;
  display: flex;
  text-align: center;
  justify-content: center;
  /* align-items: center; */
`;
const Box2 = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* border: 1px solid black; */
`;
const P = styled.p`
  width: 100%;
  color: #363d49;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: -2.5px;
  /* margin: 15px 0; */
`;
const Span = styled.span`
  width: 100%;
  display: inline-block;
  color: #007add;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -2px;
`;
