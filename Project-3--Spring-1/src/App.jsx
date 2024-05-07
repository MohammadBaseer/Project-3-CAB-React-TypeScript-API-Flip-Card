import { useEffect, useState } from "react";
import { Footer } from "./components/footer/Footer";
import { Nav } from "./components/header/Nav";
import { Card } from "./components/pages/cardDesign/Card";
import { ApiFetch } from "./components/apiData/ApiFetch";


function App() {
  // var chr = /^[a-zA-Z]+$/;
  const [getVlaue, setValue] = useState("");
  const [apiData, setApiData] = useState(null);
  const [nextPage, setNextPage] = useState(1);
  const [apiDataInfoPageNo, setApiDataInfoPageNo] = useState("");



// console.log("API Data From App Page =========", apiData)
  return (
    <>
      <Nav setValue={setValue} />
      <ApiFetch setApiData={setApiData} nextPage={nextPage} getVlaue={getVlaue} setApiDataInfoPageNo={setApiDataInfoPageNo}/>
      {apiData && (
        <Card getVlaue={getVlaue} apiData={apiData} setNextPage={setNextPage} apiDataInfoPageNo={apiDataInfoPageNo} />
      )}

    </>
  );
}

export default App;
