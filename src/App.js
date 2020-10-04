import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import { createContext } from "react";
import { useState } from "react";
import Register from "./components/Register/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import Admin from "./components/Admin/Admin";
import NotFound from "./components/NotFound/NotFound";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isLoggedIn: false,
    name: null,
    email: null,
    error: null,
  });

  const [registeredTasks, setRegisteredTasks] = useState([]);

  return (
    <div className="App">
      <UserContext.Provider
        value={[
          loggedInUser,
          setLoggedInUser,
          registeredTasks,
          setRegisteredTasks,
        ]}
      >
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/volunteerregister/:eventId">
              <Register />
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute exact path="/admin">
              <Admin />
            </PrivateRoute>
            <Router path="*">
              <NotFound />
            </Router>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
