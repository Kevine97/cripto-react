import styled from "@emotion/styled";

const Texto = styled.div`
  font-family: "Lato", sans-seferif;
  background: #18d26e;
  color: #fff;
  padding: 15px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  border-radius: 5px;
`;

const Error = ({ children }) => {
  return <Texto>{children}</Texto>;
};

export default Error;
