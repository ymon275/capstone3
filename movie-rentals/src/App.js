import React, { useMemo, useState } from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import Home from "./components/Home";
import Profile from "./components/Profile";
import UpdateProfile from "./components/UpdateProfile";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ThemeContext from "./contexts/ThemeContext";
import { useTheme } from "./contexts/ThemeContext";

function App() {
  const [themeColor, setThemeColor] = useState("light");
  const context = useTheme();
  const value = useMemo(() => ({ themeColor, setThemeColor }), [themeColor]);
  
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
  if (value === "light") {
    return (
      <ThemeContext.Provider value={value}>
        <AuthProvider>
          <div className="App bg-light">{app}</div>
        </AuthProvider>
      </ThemeContext.Provider>
    );
  } else if (value === "dark") {
    <ThemeContext.Provider value={value}>
      <AuthProvider>
        <div className="App bg-dark">{app}</div>
      </AuthProvider>
    </ThemeContext.Provider>;
  } else {
    return (
      <ThemeContext.Provider value={value}>
        <AuthProvider>
          <div className="App">{app}</div>
        </AuthProvider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
