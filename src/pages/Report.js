import React, { useState } from "react";
import Layout from "../components/layouts/Layout";
import styled from "styled-components";
Report.Layout = Layout;
import ReportInfo from "../components/Report/ReportInfo";
import dynamic from "next/dynamic";
import Reporttable from "../components/Report/Reporttable";
const ReportGraph = dynamic(() => import("../components/Report/ReportGraph"), {
  ssr: false
});
export default function Report(props) {
  const [month, setMonth] = useState(1);
  const [nextMonth, setNextMonth] = useState(2);
  const [lastMonth, setLastMonth] = useState(12);
  const [years, setYear] = useState(2019);
  const plusChange = () => {
    setMonth(month + 1);
    setNextMonth(nextMonth + 1);
    setLastMonth(lastMonth + 1);
    if (month === 12) {
      setMonth(1);
      setYear(years + 1);
    }
    if (nextMonth === 12) {
      setNextMonth(1);
    }
    if (lastMonth === 12) {
      setLastMonth(1);
    }
  };
  const minusChange = () => {
    setMonth(month - 1);
    setNextMonth(nextMonth - 1);
    setLastMonth(lastMonth - 1);
    if (month === 1) {
      setMonth(12);
      setYear(years - 1);
    }
    if (nextMonth === 1) {
      setNextMonth(12);
    }
    if (lastMonth === 1) {
      setLastMonth(12);
    }
  };
  return (
    <>
      <Container>
        <Header>
          <TitlePhoto></TitlePhoto>
          <H1>투자 리포트</H1>
          <H2>판매통계 내역을 확인하세요</H2>
        </Header>
        <DateContaier>
          <DateBox>
            <LastMon>
              <P2>{lastMonth}월</P2>
            </LastMon>
            <LeftImg onClick={minusChange} />
            <Mon>
              <P>
                <Span>{years}</Span>년 <Span>{month}</Span>월
              </P>
            </Mon>
            <RightImg onClick={plusChange} />
            <NextMon>
              <P2>{nextMonth}월</P2>
            </NextMon>
          </DateBox>
        </DateContaier>
        <ReportInfo />
        <ReportGraph />
        <Reporttable />
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 100%;
  height: auto;
  padding-top: 64px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Header = styled.header`
  width: 100%;
  max-width: 1180px;
  display: flex;
  align-items: center;
  padding-bottom: 32px;
`;
const TitlePhoto = styled.div`
  background-image: url("/assets/images/report/report_title_icon.png");
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: cover;
`;
const H1 = styled.h1`
  font-size: 22px;
  font-weight: 700;
  color: #007add;
  margin-left: 20px;
  letter-spacing: -2px;
`;
const H2 = styled.h2`
  font-size: 14px;
  font-weight: 600;
  color: #007add;
  margin-left: 20px;
  letter-spacing: -2px;
`;
const DateContaier = styled.div`
  width: 100%;
  max-width: 1180px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DateBox = styled.div`
  width: 100%;
  max-width: 500px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const NextMon = styled.div`
  width: 48px;
`;
const LastMon = styled(NextMon)``;
const Mon = styled.div`
  text-align: center;
  padding-top: 22px;
  width: 156px;
`;
const Span = styled.span`
  font-size: 27px;
  letter-spacing: -2px;
`;
const P = styled.p`
  font-size: 27px;
`;
const P2 = styled.p`
  font-size: 20px;
  padding-top: 20px;
`;
const LeftImg = styled.div`
  background-image: url("/assets/images/report/date_btn_left.png");
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  cursor: pointer;
`;
const RightImg = styled.div`
  background-image: url("/assets/images/report/date_btn.png");
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  cursor: pointer;
`;
// Report.getInitialProps = async function() {
//   const res = await fetch("http://localhost:3000/data/report.json");
//   console.log(res);
//   const data = await res.json();
//   console.log(`Show data fetched. Count: ${data.data}`, data.data);
//   return {
//     shows: data.data
//   };
// };
