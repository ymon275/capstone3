import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav-bar';
import Movies from './components/movies';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Movies></Movies>
    </div>
  );
}

export default App;
