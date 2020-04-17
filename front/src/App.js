import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import FormLogin from "./forms/FormLogin";
import FormRegister from "./forms/FormRegister";
import Logout from "./Logout";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import ShoppingCart from "./ShoppingCart";
import Scan from "./Scan";
import AddToCart from "./AddToCart";
import FormPayment from "./forms/FormPayment";

function App(props) {
  const [car, setCar] = useState({ products: [] });
  const [user, setUser] = useState({});
  const [shops, setShops] = useState([]);
  useEffect(() => {
    fetch("/getUser", {credentials: 'include'})
      .then((res) => res.json())
      .then((user) => setUser(user));
    console.log("this is the user", user);
  }, []);

  useEffect(() => {
    fetchShops();
  }, []);
  const fetchShops = async () => {
    const url = "/shops";
    const res = await fetch(url);
    const temp = await res.json();
    console.log(temp);
    setShops(temp);
  };

  const editCar = (newCar) => {
    setCar(newCar);
  };
  return (
    <Router>
      <div>
        <Navbar setUser={setUser} user={user}></Navbar>
        <div className="container">
          <Switch>
            <Route
              path="/"
              exact
              component={() => (
                <Home user={user} shops={shops} setShops={setShops} />
              )}
            />
            <Route
              path="/login"
              component={() => <FormLogin user={user} setUser={setUser} />}
            />
            <Route
              path="/register"
              component={() => <FormRegister user={user} setUser={setUser} />}
            />
            <Route
              path="/logout"
              component={() => <Logout user={user} setUser={setUser} />}
            />
            <Route
              path="/payment"
              component={() => <ShoppingCart car={car} editCar={editCar} />}
            />
            <Route
              exact
              path="/:id/:productId"
              component={() => <AddToCart editCar={editCar} car={car} />}
            />
            <Route
              exact
              path="/pay"
              component={() => <FormPayment user={user} car={car} />}
            />

            <Route exact path="/:id" component={() => <Scan />} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

// Comentario code review
