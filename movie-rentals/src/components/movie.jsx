import React, { Component } from 'react';
class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() { 
        return <div className="card">
            <div className="card-body">
                {console.log('props', this.props)}
                <h1>{Movie.movie.rank}</h1>
                
                {/* <h5 className="card-title">{this.props.movies.items[this.state.increment].title}</h5> */}
                <p className="card-text"></p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>;
    }
}
 
export default Movie;