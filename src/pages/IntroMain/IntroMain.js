import React from "react";
import styled from "styled-components";
import IntroMainSec_1 from "./IntroMainSec_1";
// import IntroMainSec_2 from "./IntroMainSec_2";
// import IntroMainSec_3 from "./IntroMainSec_3";
// import IntroMainSec_4 from "./IntroMainSec_4";
// import IntroMainSec_5 from "./IntroMainSec_5";
// import IntroMainSec_6 from "./IntroMainSec_6";
// import IntroMainSec_7 from "./IntroMainSec_7";
// import IntroMainSec_8 from "./IntroMainSec_8";
// import IntroMainSec_9 from "./IntroMainSec_9";

const Container = styled.div`
  background-color: #f5fbff;
  width: 100%;
`;

export default function IntroMain() {
  return (
    <Container>
      <IntroMainSec_1 />
      {/* <IntroMainSec_2 />
      <IntroMainSec_3 />
      <IntroMainSec_4 />
      <IntroMainSec_5 />
      <IntroMainSec_6 />
      <IntroMainSec_7 />
      <IntroMainSec_8 />
      <IntroMainSec_9 /> */}
    </Container>
  );
}
