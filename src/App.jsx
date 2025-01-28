import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faDoorOpen, faHome, faPhone, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <div className="navBar">
      <h3>Panaderia</h3>
      <ul>
        <li><FontAwesomeIcon icon={faHome} /> Home</li>
        <li><FontAwesomeIcon icon={faBox} /> Productos</li>
        <li><FontAwesomeIcon icon={faPhone} /> Contacto</li>
        <li><FontAwesomeIcon icon={faShoppingCart} /> Carrito</li>
        <li><FontAwesomeIcon icon={faDoorOpen} /> Salir</li>
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <NavBar />
    </div>
  );
};

export default App;
