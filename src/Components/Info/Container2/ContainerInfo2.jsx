import React from "react";
import styles from "./Container2.module.css";

function ContainerInfo2() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lorem ipsum</h1>
      <div className={styles.parrafos}>
        <p className={styles.parrafo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna
        </p>
        <p className={styles.parrafo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna
        </p>
      </div>
    </div>
  );
}

export default ContainerInfo2;
