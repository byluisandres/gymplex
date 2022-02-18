import React from "react";
import Layout from "../layout/Layout";
import dynamic from "next/dynamic";
import styles from "../styles/Contacto.module.css";

const Map = dynamic(() => import("../components/Map"), { ssr: false });
const Contacto = ({ data }) => {
  const { direccion, ubicacion, correo_electronico, movil } = data.acf;
  return (
    <Layout>
      <div className="container">
        <section className={styles.map}>
          <h2>Localización</h2>
          <hr />
          <Map direccion={direccion} ubicacion={ubicacion} />
        </section>
        <section className={styles.info}>
          <h2>Contacto</h2>
          <hr />
          <article className={styles.infodireccion}>
            <h5>Dirección:</h5>
            <p>{direccion}</p>
            <p>{ubicacion}</p>
          </article>
          <article className={styles.infomail}>
            <h5>Correo electrónico:</h5>
            <p>
              <a href={`mailto:${correo_electronico}`}>{correo_electronico}</a>{" "}
            </p>
          </article>
          <article className={styles.infophone}>
            <h5>Móvil</h5>
            <p>
              <a href={`tel:+34${movil}`}>{movil}</a>
            </p>
          </article>
        </section>
      </div>
    </Layout>
  );
};
export async function getStaticProps() {
  const res = await fetch(`http://gymplex.test/wp-json/wp/v2/pages/101`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Contacto;
