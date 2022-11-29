import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";

import { styleCard, ImageDog, CardLink } from "./style";

const CardDogs = ({ dog }) => {
  const { name, image, id } = dog;
  return (
    <Card sx={styleCard}>
      <CardLink to={`/dogs/${id}`}>
        <ImageDog src={image} alt={name} />
      </CardLink>
      <CardContent>
        <Typography>{name}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardDogs;
