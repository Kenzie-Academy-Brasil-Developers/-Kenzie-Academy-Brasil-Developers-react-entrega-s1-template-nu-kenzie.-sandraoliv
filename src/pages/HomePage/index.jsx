import { useState } from "react";
import { Form } from "../../components/Form";
import { TotalValue } from "../../components/TotalValue";
import { Transactions } from "../../components/Transactions";
import logo from "../../assets/image/Nu Kenzie (1).svg";
import styles from "./styles.module.css";

export function HomePage({ setIsLanding }) {
  return (
    <div className={styles.HomeMainContainer}>
      <header className={styles.headerHomePage}>
        <img src={logo} alt="logo" className={styles.HomeLogo} />
        <button
          className={styles.homePageButton}
          onClick={() => setIsLanding("LandingPage")}
        >
          Início
        </button>
      </header>
      <div className={styles.FormAndTransactions}>
        <Form />
        <Transactions />
        <TotalValue />
      </div>
    </div>
  );
}
