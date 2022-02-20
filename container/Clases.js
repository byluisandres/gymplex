import React from "react";
import styles from "../styles/Clases.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Clases = ({ data }) => {
  const router = useRouter();
  return (
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
                height={300}
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
      {router.pathname == "/" ? (
        <section className={styles.btnMore}>
          <Link href={"/clases"}>
            <a>Ver todas</a>
          </Link>
        </section>
      ) : null}
    </div>
  );
};

export default Clases;
