import React from "react";
import Layout from "../components/layouts/Layout";
index.Layout = Layout;
import styled from "styled-components";
const Div = styled.div`
  color: blue;
`;
export default function index() {
  return (
    <>
      {/* <img src="/justsell.png" alt="my image"></img> */}
      <div>index.js</div>
      <Div>index.js</Div>
    </>
  );
}
