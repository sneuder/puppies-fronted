import { Box, Card, CardContent, Button, Typography } from "@mui/material";

import {
  styleCard,
  styleCardContent,
  styleFooter,
  styleButton,
  ButtonLink,
} from "./style";

import img1 from "../../assets/img/dog_walking.png";

const CardHome = () => {
  return (
    <Card sx={styleCard}>
      <CardContent sx={styleCardContent}>
        <img src={img1} width="90%" />
        <ButtonLink to="/dogs">
          <Button variant="contained" sx={styleButton}>
            Check more Dogs!
          </Button>
        </ButtonLink>
      </CardContent>
      <Box sx={styleFooter}>
        <Typography textAlign={"center"} color={"#fff"}>
          Let's adopt instead of buying
        </Typography>
      </Box>
    </Card>
  );
};

export default CardHome;
