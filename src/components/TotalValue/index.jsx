import { useState } from "react";
import styles from "./styles.module.css";
export function TotalValue({ listTransactions }) {
  console.log(listTransactions);
  const total = listTransactions.reduce(
    (previosValue, currentValue) =>
      currentValue.type === "entrada"
        ? previosValue + currentValue.value
        : previosValue - currentValue.value,

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
