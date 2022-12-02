import CardDogs from "../../components/cardDogs";
import usePuppies from "../../hooks/usePuppies";

import Pag from "../../components/pag";

import { Grid, ImageList, ImageListItem } from "@mui/material";

const Dogs = () => {
  const { dogs } = usePuppies();
  return (
    <>
      <ImageList variant="masonry" cols={3} gap={16}>
        {dogs.map((dog) => (
          <ImageListItem>
            <CardDogs key={dog.id} dog={dog} />
          </ImageListItem>
        ))}
      </ImageList>
      <Pag />
    </>
  );
};

export default Dogs;
