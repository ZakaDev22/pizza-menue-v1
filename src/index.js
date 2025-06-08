import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
      <p>We make the best pizza in town!</p>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzaData.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. All pizzas are made with fresh
            ingredients and love.
          </p>
          <ul className="pizzas">
            {pizzaData.length > 0 &&
              pizzaData.map((pizza) => (
                <Pizza pizzaObj={pizza} key={pizza.name} />
              ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu. Please come back later!</p>
      )}
    </main>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} OpenHour={openHour} />
      ) : (
        <div className="order">
          <p id="CloseMsg">Sorry, we are closed. We open at {openHour}:00.</p>
        </div>
      )}
    </footer>
  );
}

function Order({ closeHour, OpenHour }) {
  return (
    <div className="order">
      <p>
        We are open From {OpenHour}:00 until {closeHour}:00. Come visit us or
        order online!
      </p>
      <button className="btn">Order Now</button>
    </div>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h2>{pizzaObj.name}</h2>
        <p>
          Price: $<span id="price">{pizzaObj.price}</span>
        </p>
        <p id="ingredients">{pizzaObj.ingredients}</p>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
