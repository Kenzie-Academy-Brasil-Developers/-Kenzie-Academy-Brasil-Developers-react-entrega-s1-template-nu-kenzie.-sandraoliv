import styles from "./styles.module.css";
import { useState } from "react";
import { Form } from "../Form";

export function Transactions({ formData }) {
  console.log(formData);
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <ul className={styles.transactionContainer}>
      <>
        <h3>Resumo financeiro</h3>
        {listTransactions.map((transaction, index) => (
          <li key={index} className={styles.card}>
            <span> {transaction.description}</span>
            <span>{transaction.type}</span>
            <span>{transaction.value}</span>
          </li>
        ))}
      </>
    </ul>
  );
}
