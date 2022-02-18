import React from "react";
import Layout from "../../layout/Layout";
import Image from "next/image";
import styles from "../../styles/Blog.module.css";

const Post = ({ data }) => {
  return (
    <Layout>
      <div className="container">
        <section className="mt-3">
          <Image
            src="/img/cursos_bg.jpg"
            alt="logo"
            width={1200}
            height={400}
          />
        </section>
        <section className={styles.postbody}>
          <h2>{data.title.rendered}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: data.content.rendered }}
          ></div>
        </section>
      </div>
    </Layout>
  );
};
export async function getStaticPaths() {
  const url = "http://gymplex.test/wp-json/wp/v2/posts";
  const res = await fetch(url);
  const data = await res.json();
  const paths = data.map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`http://gymplex.test/wp-json/wp/v2/posts`);
  const posts = await res.json();
  const postsArray = posts.filter((post) => post.slug == slug);
  const data = postsArray.length > 0 ? postsArray[0] : null;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
export default Post;
