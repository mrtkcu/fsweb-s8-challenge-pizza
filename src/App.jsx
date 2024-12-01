import { useState } from "react";
import Header from "./components/Header";
import OrderPizza from "./components/OrderPizza";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <OrderPizza />
    </>
  );
}

export default App;
