import React from "react";
import ballena from "../../../assets/ballena.png";
import vector from "../../../assets/Subtract.png";
import styles from "./Imagenes.module.css";

function Imagenes() {
  return (
    <div>
      <h2 className={styles.title}>Ready to sail</h2>
      <img src={ballena} alt="" className={styles.ballena} />
      <img src={vector} alt="" className={styles.vector} />
    </div>
  );
}

export default Imagenes;
