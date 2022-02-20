import React from "react";
import styles from "../styles/Areas.module.css";

const Areas = ({ data }) => {
  return (
    <div className={styles.areas}>
      <ul className={styles.contenedorareas}>
        <li className={styles.area}>
          <img src="/img/cursos_bg.jpg" />

          <p>{data.area_1.texto}</p>
        </li>
        <li className={styles.area}>
          <img src="/img/header.jpg" />
          <p>{data.area_2.texto}</p>
        </li>
        <li className={styles.area}>
          <img src="/img/nosotros.jpg" />
          <p>{data.area_3.texto}</p>
        </li>
        <li className={styles.area}>
          <img src="/img/cursos_bg.jpg" />
          <p>{data.area_4.texto}</p>
        </li>
      </ul>
    </div>
  );
};

export default Areas;
