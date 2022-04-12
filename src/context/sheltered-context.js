import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const sheltered = [
  {
    id: uuidv4(),
    name: "Balto",
    age: 2,
    species: "dog",
    breed1: "wolf",
    breed2: "siberian husky",
    weight: 44.2,
    status: {
      health: {
        condition: "healthy",
        ailment: null,
        prognosis: null,
      },
      fed: true,
      exercised: true,
      img_path:
        "https://rewildingbritain.imgix.net/images/wolf1_SS.jpg?auto=format&crop=focalpoint&domain=rewildingbritain.imgix.net&fit=crop&fp-x=0.5&fp-y=0.5&h=630&ixlib=php-3.3.1&q=82&w=1200",
    },
  },
  {
    id: uuidv4(),
    name: "Jenna",
    age: 2,
    species: "dog",
    breed1: "siberian husky",
    breed2: null,
    weight: 38.5,
    status: {
      health: {
        condition: "healthy",
        ailment: null,
        prognosis: null,
      },
      fed: true,
      exercised: true,
      img_path: "",
    },
  },
  {
    id: uuidv4(),
    name: "Steel",
    age: 3,
    species: "dog",
    breed1: "siberian husky",
    breed2: null,
    weight: 50.1,
    status: {
      health: {
        condition: "healthy",
        ailment: "psychosis",
        prognosis: "eventual total sanity loss",
      },
      fed: false,
      exercised: true,
      img_path: "",
    },
  },
  {
    id: uuidv4(),
    name: "Boris",
    age: 6,
    species: "goose",
    breed1: "slovak white",
    breed2: null,
    weight: 15.3,
    status: {
      health: {
        condition: "healthy",
        ailment: null,
        prognosis: null,
      },
      fed: true,
      exercised: false,
      img_path: "",
    },
  },
  {
    id: uuidv4(),
    name: "Boris",
    age: 6,
    species: "goose",
    breed1: "slovak white",
    breed2: null,
    weight: 15.3,
    status: {
      health: {
        condition: "healthy",
        ailment: null,
        prognosis: null,
      },
      fed: true,
      exercised: false,
      img_path: "",
    },
  },
];

const ShelteredContext = createContext(sheltered);

export default ShelteredContext;
