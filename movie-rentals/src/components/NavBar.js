import { NavbarBrand } from 'react-bootstrap';
import streamlineLogo from '../images/streamlineLogo.png';
import shoppingCart from '../images/shopping-cart.png';
import { useAuth } from '../contexts/AuthContext';

export default function NavBar() {

    const { currentUser } = useAuth()

        const GuestPage = (<nav className="navbar navbar-expand-lg navbar-light bg-light">
          <img src={streamlineLogo} alt="streamline logo" style={{ width: "40px", height: "40px"}}></img>
        <a className="navbar-brand" href="#">Streamline</a>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={shoppingCart} alt="shopping cart" className="" style={{ width: "30px", height: "30px"}}></img>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {/* Implement a map function of movies rented out */}
              </div>
            </li>
          </ul>
          </div>

          <a className="nav-link" href="/SignUp">Sign Up</a>
          <a className="nav-link" href="/Login">Log In</a>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        
      </nav>)

      const LoggedInPage = (<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={streamlineLogo} alt="streamline logo" style={{ width: "40px", height: "40px"}}></img>
      <a className="navbar-brand" href="#">Streamline</a>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src={shoppingCart} alt="shopping cart" className="" style={{ width: "30px", height: "30px"}}></img>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {/* Implement a map function of movies rented out */}
            </div>
          </li>
        </ul>
        </div>

        <a className="nav-link" href="/profile">Profile</a>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      
    </nav>)

    if(currentUser !== null) {
        return LoggedInPage;
    } else {
        return GuestPage;
    }
}