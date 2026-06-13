import { useState } from "react";
import Header from "./components/Header";
import Secao from "./components/Secao";
import "./App.css";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Secao>
          <Formulario />
        </Secao>
      </div>
    </>
  );
}

export default App;