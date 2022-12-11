import CardDog from "../../components/cardDog";
import usePuppy from "../../hooks/usePuppy";

const Dog = () => {
  const dog = usePuppy();
  return <CardDog dog={dog} />;
};

export default Dog;
