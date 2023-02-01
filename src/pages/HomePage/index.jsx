import { useState } from "react";
import { Form } from "../../components/Form";
import { TotalValue } from "../../components/TotalValue";
import { Resume } from "../../components/Resume";
import logo from "../../assets/image/Nu Kenzie (1).svg";
import styles from "./styles.module.css";

export function HomePage({ setIsHome, listTransactions, setListTransactions }) {
  return (
    <div className={styles.HomeMainContainer}>
      <header className={styles.headerHomePage}>
        <img src={logo} alt="logo" className={styles.HomeLogo} />
        <button
          className={styles.homePageButton}
          onClick={() => setIsHome(false)}
        >
          Início
        </button>
      </header>
      <div className={styles.FormAndTransactions}>
        <Form
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
        <TotalValue listTransactions={listTransactions} />
      </div>
      <Resume listTransactions={listTransactions} />
    </div>
  );
}
