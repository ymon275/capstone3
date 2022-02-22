import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import addToCart from "../modules/firestore-api/addToCart";

export default function Movie({ movie, getItems, user }) {
  const context = useTheme();

  if (context.themeColor === "light") {
    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-4 mx-1">
              <h1>{movie.rank}</h1>
              <img
                className="w-100 h-75"
                src={movie.image}
                alt={movie.title}
              ></img>
            </div>

            <div className="col align-items-center">
              <h2 className="card-text rating">{movie.imDbRating}</h2>
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.description}</p>
              <p className="card-text">{movie.crew}</p>
            </div>
          </div>
          <button
            href="#"
            className="btn btn-outline-primary my-2"
            onClick={() => {
              addToCart(movie, user, getItems);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  } else if (context.themeColor === "dark") {
    return (
      <div className="card bg-dark">
        <div className="card-body">
          <div className="row">
            <div className="col-4 mx-1">
              <h1 className="text-light">{movie.rank}</h1>
              <img
                className="w-100 h-75"
                src={movie.image}
                alt={movie.title}
              ></img>
            </div>

            <div className="col align-items-center">
              <h2 className="card-text text-light rating">
                {movie.imDbRating}
              </h2>
              <h5 className="card-title text-light">{movie.title}</h5>
              <p className="card-text text-light">{movie.description}</p>
              <p className="card-text text-light">{movie.crew}</p>
            </div>
          </div>
          <button
            href="#"
            className="btn btn-primary my-2"
            onClick={() => {
              addToCart(movie, user, getItems);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Movie Unavailable</h1>
      </div>
    );
  }
}
