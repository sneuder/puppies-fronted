class EndPoints {
  dogs = '/dogs';
  allDogs = '/allDogs';

  constructor() {
    this.dogs = {
      allDogs: `${dogs}${allDogs}`,
    };
  }

  dogId(id) {
    return `${dogs}/${id}`;
  }
}

const endPoints = new EndPoints();
