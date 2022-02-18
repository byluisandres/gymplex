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
          <div className={styles.sketchy}>
            <Link href="/">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <rect
                    x="56"
                    y="56"
                    width="40"
                    height="144"
                    rx="8"
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="8"
                  ></rect>
                  <rect
                    x="160"
                    y="56"
                    width="40"
                    height="144"
                    rx="8"
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="8"
                  ></rect>
                  <path
                    d="M200,80h24a8,8,0,0,1,8,8v80a8,8,0,0,1-8,8H200"
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="8"
                  ></path>
                  <path
                    d="M56,176H32a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H56"
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="8"
                  ></path>
                  <line
                    x1="96"
                    y1="128"
                    x2="160"
                    y2="128"
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="8"
                  ></line>
                  <line
                    x1="232"
                    y1="128"
                    x2="248"
                    y2="128"
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="8"
                  ></line>
                  <line
                    x1="8"
                    y1="128"
                    x2="24"
                    y2="128"
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="8"
                  ></line>
                </svg>
                GYMPLEX
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
                <Link href="/clases">
                  <a
                    className={
                      router.pathname === "/clases" ||
                      router.pathname === "/clases/[slug]"
                        ? "active"
                        : ""
                    }
                  >
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
                  <a
                    className={
                      router.pathname === "/blog" ||
                      router.pathname === "/blog/[slug]"
                        ? "active"
                        : ""
                    }
                  >
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
