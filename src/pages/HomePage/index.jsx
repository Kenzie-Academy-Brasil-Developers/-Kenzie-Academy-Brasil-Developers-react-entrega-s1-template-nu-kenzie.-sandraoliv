import { useState } from "react";
import { Form } from "../../components/Form";
import { TotalValue } from "../../components/TotalValue";
import { Resume } from "../../components/Resume";
import logo from "../../assets/image/Nu Kenzie (1).svg";
import styles from "./styles.module.css";

export function HomePage({ setIsHome, listTransactions, setListTransactions }) {
  const [total, setTotal] = useState(0);

  function handleSumTotal() {
    const entryArray = listTransactions.map((element) => {
      if (element.type === "entrada") {
        return Number(element.value);
      }
    });
    const TotalValueEntry = entryArray.reduce((previosValue, currentValue) => {
      return currentValue + previosValue;
    });

    const outArray = listTransactions.map((element) => {
      if (element.type === "saida") {
        return Number(element.value);
      }
    });
    const TotalValueOut = outArray.reduce((previosValue, currentValue) => {
      if (currentValue.type === "saida") {
        return Number(element.value);
      }
    });

    const result = TotalValueEntry - TotalValueOut;

    setTotal(result);
  }
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
          handleSumTotal={handleSumTotal}
        />
        <TotalValue total={total} listTransactions={listTransactions} />
      </div>
      <Resume listTransactions={listTransactions} />
    </div>
  );
}
