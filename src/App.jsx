import { useState } from "react";

import { HomePage } from "./pages/HomePage";
import { LandingPage } from "./pages/LandingPage";

function App() {
  const [isHome, setIsHome] = useState(false);
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: 150 },
  ]);
  return (
    <>
      {isHome === false ? (
        <LandingPage setIsHome={setIsHome} />
      ) : (
        <HomePage
          setIsHome={setIsHome}
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      )}
    </>
  );
}

export default App;
