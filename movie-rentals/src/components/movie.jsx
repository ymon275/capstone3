import React, { Component } from 'react';
class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() { 
        const {movie} = this.props;
        return <div className="card">
            <div className="card-body">
                {console.log('props', this.props)}
                <div>
                    <h1>{movie.rank}</h1>
                    <img src={movie.image}></img>
                </div>
                
                
                <h5 className="card-title">{movie.fullTitle}</h5>
                <p className="card-text"></p>
                <a href="#" className="btn btn-primary">Add to cart</a>
            </div>
        </div>;
    }
}
 
export default Movie;