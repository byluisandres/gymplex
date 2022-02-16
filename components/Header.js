import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.barra}>
          <div>
            <Link href="/">
              <a>
                <Image
                  src="/img/logo.svg"
                  alt="logo"
                  width={300}
                  height={100}
                />
              </a>
            </Link>
          </div>
          <nav className={styles.navegacion}>
            <ul>
              <li>
                <Link href="/">
                  <a className={router.pathname === "/" ? "active" : ""}>
                    Inicio
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/nosotros">
                  <a
                    className={router.pathname === "/nosotros" ? "active" : ""}
                  >
                    Nosotros
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/clases">
                  <a className={router.pathname === "/clases" ? "active" : ""}>
                    Clases
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/galeria">
                  <a className={router.pathname === "/galeria" ? "active" : ""}>
                    Galería
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className={router.pathname === "/blog" ? "active" : ""}>
                    Blog
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contacto">
                  <a
                    className={router.pathname === "/contacto" ? "active" : ""}
                  >
                    Contacto
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
