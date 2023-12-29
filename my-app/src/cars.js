const cars = [
  {
    model: "Honda Civic",
    coloursByPopularity: ["black", "silver"],
    speedStats: {
      topSpeed: 145,
      zeroToSixty: 8.5,
    },
  },
  {
    model: "Tesla Model 3",
    coloursByPopularity: ["red", "white"],
    speedStats: {
      topSpeed: 15,
      zeroToSixty: 3.5,
    },
  },
];

const animals = [
  {
    // name: "cat",
    sound: "meow",
    feedingRequirements: {
      food: 3,
      water: 5,
    },
  },
  {
    name: "dog",
    sound: "woof",
    feedingRequirements: {
      food: 4,
      water: 3,
    },
  },
];

function useAnimals(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
    },
  ];
}

export default cars;
export { animals, useAnimals };
