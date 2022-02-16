import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="footer-info"></div>
        <div className={styles.footerCopyright}>
          <p>
            All design and content Copyright © Gymflex. All rights reserved.
            <span className="year">{new Date().getFullYear()}</span>
          </p>
          <p>
            Gimnasio Low Cost con una ubicación inmejorable, mucha luz natural y
            gran espacio interior.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
