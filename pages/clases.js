import Layout from "../layout/Layout";
import styles from "../styles/Clases.module.css";
import Image from "next/image";
import Link from "next/link";

const Clases = ({ data }) => {
  return (
    <Layout>
      <div className="container">
        <section className={styles.clasesHeader}>
          <h1>Nuestras clases</h1>
        </section>
        <section className={styles.clasesMain}>
          {data.map((clase) => (
            <article key={clase.id} className={styles.card}>
              <div className={styles.cardimage}>
                {/* TODO: colocar imágen de producción */}
                <Image
                  src="/img/cursos_bg.jpg"
                  alt="logo"
                  width={600}
                  height={400}
                />
              </div>
              <div className={styles.cardbody}>
                <Link href={`/clases/${clase.slug}`}>
                  <a>{clase.title.rendered}</a>
                </Link>
                <div className={styles.days}>
                  {clase.crb_available_days.map((day, index) => (
                    <p key={index}>
                      <span>{day}</span>
                    </p>
                  ))}
                </div>
                <p>
                  {clase.crb_class_start} - {clase.crb_class_end} horas
                </p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </Layout>
  );
};
export async function getServerSideProps() {
  const res = await fetch(`http://gymplex.test/wp-json/wp/v2/clases`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default Clases;
