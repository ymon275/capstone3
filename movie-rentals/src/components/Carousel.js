import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Carousel } from "react-bootstrap";
import { useTheme } from "../contexts/ThemeContext";

export default function FrontCarousel({ movies }) {
  const context = useTheme();
  const [currentTheme, setCurrentTheme] = useState("bg-light");

  useEffect(() => {
    setCurrentTheme(context.themeColor === "dark" ? "bg-dark" : "bg-light");
  }, [context.themeColor]);

  if (movies !== undefined && movies !== null && movies.length !== 0) {
    return (
      <Carousel
        className={currentTheme}
        style={{ height: "500px", width: "337px", margin: "20px auto" }}
      >
        {_.map(_.take(movies, 5), (movie, index) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={movie.image}
                alt={`slide ${index + 1}`}
              ></img>
            </Carousel.Item>
          );
        })}
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
