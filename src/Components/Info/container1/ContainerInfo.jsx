import React from "react";
import styles from "./Container1.module.css";

function ContainerInfo() {
  return (
    <div>
      <p className={styles.title}>Lorem ipsum</p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna
      </p>
    </div>
  );
}

export default ContainerInfo;
