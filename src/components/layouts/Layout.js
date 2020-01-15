import styled from "styled-components";
import SubNav from "../Nav/SubNav";
const Main = styled.main`
  border: 4px solid red;
`;
export default ({ children }) => {
  // return <main style={{ border: "4px dashed blue" }}>{children}</main>;
  return (
    <div>
      <SubNav />
      <Div>{children}</Div>
    </div>
  );
};

const Div = styled.div`
  /* border: 2px solid orange; */
  width: calc(100% - 240px);
  height: auto;
  /* height: calc(100% - 64px); */
  /* position: absolute;
  right: 0; */
  /* bottom: 0; */
  margin-left: 240px;
  padding-top: 64px;
  /* z-index: -1; */
`;
