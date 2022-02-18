import React, { useState } from "react";
import Layout from "../layout/Layout";
import Image from "next/image";
import styles from "../styles/Galeria.module.css";

const Galeria = ({ data }) => {
  const images = data[0].crb_media_gallery_urls;

  return (
    <Layout>
      <div className="container">
        <div className={styles.contentgaleria}>
          <ul className={styles.galeriaimagenes}>
            {images.map((image, index) => (
              <li key={index}>
                {/* TODO: colocar imágen de producción */}
                {index + 1 == 4 || index + 1 == 6 ? (
                  <>
                    <Image
                      src={"/img/cursos_bg.jpg"}
                      alt="logo"
                      width={350}
                      height={724}
                    />
                  </>
                ) : (
                  <>
                    <Image
                      src={"/img/cursos_bg.jpg"}
                      alt="logo"
                      width={350}
                      height={350}
                    />
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};
export async function getStaticProps() {
  const res = await fetch(`http://gymplex.test/wp-json/wp/v2/galeria`);
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

export default Galeria;
