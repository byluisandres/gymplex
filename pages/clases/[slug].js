import React from "react";
import Layout from "../../layout/Layout";
import Image from "next/image";
import styles from "../../styles/Clases.module.css";

const ClaseShow = ({ data }) => {
  return (
    <Layout>
      <div className="container">
        <section className={styles.claseimage}>
          <Image
            src="/img/cursos_bg.jpg"
            alt="logo"
            width={1200}
            height={400}
          />
        </section>
        <section className={styles.clasebody}>
          <h2>{data.title.rendered}</h2>
          <div className={styles.clasedays}>
            <span>
              {data.crb_class_start} - {data.crb_class_end} horas
            </span>
            <span>|</span>
            {data.crb_available_days.map((day, index) => (
              <p key={index}>
                <span>{day}</span>
              </p>
            ))}
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: data.content.rendered }}
          ></div>
        </section>
      </div>
    </Layout>
  );
};
export async function getStaticPaths() {
  const url = "http://gymplex.test/wp-json/wp/v2/clases";
  const res = await fetch(url);
  const data = await res.json();
  const paths = data.map((clase) => ({
    params: { slug: clase.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`http://gymplex.test/wp-json/wp/v2/clases`);
  const clases = await res.json();
  const clasesArray = clases.filter((clase) => clase.slug == slug);
  const data = clasesArray.length > 0 ? clasesArray[0] : null;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default ClaseShow;
