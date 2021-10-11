import React, { useEffect, useState } from 'react';
import NavBar from './NavBar.js';
import Movies from './movies';
import searchMovies from '../searchMovies.js';
import getMovies from '../getMovies';

export default function Main() {

    const [moviesRef, setMovies] = useState([]);

    async function fetchMovies() {
        let result = await getMovies();
        // console.log('result', result);
        setMovies(result.items);
    }

    async function sendMovies(value) {
        let result = await searchMovies(value);
        console.log('result', result)
        setMovies(result.results);
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    // useEffect(() => {
    //     forceUpdate()
    // }, [moviesRef]);
   
    return (
        <div>
            <NavBar sendMovies={sendMovies}></NavBar>
            <Movies movies={moviesRef}></Movies>
        </div>
    )
}