import React, { Component, useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useTheme } from "../contexts/ThemeContext";

export default function Movie({ movie, getItems, user }) {
  const [cart, setCart] = useState();
  const context = useTheme();

  async function addToCart() {
    // console.log("this.props.movie.id", this.props.movie.id);
    // console.log("this.props.user.uid", this.props.user.uid);
    /* addDoc(doc(db, this.props.user.uid, "cart"), {
                "movie": this.props.movie.id
            }, {merge: true});*/
    if (movie.description === undefined) {
      await addDoc(collection(db, user.uid), {
        image: movie.image,
        title: movie.title,
        id: movie.id,
        crew: movie.crew,
        year: movie.year,
      });
      getItems();
    } else {
      await addDoc(collection(db, user.uid), {
        image: movie.image,
        title: movie.title,
        id: movie.id,
        description: movie.description,
      });
      getItems();
    }
  }

  if (context.themeColor === "light") {
    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-4 mx-1">
              <h1>{movie.rank}</h1>
              <img
                className="w-100 h-75"
                // style={{ height: "297px", width: "200px" }}
                src={movie.image}
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
              addToCart();
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
                // style={{ height: "297px", width: "200px" }}
                src={movie.image}
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
              addToCart();
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
