import React, { Component } from 'react';
import NavBar from './components/nav-bar';
import Movies from './components/movies';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isSearch: false,
            type: "",
            url: "",
            movies: []
        }
    }


    async onSearch() {
        // this.setState({isSearch: true})
        
        fetch(this.state.url,{
        method:'GET',
        headers:{
          'Content-Type':'application/json'
        },
        }).then(response=>{
          return response.json()
        }).then(result=> {
        // this is the data we get after putting our data,
          this.setState({ movies: result.items })
          console.log('movies', this.state.movies)
        });
        console.log("Search complete")
    }

    render() { 
        const isSearch = this.state.isSearch;
        let movies;

        // if(isSearch) {
        //     movies = <Movies type="search"/>
        // } else if(!isSearch) {
        //     movies = <Movies type="top"/>
        // }

        return <div>

            <NavBar onSearch={this.onSearch()}/>
            <Movies/>
            {movies}
        </div>;
    }
}
 
export default App;