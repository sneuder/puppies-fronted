const CardDog = ({ dog }) => {
  console.log(dog);
  if (!dog) return <h1>Loarding</h1>;

  return <h1>{dog.name}</h1>;
};

export default CardDog;
