import React from "react";
import styled from "styled-components";
import Intro from "./MainPage/Intro";
import WhyJustSell from "./MainPage/WhyJustSell";
import HighInterest from "./MainPage/HighInterest";
import Comparison from "./MainPage/Comparison";
import WinWithJust from "./MainPage/WinWithJust";
import WhyChooseUs from "./MainPage/WhyChooseUs";
import EverywhereCanSell from "./MainPage/EverywhereCanSell";
import ServiceOfAssurance from "./MainPage/ServiceOfAssurance";
import Benefits from "./MainPage/Benefits";

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
