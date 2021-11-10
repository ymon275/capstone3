import React, { useState, useEffect } from "react";
import streamlineLogo from "../images/streamlineLogo.png";
import shoppingCart from "../images/shopping-cart.png";
import { useAuth } from "../contexts/AuthContext";
import Dropdown from "react-bootstrap/Dropdown";

export default function NavBar({ sendMovies, children }) {
  const { currentUser } = useAuth();
  const [searchRef, setSearch] = useState();

  const GuestPage = (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img
        src={streamlineLogo}
        alt="streamline logo"
        style={{ width: "40px", height: "40px" }}
      ></img>
      <a className="navbar-brand mx-1" href="#">
        Streamline
      </a>
      <a className="nav-link mx-1" href="/">
        Home
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {/* <li className="nav-item active">
              <a className="nav-link" href="/">Home</a>
            </li> */}
          <li>
            <Dropdown data-toggle="tooltip" data-placement="top" title="Cart">
              <Dropdown.Toggle id="dropdown-basic">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </Dropdown.Toggle>
              {children}
            </Dropdown>
          </li>
        </ul>
      </div>
      <a className="nav-link" href="/SignUp">
        Sign Up
      </a>
      <a className="nav-link" href="/Login">
        Log In
      </a>
      <form
        className="d-flex mx-3"
        id="formSubmit"
        onSubmit={(event) => {
          event.preventDefault();
          if (searchRef != "" && searchRef != undefined && searchRef != null) {
            sendMovies(searchRef);
          }
        }}
      >
        <input
          className="form-control me-2"
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </nav>
  );

  const LoggedInPage = (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img
        src={streamlineLogo}
        alt="streamline logo"
        style={{ width: "40px", height: "40px" }}
      ></img>
      <a className="navbar-brand" href="#">
        Streamline
      </a>
      <a className="nav-link mx-1" href="/">
        Home
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src={shoppingCart} alt="shopping cart" className="" style={{ width: "30px", height: "30px"}}></img>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <CartItems></CartItems>
            </div>
          </li> */}
          <li>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </Dropdown.Toggle>
              {children}
            </Dropdown>
          </li>
        </ul>
      </div>
      <div className="mr-3 d-flex">
        <a className="nav-link" href="/profile">
          Profile
        </a>
        <form
          className="d-flex mx-3"
          id="formSubmit"
          onSubmit={(event) => {
            event.preventDefault();
            sendMovies(searchRef);
          }}
        >
          <input
            className="form-control me-2"
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );

  if (currentUser !== null) {
    return LoggedInPage;
  } else {
    return GuestPage;
  }
}
