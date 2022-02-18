import Layout from "../layout/Layout";
import Image from "next/image";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import { formatDate } from "../utils/formatDate";

const Blog = ({ data }) => {
  return (
    <Layout>
      <div className="container">
        <section className={styles.blogMain}>
          {data.map((post, index) => (
            <article key={index} className={styles.card}>
              <div className={styles.cardimage}>
                <Image
                  src="/img/cursos_bg.jpg"
                  alt="logo"
                  width={600}
                  height={300}
                />
              </div>
              <div className={styles.cardbody}>
                <div className={styles.cardheader}>
                  <h2>{post.title.rendered}</h2>
                  <div className={styles.cardfooter}>
                    <p>{formatDate(post.modified)}</p>
                    <Link href={`/blog/${post.slug}`}>
                      <a>
                        Leer más
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`http://gymplex.test/wp-json/wp/v2/posts`);
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

export default Blog;
