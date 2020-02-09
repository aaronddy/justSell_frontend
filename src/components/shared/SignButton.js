import React from "react";
import styled from "styled-components";
import Link from "next/link";
export default function SignButton({ name, handleStep, nextPage, last }) {
  return (
    <>
      {last ? (
        <a href="/login">
          <Button>{name}</Button>
        </a>
      ) : (
        <Button
          onClick={() => {
            handleStep(nextPage);
          }}
        >
          {name}
        </Button>
      )}
    </>
  );
}

const Button = styled.button`
  display: block;
  width: 25rem;
  margin: 0 auto;
  text-align: center;
  background: -moz-linear-gradient(
    32.7% -80.26% -60deg,
    rgba(55, 209, 187, 1) 0%,
    rgba(25, 177, 214, 1) 50.6%,
    rgba(0, 150, 236, 1) 100%
  );
  background: -webkit-linear-gradient(
    -60deg,
    rgba(55, 209, 187, 1) 0%,
    rgba(25, 177, 214, 1) 50.6%,
    rgba(0, 150, 236, 1) 100%
  );
  background: -webkit-gradient(
    linear,
    32.7% -80.26%,
    67.3% 180.26%,
    color-stop(0, rgba(55, 209, 187, 1)),
    color-stop(0.506, rgba(25, 177, 214, 1)),
    color-stop(1, rgba(0, 150, 236, 1))
  );
  background: -o-linear-gradient(
    -60deg,
    rgba(55, 209, 187, 1) 0%,
    rgba(25, 177, 214, 1) 50.6%,
    rgba(0, 150, 236, 1) 100%
  );
  background: -ms-linear-gradient(
    -60deg,
    rgba(55, 209, 187, 1) 0%,
    rgba(25, 177, 214, 1) 50.6%,
    rgba(0, 150, 236, 1) 100%
  );
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#37D1BB', endColorstr='#0096EC' ,GradientType=0)";
  background: linear-gradient(
    150deg,
    rgba(55, 209, 187, 1) 0%,
    rgba(25, 177, 214, 1) 50.6%,
    rgba(0, 150, 236, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.dropshadow(OffX=6.92, OffY=0, Color='#000000') progid:DXImageTransform.Microsoft.gradient(startColorstr='#37D1BB', endColorstr='#0096EC', GradientType=1);
  color: #fff;
  height: 4.5rem;
  border-radius: 4rem;
  font-size: 1.375rem;
  font-family: noto_M;
  display: block;
  margin: 5rem auto;
`;
