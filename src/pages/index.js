import React from "react";
import styled from "styled-components";
import Intro from "../components/Mainpage/Snippets/Intro";
import WhyJustSell from "../components/Mainpage/Snippets/WhyJustSell";
import HighInterest from "../components/Mainpage/Snippets/HighInterest";
import Comparison from "../components/Mainpage/Snippets/Comparison";
import WinWithJust from "../components/Mainpage/Snippets/WinWithJust";
import WhyChooseUs from "../components/Mainpage/Snippets/WhyChooseUs";
import EverywhereCanSell from "../components/Mainpage/Snippets/EverywhereCanSell";
import ServiceOfAssurance from "../components/Mainpage/Snippets/ServiceOfAssurance";
import Benefits from "../components/Mainpage/Snippets/Benefits";

export default function MainPage() {
  return (
    <Container>
      <Intro />
      <WhyJustSell />
      <HighInterest />
      <Comparison />
      <WinWithJust />
      <WhyChooseUs />
      <EverywhereCanSell />
      <ServiceOfAssurance />
      <Benefits />
    </Container>
  );
}

const Container = styled.div`
  background-color: #f5fbff;
  width: 100%;
`;
