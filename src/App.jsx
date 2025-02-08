//import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faDoorOpen,
  faHome,
  faPhone,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import ItemListContainer from "./itemListContainer";
import "./App.css";


const NavBar = () => {
  return (
    <div className="navBar">
      <h3>Panaderia Doña Pepa</h3>
      <ul>
        <li><FontAwesomeIcon icon={faHome} />Home</li>
        <li><FontAwesomeIcon icon={faBox} />Productos</li>
        <li><FontAwesomeIcon icon={faPhone} />Contacto</li>
        <li><FontAwesomeIcon icon={faShoppingCart} />Carrito</li>
        <li><FontAwesomeIcon icon={faDoorOpen} />Salir</li>
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div className="appContainer">
      <NavBar />
      <div className="mainContent">
        <ItemListContainer greeting="Bienvenidos a Doña Pepa"/>
        </div>
    </div>
  );
};

export default App;
