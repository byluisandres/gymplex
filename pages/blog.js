import Layout from "../layout/Layout";
import Image from "next/image";
import styles from "../styles/Blog.module.css";

const Blog = () => {
  return (
    <Layout>
      <div className="container">
        <section className={styles.blogMain}>
          <article className={styles.card}>
            <div className="cardimage">
              <Image
                src="/img/cursos_bg.jpg"
                alt="logo"
                width={600}
                height={300}
              />
            </div>
            <div className={styles.cardheader}>
              <div>
                <p>11</p>
                <p>Nov</p>
              </div>
              <h2>Título</h2>
            </div>
            <div className={styles.cardbody}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div className={styles.cardfooter}>
              <button> Leer más</button>
            </div>
          </article>
          <article className={styles.card}>
            <div className="cardimage">
              <Image
                src="/img/cursos_bg.jpg"
                alt="logo"
                width={600}
                height={300}
              />
            </div>
            <div className={styles.cardheader}>
              <div>
                <p>11</p>
                <p>Nov</p>
              </div>
              <h2>Título</h2>
            </div>
            <div className={styles.cardbody}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div className={styles.cardfooter}>
              <button> Leer más</button>
            </div>
          </article>
          <article className={styles.card}>
            <div className="cardimage">
              <Image
                src="/img/cursos_bg.jpg"
                alt="logo"
                width={600}
                height={300}
              />
            </div>
            <div className={styles.cardheader}>
              <div>
                <p>11</p>
                <p>Nov</p>
              </div>
              <h2>Título</h2>
            </div>
            <div className={styles.cardbody}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div className={styles.cardfooter}>
              <button> Leer más</button>
            </div>
          </article>
          <article className={styles.card}>
            <div className="cardimage">
              <Image
                src="/img/cursos_bg.jpg"
                alt="logo"
                width={600}
                height={300}
              />
            </div>
            <div className={styles.cardheader}>
              <div>
                <p>11</p>
                <p>Nov</p>
              </div>
              <h2>Título</h2>
            </div>
            <div className={styles.cardbody}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div className={styles.cardfooter}>
              <button> Leer más</button>
            </div>
          </article>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;
