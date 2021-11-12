import React from "react";
import Movie from "./Movie";
import { useAuth } from "../contexts/AuthContext";

export default function Movies({ movies, getItems }) {

  const { currentUser } = useAuth();

    if(movies !== undefined && movies !== null && movies.length !== 0) {
    return (
      <div>
        {
          movies.map((movie, index) => {
          return <Movie key={index} id={movie.id} movie={movie} user={currentUser} getItems={getItems} />
          })}
      </div>
    );} else {
      return <div><h1>No Movies Available</h1></div>
    }
    
  }