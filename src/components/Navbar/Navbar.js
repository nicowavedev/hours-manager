import React, { useState } from "react";
import "./Navbar.css";

function NavBar() {
  const [showMenuBurger, setShowMenuBurger] = useState(false);
  return (
    <nav className="caja-principal">
      <div
        onMouseOver={() => {
          setShowMenuBurger(true);
        }}
        // onMouseOut={() => setShowMenuBurger(false)}
      >
        icono
      </div>
      {showMenuBurger && (
        <div
          onMouseOver={() => {
            setShowMenuBurger(true);
          }}
          onMouseOut={() => setShowMenuBurger(false)}
        >
          <ul>
            <li>
              <a href="#">Contacto</a>
            </li>
            <li>
              <a href="#">Artistas</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Opcion 4</a>
            </li>
          </ul>
        </div>
      )}
      <div>
        <h1>make me schön</h1>
      </div>
    </nav>
  );
}

export default NavBar;
