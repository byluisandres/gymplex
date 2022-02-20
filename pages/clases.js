import Layout from "../layout/Layout";

import CClases from "../container/Clases";

const Clases = ({ data }) => {
  return (
    <Layout>
      <CClases data={data} />
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
