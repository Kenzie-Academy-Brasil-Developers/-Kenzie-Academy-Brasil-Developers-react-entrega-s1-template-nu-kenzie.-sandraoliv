import { useState } from "react";
import styles from "./styles.module.css";
import logo from "../../assets/image/Nu Kenzie.svg";
import illustration from "../../assets/image/Illustration.svg";
export function LandingPage({ setIsHome }) {
  return (
    <div className={styles.mainContainer}>
      <header className={styles.landingPageHeader}>
        <img src={logo} alt="logo" className={styles.logo} />
        <h1 className={styles.title}>
          Centralize o<br /> controle das suas
          <br /> finanças
        </h1>
        <p>de forma rápida e segura</p>
        <button
          className={styles.landingPageButton}
          onClick={() => setIsHome(true)}
        >
          Iniciar
        </button>
      </header>
      <div className={styles.imageContent}>
        <img
          src={illustration}
          alt="landingPage"
          className={styles.landingPage}
        />
      </div>
    </div>
  );
}
