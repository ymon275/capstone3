import React, { useEffect, useState } from 'react';
import NavBar from './NavBar.js';
import Movies from './movies';
import searchMovies from '../searchMovies.js';
import getMovies from '../getMovies';
import CartItems from './CartItems';
import { useAuth } from '../contexts/AuthContext.js';
import { query, collection, orderBy, getDocs } from 'firebase/firestore'
import { db } from '../firebase'


export default function Main() {

    const { currentUser } = useAuth();
    const [moviesRef, setMovies] = useState([]);
    const [itemsRef, setItemsRef] = useState([]);
    const [docIds, setDocIds] = useState([]);


    async function fetchMovies() {
        let result = await getMovies();
        console.log('result', result);
        setMovies(result.items);
    }

    async function sendMovies(value) {
        let result = await searchMovies(value);
        console.log('result', result);
        setMovies(result.results);
    }

    useEffect(() => {
        fetchMovies();
        getItems();
    }, []);

    // useEffect(() => {
    //     forceUpdate()
    // }, [moviesRef]);
   
    async function getItems() {
        if(currentUser !== null) {
            const q = query(collection(db, currentUser.uid), orderBy('title'));
            // console.log('q', q);
            const querySnapshot = await getDocs(q);
            // console.log("snapshot", querySnapshot);
            
            let array = [];
            let docArray = [];
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                array.push(doc.data());
                docArray.push(doc.id);
            });
            // console.log(array);
            setItemsRef(array)
            setDocIds(docArray)
            // setItemsRef(itemsRef => [...itemsRef, array]);
            // console.log('items', itemsRef);
            // console.log('docIds', docIds)
        }
    }
    return (
        <div>
            <NavBar sendMovies={sendMovies}>
                   <CartItems getItems={getItems} itemsRef={itemsRef} docIds={docIds} />
            </NavBar>
            <Movies getItems={getItems} movies={moviesRef}></Movies>
        </div>
    )
}