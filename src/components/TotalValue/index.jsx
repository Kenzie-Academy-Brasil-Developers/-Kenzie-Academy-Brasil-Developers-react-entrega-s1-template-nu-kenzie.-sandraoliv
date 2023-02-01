import { useState } from "react";
import styles from "./styles.module.css";
export function TotalValue({ listTransactions }) {
  const total = listTransactions.reduce(
    (previosValue, currentValue) => previosValue + currentValue.value,
    0
  );

  return (
    <>
      <div>
        <h3>Valor total: $ {total} ,00</h3>
        <p>O valor se refere ao saldo </p>
      </div>
    </>
  );
}
