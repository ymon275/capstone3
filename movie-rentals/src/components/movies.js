import React, { useState } from "react";
import Movie from "./movie";
import getMovies from '../getMovies';

export default function Movies({ movies }) {

  const [moviesRef, setMovies] = useState();

    if(movies !== undefined && movies !== null && movies.length !== 0) {
    return (
      <div>
        {console.log(movies)}
        {
          movies.map((movie, index) => {
          return <Movie key={index} id={movie.id} movie={movie}/>
          })}
      </div>
    );} else {
      return <div><h1>No Movies Available</h1></div>
    }
    
  }