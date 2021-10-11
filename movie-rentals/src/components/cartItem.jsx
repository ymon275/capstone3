import Dropdown from 'react-bootstrap/Dropdown';
import React, { Component, useEffect } from 'react';
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase'
class cartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    async deleteItem() {
        console.log(this.props);
        await deleteDoc(doc(db, this.props.user.uid, this.props.docId));
    }

    render() {
        return <Dropdown.Item id="dropdown-item" href="#">
            <div>
                <img src={this.props.item.image} style={{width: "20px", height: "30px"}}></img>
                {this.props.item.title}
                {console.log(this.props)}
                <button className="btn btn-danger mx-2" onClick={this.deleteItem}>x</button>
            </div>
        </Dropdown.Item>
    }
}
 
export default cartItem;