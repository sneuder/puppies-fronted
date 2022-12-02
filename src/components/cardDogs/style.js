import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const styleCard = {
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
};

const ImageDog = styled("img")`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const CardLink = styled(Link)`
  width: 100%;
`;

export { styleCard, ImageDog, CardLink };
