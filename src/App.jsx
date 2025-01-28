//import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faDoorOpen,
  faHome,
  faPhone,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import ProductCard from "./ProductCard";

const NavBar = () => {
  return (
    <div className="navBar">
      <h3>Panaderia</h3>
      <ul>
        <li>
          <FontAwesomeIcon icon={faHome} /> Home
        </li>
        <li>
          <FontAwesomeIcon icon={faBox} /> Productos
        </li>
        <li>
          <FontAwesomeIcon icon={faPhone} /> Contacto
        </li>
        <li>
          <FontAwesomeIcon icon={faShoppingCart} /> Carrito
        </li>
        <li>
          <FontAwesomeIcon icon={faDoorOpen} /> Salir
        </li>
      </ul>
    </div>
  );
};

const ItemListContainer = () => {
  return (
    <div>
      <NavBar />
      <div className="itemListContainer">
        <ProductCard
          title="Medialunas"
          description="Medialunas de Manteca"
          price="5.000"
          image="./assets/image/medialunas (1).jpg" 
          alt="Medialunas de Manteca"
        />
        <ProductCard
          title="Pan de Campo"
          description="Pan Casero de Campo"
          price="2.500"
          image="./assets/image/pan (1).jpg" 
          alt="Pan Casero de Campo"
        />
        <ProductCard
          title="Tartas"
          description="Tarta de Frutas de Estacion"
          price="10.000"
          image="./assets/image/tartas (1).jpg"
          alt="Tarta de Frutas de Estacion"
        />
        <ProductCard
          title="Torta"
          description="Torta de Cumpleaños"
          price="15.000"
          image="./assets/image/torta (1).jpg"
          alt="Torta de Cumpleaños"
        />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ItemListContainer />
    </div>
  );
};

export default App;
export { NavBar };
export { ItemListContainer };
