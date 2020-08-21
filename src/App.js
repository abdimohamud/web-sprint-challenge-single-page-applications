import React from "react";
import { Route, Link } from "react-router-dom"
import PizzaApp from "./PizzaApp";



const App = () => {
  return (
    <>
      <nav className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pizza">Pizzas</Link></li>
      </nav>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <Route path="/pizza" component={PizzaApp}/>
    </>
  );
};
export default App;
