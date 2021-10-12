import React, { useState, useEffect } from 'react';
import CartItem from './cartItem';
import { useAuth } from '../contexts/AuthContext';
import { collection, query, getDocs, orderBy} from "firebase/firestore";
import { db } from '../firebase';
import Dropdown from 'react-bootstrap/Dropdown';

export default function CartItems({ isLoading, data, itemsRef, docIds, getItems }) {

    const { currentUser } = useAuth();


    if(itemsRef !== undefined && itemsRef !== null && itemsRef.length !== 0 && !isLoading) {
    return(
        <Dropdown.Menu id="dropdown"  >
            {
                itemsRef.map((item, index) => {
                    let docId = docIds[index];
                    // console.log('index', index)
                    // console.log('docId', docId)
                    return (
                        <CartItem key={index} item={item} user={currentUser} docId={docId} getItems={getItems} />
                    )
                })
            }
        </Dropdown.Menu>
    );
    } else {
        return (
            <Dropdown.Menu id="dropdown">
                <Dropdown.Item>Loading Cart...</Dropdown.Item>
            </Dropdown.Menu>)
    }
}