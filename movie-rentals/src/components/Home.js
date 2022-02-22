import React, { useEffect, useState } from "react";
import NavBar from "./NavBar.js";
import Movies from "./movies";
import searchMovies from "../modules/searchMovies.js";
import getMovies from "../modules/getMovies";
import CartItems from "./CartItems";
import Carousel from "./Carousel";
import LightThemeButton from "./LightThemeButton.js";
import { useAuth } from "../contexts/AuthContext.js";
import getItems from "../modules/firestore-api/getItems.js";

export default function Main() {
  const { currentUser } = useAuth();
  const [moviesRef, setMovies] = useState([]);
  const [itemsRef, setItemsRef] = useState([]);
  const [docIds, setDocIds] = useState([]);

  async function fetchMovies() {
    let result = await getMovies();
    setMovies(result.items);
  }

  async function sendMovies(search) {
    let result = await searchMovies(search);
    console.log("result", result);
    setMovies(result.results);
  }

  async function fetchItems() {
    const items = await getItems(currentUser);
    setItemsRef(items.data);
    setDocIds(items.ids);
  }

  useEffect(() => {
    fetchMovies();
    fetchItems();
  }, []);

  return (
    <div>
      <NavBar sendMovies={sendMovies}>
        <CartItems getItems={fetchItems} itemsRef={itemsRef} docIds={docIds} />
      </NavBar>
      <Carousel movies={moviesRef} />
      <Movies getItems={fetchItems} movies={moviesRef}></Movies>
      <LightThemeButton></LightThemeButton>
    </div>
  );
}
