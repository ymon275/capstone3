import React, { Component } from 'react';
import { db } from '../firebase'
import { collection, addDoc } from "firebase/firestore";

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: {}
        }
    }

    async addToCart() {
        // console.log("this.props.movie.id", this.props.movie.id);
        // console.log("this.props.user.uid", this.props.user.uid);
            /* addDoc(doc(db, this.props.user.uid, "cart"), {
                "movie": this.props.movie.id
            }, {merge: true});*/
            await addDoc(collection(db, this.props.user.uid), {
                "image": this.props.movie.image,
                "title": this.props.movie.title
              });

    }

    render() { 
        const {movie} = this.props;
        return <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-2 mx-2">
                        <h1>{movie.rank}</h1>
                        <img style={{height: "297px", width: "200px"}}  src={movie.image}></img>
                    </div>
                
                    <div className="col align-items-center mx-4">
                        <h2 className="card-text rating">{movie.imDbRating}</h2>
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">{movie.description}</p>
                        <p className="card-text">{movie.crew}</p>
                    </div>
                </div>
                <button href="#" className="btn btn-primary my-2" onClick={() => {this.addToCart()}}>Add to cart</button>
            </div>
        </div>;
    }
}
 
export default Movie;