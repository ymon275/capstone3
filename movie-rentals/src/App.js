import React from 'react';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';
import Profile from './components/Profile';
import UpdateProfile from './components/UpdateProfile'
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  const app = (
    <Router>
      <Switch>
        <PrivateRoute path="update-profile" component={UpdateProfile} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <Route exact path="/update-profile" component={UpdateProfile} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
      </Switch>
    </Router>
  );
  return (
    <AuthProvider>
      <div className="App">{app}</div>
    </AuthProvider>
  );
}

export default App;