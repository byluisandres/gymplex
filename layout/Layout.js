import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";

useRouter;
const Layout = ({ children }) => {
  const router = useRouter();
  const name = router.pathname.split("/").filter((v) => v.length > 0)[0];

  return (
    <>
      <Head>
        <title>Gymplex {name ? `- ${name}` : ""}</title>
      </Head>
      <Header />
      <main className="container h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
