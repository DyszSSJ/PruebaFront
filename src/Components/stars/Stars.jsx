import React from "react";
import styles from "./Stars.module.css";
import stars from "./StarsArreglo";

function Stars() {

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.estrellas}>
          {stars.map((star) => (
            <div key={star.id}>
              <img src={star.imagen} alt="star" />
              <img src={star.rectangulo} alt="rectangulo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stars;
