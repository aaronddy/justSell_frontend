import React from "react";
import Layout from "../components/layouts/Layout";
index.Layout = Layout;
import styled from "styled-components";

const Div = styled.div`
  color: blue;
  width: 200px;
  height: 200px;
  background-image: url("/assets/justsell.png");
  background-size: cover;
`;
export default function index() {
  return (
    <>
      <img src="/assets/justsell.png" alt="my image"></img>
      <div>index.js</div>
      <Div>index.js</Div>
    </>
  );
}
