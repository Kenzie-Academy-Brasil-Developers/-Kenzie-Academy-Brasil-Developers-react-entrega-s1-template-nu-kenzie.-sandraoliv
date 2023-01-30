import { useState } from "react";
import styles from "./styles.module.css";

export function LandingPage({ setIsHome }) {
  return (
    <div className={styles.mainContainer}>
      <header className={styles.landingPageHeader}>
        <img
          src="./src/assets/image/Nu Kenzie.svg"
          alt="logo"
          className={styles.logo}
        />
        <h1 className={styles.title}>
          Centralize o<br /> controle das suas
          <br /> finanças
        </h1>
        <p>de forma rápida e segura</p>
        <button
          className={styles.landingPageButton}
          // onClick={() => setIsHome("HomePage")}
          onClick={setIsHome}
        >
          Iniciar
        </button>
      </header>
      <div className={styles.imageContent}>
        <img
          src="./src/assets/image/Illustration.svg"
          alt="landingPage"
          className={styles.landingPage}
        />
      </div>
    </div>
  );
}
