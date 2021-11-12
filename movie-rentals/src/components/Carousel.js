import React from "react";
import { Carousel } from "react-bootstrap";
import { useTheme } from "../contexts/ThemeContext";

export default function FrontCarousel({ movies }) {
  const context = useTheme();

  if (
    movies !== undefined &&
    movies !== null &&
    movies.length !== 0 &&
    context.themeColor === "light"
  ) {
    return (
      <Carousel
        style={{ height: "500px", width: "337px", margin: "20px auto" }}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={movies[0].image}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={movies[1].image}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={movies[2].image}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={movies[3].image}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={movies[4].image}
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  } else if (
    movies !== undefined &&
    movies !== null &&
    movies.length !== 0 &&
    context.themeColor === "dark"
  ) {
    return (
      <Carousel
        className="bg-dark" style={{ height: "500px", width: "337px", margin: "20px auto" }}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={movies[0].image}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={movies[1].image}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={movies[2].image}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={movies[3].image}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={movies[4].image}
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  } else {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
}
