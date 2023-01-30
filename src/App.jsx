import { useState } from "react";
import { HomePage } from "./pages/HomePage";
import { LandingPage } from "./pages/LandingPage";

function App() {
  const [isHome, setIsHome] = useState(false);
  const [isLanding, setIsLanding] = useState(false);

  return (
    <>
      {isHome === false ? (
        <LandingPage setIsHome={setIsHome} />
      ) : (
        <HomePage setIslanding={setIsLanding} />
      )}
    </>
  );
}

export default App;
