import React, { Component } from 'react';
import NavBar from './components/nav-bar';
import Movies from './components/movies';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isSearch: false,
            type: "",
            url: ""
        }
    }


    async onSearch() {
        // this.setState({isSearch: true})
        
        await fetch(this.state.url).then(
            responce => responce.json()).then(
                result => console.log(result)
            );
        console.log("Search complete")
    }

    render() { 
        const isSearch = this.state.isSearch;
        let movies;

        if(isSearch) {
            movies = <Movies type="search"/>
        } else if(!isSearch) {
            movies = <Movies type="top"/>
        }

        return <div>
            <NavBar onSearch={this.onSearch()}/>
            {movies}
        </div>;
    }
}
 
export default App;