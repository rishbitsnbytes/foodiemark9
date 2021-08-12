import "./styles.css";
import React from "react";
import { useState } from "react";

var foodDb = {
  yumm: [
    {
      name: "Kachori-Samosa",
      detail: "Dal Kachori crispy and samosa with native flavours",
      rating: "9.5/10"
    },
    {
      name: "Ras-Malai",
      detail:
        "My favourite sweet dish!! Helps a lot in late night sweet cravings.",
      rating: "9/5/10"
    },
    {
      name: "Chola Bhatura",
      detail:
        "Delhi's fav, heard a lot about it, still have to explore the best of it.",
      rating: "9/10"
    },
    {
      name: "Ghar ka Khana",
      detail:
        "Yeah it sounds cliche, but we all know what we come back to in the end, it's yummy, healthya and satisfying at the same time. Yeah it seems ureal all these in one food, but it is true we all would agree.",
      rating: "10/10"
    }
  ],

  indorispecial: [
    {
      name: "Poha",
      detail:
        "World's best Poha you will get in Indore, with different variants like Usal-Poha etc.",
      rating: "9/10"
    },
    {
      name: "Rabri",
      detail:
        "Best for sweet craving, my personal favourite especially in late night foodies heaven in Indore named 'Sarafa' ",
      rating: "10/10"
    },
    {
      name: "Namkeen / Savoury",
      detail:
        "Proud of Indore is this. No Indori can eat a meal without the namkeen. It's tastes so yum with native flavours of Indore",
      rating: "10/10"
    }
  ],

  healthy: [
    {
      name: "Mooong Beans",
      detail:
        "Best for breakfast especially sprouted. Also can add tomato or native spices with just a mild fry in Ghee",
      rating: "9/10"
    },
    {
      name: "Chick Peas",
      detail:
        "Best for breakfast especially sprouted. Also can add tomato or native spices with just a mild fry in Ghee",
      rating: "9/10"
    },
    {
      name: "Smothies",
      detail:
        "Ash-gourd is best. Bitter-gourd, Bottle-gourd are also best for essential nutrients. Smoothies are best because they reduce work of digestive system bcause it's already blended which helps in fast and maximum nutrients absorption.",
      rating: "10/10"
    },
    {
      name: "Eggs",
      detail:
        "Best for Nutrients, not too much non-veg but full of essentials.",
      rating: "10/10"
    }
  ]
};

export default function App() {
  const [foodCatg, setFoodCatg] = useState("yumm");

  function catgSelectionHandler(foodCatg) {
    setFoodCatg(foodCatg);
  }

  return (
    <div className="App">
      <h1 className="header">
        <span style={{ fontSize: "3rem" }}>🍲</span> foodie!!{" "}
        <span style={{ fontSize: "3rem" }}>🍔</span>
      </h1>
      <h4 className="subheader">
        being an Indori, ofc I am a big foodie! <br /> below are my some
        favourites and recommendations
      </h4>

      <div>
        {Object.keys(foodDb).map((foodCatg) => (
          <button
            className="buttons"
            onClick={() => catgSelectionHandler(foodCatg)}
          >
            {foodCatg}
          </button>
        ))}
      </div>
      <hr />
      <ul className="list-area">
        {foodDb[foodCatg].map((food) => (
          <li className="list" key={food.name}>
            <div className="list-divs">
              <strong>
                <em>Name : - </em>
              </strong>{" "}
              {food.name}
            </div>
            <div className="list-divs">
              <strong>
                <em>Detail : - </em>
              </strong>{" "}
              {food.detail}
            </div>
            <div className="list-divs">
              <strong>
                <em>Rating : - </em>
              </strong>
              {food.rating}
            </div>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
