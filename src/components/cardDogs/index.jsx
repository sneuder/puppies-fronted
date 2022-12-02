import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Skeleton,
} from "@mui/material";

import { styleCard, ImageDog, CardLink } from "./style";

const CardDogs = ({ dog }) => {
  const { name, image, id } = dog;

  if (!dog) {
    return <Skeleton variant="rounded" width={210} height={60} />;
  }

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
