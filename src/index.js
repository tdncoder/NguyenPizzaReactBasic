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
  //   const style = { color: "red", fontSize: "50px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}> Nguyên Fast Pizza Co. </h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our MENU</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Đầu bếp Nguyên Pizza đã làm ra 6 loại Pizza cho mọi người ❤️. Tất cả
            Pizza đều chuẩn vị Ý nên mọi người nhanh tay đặt Pizza ngay nhé! 👨‍🍳
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObject={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Nguyên Pizza đang cập nhật menu 👨‍🍳. Xin vui lòng quay lại sau🙇</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
        />
        
        <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushroom"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizzaObject }) {
  // if (pizzaObject.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour <= closeHour;

  //   if (hour >= openHour && hour <= closeHour) {
  //     alert("We're currently Open!");
  //   } else {
  //     alert("Sorry we're closed!");
  //   }

  // if (!isOpen)
  //   return (
  //     <p>
  //       Đóng cửa mất tiuu òi 😭. Hãy quay lại Nguyên Pizza từ {openHour}:00 -{" "}
  //       {closeHour}
  //       :00 nhé 🥺
  //     </p>
  //   );

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          Đóng cửa mất tiuu òi 😭. Hãy quay lại Nguyên Pizza từ {openHour}:00 -{" "}
          {closeHour}
          :00 nhé 🥺
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        Xin chào, Nguyên Pizza mở cửa từ {openHour}:00 - {closeHour}
        :00. Hãy đến cửa hàng hoặc đặt Pizza Online nhé ❤️
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
