import React, { Component } from 'react';
import Movies from './movies';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      formId: 'form',
      movies: [],
      search: ""
    }
    this.run = true;
  }

  

    render() { 
        return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li> */}
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li> */}
          </ul>
          <form className="d-flex" onSubmit={() => this.props.onSearch()}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
        // return <div>
        //     <nav className="nav-bar navbar-expand-lg navbar-light bg-light">
        //         <a className="m-2">Profile</a>
        //         <a className="m-2">Home</a>
        //     <div>
        //         <form className="form-inline my-2 my-lg-0 ">
        //             <input className="form-control mr-sm-2" type="search" placeHolder="Search" aria-label="Search"/>
        //             <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        //         </form>
        //     </div>
        // </nav>
        // </div>;
    }
}
 
export default NavBar;