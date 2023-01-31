import { useState } from "react";
import styles from "./styles.module.css";
export function Form({
  setListTransactions,
  listTransactions,
  handleSumTotal,
}) {
  const [formData, setFormData] = useState({
    description: "",
    type: "entrada",
    value: {},
  });

  function addData(formData) {
    setListTransactions([...listTransactions, formData]);
    console.log();
  }

  function submit(event) {
    event.preventDefault();
    if (formData.description != "") {
      addData(formData);
      setFormData({ description: "", type: "entrada", value: {} });
    }
  }
  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={submit}>
        <div className={styles.descriptionLabel}>
          <label htmlFor="descricao">Descrição</label>
          <input
            className={styles.descriptionInput}
            type="text"
            id="descricao"
            value={formData.description}
            placeholder="Digite aqui sua descrição"
            onChange={(event) =>
              setFormData({ ...formData, description: event.target.value })
            }
          />
        </div>

        <div className={styles.valueAndSelect}>
          <div className={styles.value}>
            <label htmlFor="valor">Valor</label>
            <input
              placeholder="Digite um valor"
              type="number"
              id="valor"
              value={formData.value}
              className={styles.valor}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  value: event.target.value,
                })
              }
            />
          </div>
          <div className={styles.select}>
            <label htmlFor="tipodeentrada">Tipo de entada</label>

            <select
              defaultValue={formData.type}
              onChange={(event) =>
                setFormData({ ...formData, type: event.target.value })
              }
            >
              <option value="entrada">Entrada</option>
              <option value="saida">Saída</option>
            </select>
          </div>
        </div>
        <button className={styles.insertValueButton} type="submit">
          Inserir valor
        </button>
      </form>
    </div>
  );
}
