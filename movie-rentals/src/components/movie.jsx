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
                <div className="row">
                    <div className="col-2 mx-2">
                        <h1>{movie.rank}</h1>
                        <img style={{height: "297px", width: "200px"}}  src={movie.image}></img>
                    </div>
                
                    <div className="col align-items-center mx-4">
                        <h2 className="card-text rating">{movie.imDbRating}</h2>
                        <h5 className="card-title">{movie.fullTitle}</h5>
                        <p className="card-text">{movie.crew}</p>
                    </div>
                </div>
                <a href="#" className="btn btn-primary my-2">Add to cart</a>
            </div>
        </div>;
    }
}
 
export default Movie;