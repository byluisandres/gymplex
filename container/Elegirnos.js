import React from "react";
import styles from "../styles/Elegirnos.module.css";

const Elegirnos = ({ data }) => {
  return (
    <div className="container">
      <section className={styles.elegirnosHeader}>
        <h2>Porque Elegirnos</h2>
      </section>
      <section className={styles.elegirnosContent}>
        {data.map((elegirnos, index) => (
          <article key={elegirnos.id} className={styles.item}>
            <p>
              <span>{index + 1}.-</span>
              {elegirnos.title.rendered}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Elegirnos;
