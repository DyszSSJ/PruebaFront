import React, { useState } from "react";
import styles from "../NavBar/NavBar.module.css";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

function Header() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <div>
      <nav className={styles.navBar}>
        <div className={styles.logo}>
          <h1>WKND</h1>
        </div>
        <ul className={styles.list}>
          <div className={styles.drop}>
            <li onClick={() => setShow(!show)}>
              Galeria
              <i>
                <IoMdArrowDropdown />
              </i>
            </li>
            <div>
              {show && (
                <div className={styles.dropdown}>
                  <li className={styles.listItem}>
                    <a href="#">Empleados</a>
                  </li>
                  <li className={styles.listItem}>
                    <a href="#">Fotos</a>
                  </li>
                </div>
              )}
            </div>
          </div>

          <li>Servicios</li>

          <div className={styles.drop}>
            <li onClick={() => setShow2(!show2)}>
              Sobre Nosotros
              <i>
                <IoMdArrowDropdown />
              </i>
            </li>
            <div>
              {show2 && (
                <div className={styles.dropdown2}>
                  <li className={styles.listItem}>
                    <a href="#">Empresa</a>
                  </li>
                  <li className={styles.listItem}>
                    <a href="#">Tecnologia</a>
                  </li>
                  <li className={styles.listItem}>
                    <a href="#">Empresarial</a>
                  </li>
                </div>
              )}
            </div>
          </div>

          <li>Contacto</li>
        </ul>
        <button className={styles.btn}>
          <i>
            <FaRegUserCircle />
          </i>
          <p>Ingresar</p>
        </button>
      </nav>
    </div>
  );
}

export default Header;
