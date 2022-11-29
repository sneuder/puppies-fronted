import CardDogs from "../../components/cardDogs";
import usePuppies from "../../hooks/usePuppies";

import { Grid } from "@mui/material";

const Dogs = () => {
  const { dogs } = usePuppies();
  return (
    <Grid container justifyContent={"center"} spacing={4}>
      {dogs.map((dog) => (
        <Grid item xs={5}>
          <CardDogs key={dog.id} dog={dog} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Dogs;
