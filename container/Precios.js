import React from "react";
import { formatCurrency } from "../utils/formatCurrency";
import styles from "../styles/Precios.module.css";

const Precios = ({ data }) => {
  return (
    <div className={styles.tarifas}>
      <div className="container">
        <h2>Precios y tarifas</h2>
        <p>El momento perfecto para empezar es HOY</p>
        <div className={styles.contenedortarifas}>
          <article className={styles.tarifa}>
            <h3>{data.tarifa_1.texto}</h3>
            <div className={styles.contenedorprice}>
              <div className={styles.price}>
                <p>
                  {formatCurrency(data.tarifa_1.precio)}
                  <span className={styles.mes}> /mes</span>
                </p>
              </div>
            </div>
            <span>{data.tarifa_1.subtexto}</span>
          </article>
          <article className={styles.tarifa}>
            <h3>{data.tarifa_2.texto}</h3>
            <div className={styles.contenedorprice}>
              <div className={styles.price}>
                <p>
                  {formatCurrency(data.tarifa_2.precio)}
                  <span className={styles.mes}> /mes</span>
                </p>
              </div>
            </div>
            <span>{data.tarifa_2.subtexto}</span>
          </article>
          <article className={styles.tarifa}>
            <h3>{data.tarifa_3.texto}</h3>
            <div className={styles.contenedorprice}>
              <div className={styles.price}>
                <p>
                  {formatCurrency(data.tarifa_3.precio)}
                  <span className={styles.mes}> /mes</span>
                </p>
              </div>
            </div>
            <span>{data.tarifa_3.subtexto}</span>
          </article>
          <article className={styles.tarifa}>
            <h3>{data.tarifa_4.texto}</h3>
            <div className={styles.contenedorprice}>
              <div className={styles.price}>
                <p>
                  {formatCurrency(data.tarifa_4.precio)}
                  <span className={styles.mes}> /mes</span>
                </p>
              </div>
            </div>
            <span>{data.tarifa_4.subtexto}</span>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Precios;
