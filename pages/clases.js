import Layout from "../layout/Layout";
import styles from "../styles/Clases.module.css";
import Image from "next/image";
import Link from "next/link";

const Clases = () => {
  return (
    <Layout>
      <div className="container">
        <section className={styles.clasesHeader}>
          <h1>Nuestras clases</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </section>
        <section className={styles.clasesMain}>
          <article className={styles.card}>
            <div className={styles.cardimage}>
              <Image
                src="/img/cursos_bg.jpg"
                alt="logo"
                width={600}
                height={400}
              />
            </div>
            <div className={styles.cardbody}>
              <Link href="/">
                <a>Cardio para principantes</a>
              </Link>
              <p>Lunes y jueves </p>
              <p>10:00 - 11:00 horas</p>
            </div>
          </article>
          <article className={styles.card}>
            <div className={styles.cardimage}>
              <Image
                src="/img/cursos_bg.jpg"
                alt="logo"
                width={600}
                height={400}
              />
            </div>
            <div className={styles.cardbody}>
              <Link href="/">
                <a>Cardio para principantes</a>
              </Link>
              <p>Lunes y jueves </p>
              <p>10:00 - 11:00 horas</p>
            </div>
          </article>
        </section>
      </div>
    </Layout>
  );
};

export default Clases;
