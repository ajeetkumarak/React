import React from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM from "react-dom";
import App from "./App";
import cars, { animals, useAnimals } from "./cars";
console.log(cars);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const [honda, tesla] = cars;
console.log(honda, tesla);
const {
  coloursByPopularity: [hondaTopColour],
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;
const {
  coloursByPopularity: [teslaTopColour],
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;
/*
ReactDOM.render(
  <table>
    <th>Brand</th>
    <th>Top Speed</th>
    <th>Top Colour</th>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
*/

// destructuring Arrays
const [cat, dog] = animals;
console.log(cat);

// *//  destructuring objects
// const { name, sound } = dog;
// console.log(name, sound);

// const { name: catName, sound: catSound } = cat;
// console.log(catName, catSound);

// providing default values
// const { name = "Fluffy", sound = "purr" } = cat;
// console.log(name);

//  When we have nested objects
const {
  name,
  sound,
  feedingRequirements: { food, water },
} = dog;
console.log(food);

// const [animal, makeSound] = useAnimals(dog);
// console.log(animal);
// makeSound();

// SPREAD OPERATOR
const citrus = ["Lime", "Orange", "Lemon"];
const fruits = ["Apple", ...citrus, "Banana", "Coconut"];

const fullName = {
  fName: "James",
  lName: "Kumar",
};

const user = {
  ...fullName,
  id: 1,
  username: "aks789",
};
console.log(user);
