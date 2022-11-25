import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const styleCard = {
  width: 1 / 3,
};

const styleCardContent = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "40px",
  paddingBottom: "60px",
  paddingTop: "26px",
};

const styleFooter = {
  backgroundColor: "#231f20",
  p: 2,
};

const styleButton = {
  background: "linear-gradient(90deg,#642b73,#c6426e)",
  width: "90%",
  height: 80,
};

const ButtonLink = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export { styleCard, styleCardContent, styleFooter, styleButton, ButtonLink };
