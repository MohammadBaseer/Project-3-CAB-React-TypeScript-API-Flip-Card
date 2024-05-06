import { useState, useEffect } from "react";
import { Footer } from "./components/footer/Footer";
import { Nav } from "./components/header/Nav";
import { Card } from "./components/pages/cardDesign/Card";
import { ApiFetch } from "./components/apiData/ApiFetch";

function App() {
  const [getVlaue, setValue] = useState("");
  const [apiData, setApiData] = useState("");
  const [nextPage, setNextPage] = useState(1);

  return (
    <>
      <Nav setValue={setValue} />
      <ApiFetch setApiData={setApiData} nextPage={nextPage} />
      {apiData && (
        <Card getVlaue={getVlaue} apiData={apiData} setNextPage={setNextPage} />
      )}
      <Footer />
    </>
  );
}

export default App;
