import React from "react";
import Layout from "../layout/Layout";
import styles from "../styles/Inicio.module.css";

import Areas from "../container/Areas";
import Precios from "../container/Precios";
import Clases from "../container/Clases";
import Carousel from "../container/Carousel";
import Elegirnos from "../container/Elegirnos";

const Inicio = ({ data, dataClases, dataInstructores, dataElegirnos }) => {
  const clases = dataClases.slice(0, 4);
  const instructores = dataInstructores.slice(0, 4);
  const {
    imagen_hero,
    encabezado_hero,
    contenido_hero,
    encabezado_bienvenida,
    texto_bienvenida,
  } = data.acf;
  //console.log(parseFloat(data.acf.tarifa_1.precio));
  return (
    <Layout>
      <div
        className={styles.hero}
        style={{ backgroundImage: "url('../img/cursos_bg.jpg')" }}
      >
        <div className="container">
          <h1>{encabezado_hero}</h1>
          <p>{contenido_hero}</p>
        </div>
      </div>
      <div className="container">
        <div className={styles.bienvenida}>
          <h1>{encabezado_bienvenida}</h1>
          <p>{texto_bienvenida}</p>
        </div>
      </div>
      {/* areas */}
      <Areas data={data.acf} />
      {/* precios */}
      <Precios data={data.acf} />
      {/* clases */}
      <Clases data={clases} />

      {/* Por que eleguirnos */}
      <Elegirnos data={dataElegirnos} />

      {/* instructores */}
      <Carousel data={instructores} />
    </Layout>
  );
};

export async function getStaticProps() {
  const urlP = "http://gymplex.test/wp-json/wp/v2/pages/123";
  const urlC = "http://gymplex.test/wp-json/wp/v2/clases";
  const urlIn = "http://gymplex.test/wp-json/wp/v2/instructores";
  const urlEl = "http://gymplex.test/wp-json/wp/v2/elegirnos";

  const [resP, resC, resIn, resEl] = await Promise.all([
    fetch(urlP),
    fetch(urlC),
    fetch(urlIn),
    fetch(urlEl),
  ]);

  const [data, dataClases, dataInstructores, dataElegirnos] = await Promise.all(
    [resP.json(), resC.json(), resIn.json(), resEl.json()]
  );

  if (!data || !dataClases || !dataInstructores || !dataElegirnos) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data, dataClases, dataInstructores, dataElegirnos },
  };
}

export default Inicio;
