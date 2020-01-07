import styled from "styled-components";
const Main = styled.main`
  border: 4px solid red;
`;
export default ({ children }) => {
  // return <main style={{ border: "4px dashed blue" }}>{children}</main>;
  return <Main>{children}</Main>;
};
