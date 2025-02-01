
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faDoorOpen,
  faHome,
  faPhone,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import ItemListContainer from "./itemListContainer.jsx";
import "./App.css";
import CartWidget from "./CartWidget.jsx";

function NavBar() {
  return (
    <div className="navbar">
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
}

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <CartWidget />
    </>
  );
};

export default App;
