import React from "react";
import styles from "./Stars.module.css";
import stars from "./StarsArreglo";

function Stars() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.estrellas}>
          {stars.map((star) => (
            <div key={star.id} className={styles.imageEstrellas}>
              <div className={styles.flexStars}>
                <img src={star.imagen} />
              </div>
              <img src={star.rectangulo} alt="rectangulo" />
            </div>
          ))}
        </div>
        <p className={styles.parrafo}>Tu palabra, no nuestra</p>
        <p className={styles.parrafos}>After 15 years running The Yacht Week, people have a lot to say about us</p>
      </div>
    </div>
  );
}

export default Stars;
