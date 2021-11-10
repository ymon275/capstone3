import React from "react";

export default function Carousel({ movies }) {
  if (movies !== undefined && movies !== null && movies.length !== 0) {
    return (
      <div
        style={{ height: "500px", width: "337px", margin: "auto" }}
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src={movies[0].image}
              alt="First slide"
            ></img>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src={movies[1].image}
              alt="Second slide"
            ></img>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src={movies[2].image}
              alt="Third slide"
            ></img>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src={movies[3].image}
              alt="Fourth slide"
            ></img>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src={movies[4].image}
              alt="Fifth slide"
            ></img>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only"></span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only"></span>
        </a>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
}
