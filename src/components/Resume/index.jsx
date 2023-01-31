import styles from "./styles.module.css";
import { useState } from "react";
import { Form } from "../Form";
import trash from "../../assets/image/trash (1).svg";
export function Resume({ listTransactions }) {
  return (
    <ul className={styles.transactionContainer}>
      <>
        <h3>Resumo financeiro</h3>
        {listTransactions.map((transaction, index) => (
          <li key={index} className={styles.card}>
            <span> {transaction.description}</span>
            <span>{transaction.type}</span>
            <span>{transaction.value} ,00</span>
            <button>
              <img src={trash} alt="trash" />
            </button>
          </li>
        ))}
      </>
    </ul>
  );
}
