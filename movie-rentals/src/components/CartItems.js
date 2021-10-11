import React, { useState, useEffect } from 'react';
import CartItem from './cartItem';
import { useAuth } from '../contexts/AuthContext';
import { collection, query, getDocs} from "firebase/firestore";
import { db } from '../firebase';
import Dropdown from 'react-bootstrap/Dropdown';

export default function CartItems(props) {

    const { currentUser } = useAuth();
    const [itemsRef, setItemsRef] = useState([]);
    const { isLoading, data } = props;
    const [docIds, setDocIds] = useState([]);


    async function getItems() {
        if(currentUser !== null) {
            const q = query(collection(db, currentUser.uid));
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

    useEffect(() => {
        getItems();
    }, [])

    useEffect(() => {
        if (data) {
          document.getElementById('dropdown-item').on('click', (e) => {
              e.stopPropagation();
          });
        }
      }, [data]) // this diff is necessary
    

    if(itemsRef !== undefined && itemsRef !== null && itemsRef.length !== 0 && !isLoading) {
    return(
        <Dropdown.Menu id="dropdown">
            {
                itemsRef.map((item, index) => {
                    let docId = docIds[index];
                    // console.log('index', index)
                    // console.log('docId', docId)
                    return (
                        <CartItem key={index} item={item} user={currentUser} docId={docId} />
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