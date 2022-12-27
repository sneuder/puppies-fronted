class Dog {
  constructor(dog) {
    this.name = dog.name;
    this.life_span = `${dog.lifeSpan.from} - ${dog.lifeSpan.to} years`;
    this.image = {
      url: '',
    };
    this.temperament = dog.attributes.temps.join(', ');
    this.origin = dog.attributes.countries.join(', ');
    this.breed_group = dog.attributes.breeds[0];
  }
}

export default Dog;
