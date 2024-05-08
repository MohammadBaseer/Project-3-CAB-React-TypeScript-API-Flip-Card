import { useEffect, useState } from "react";
import { Nav } from "./components/header/Nav";
import { Items } from "./components/pages/cardDesign/Items";

  
const App = () => {
  const [error, setError] =useState(null);
  const [getValue, setValue] = useState("");
  const [apiData, setApiData] = useState(null);
  const [page, setPage] = useState(1);
const [pageInfo, setPageInfo] = useState(null)

const fetchDataFromApi = async () => {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${getValue}`;
    setError(null)
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log('data', data)
      setPageInfo(data.info);
      if (data.results && data.results.length > 0) { 
        setApiData(data.results);
      } else {
        console.log("No Data Found")
        setApiData(null); 
        setError("No Data Found")
    }

    } catch (e) {
      setApiData(null);
      console.log("Error", e.message);
      setError(e.message)
    }
  };

useEffect(() => {
  fetchDataFromApi()
}, [page, getValue])


  return (
    <>
      <Nav setValue={setValue} />
      {apiData && (
          <Items apiData={apiData}  pageInfo={pageInfo} page={page} setPage={setPage} />
           )}
{error && <h1 className="error">{error}</h1>}        
    </>
  );
}

export default App;
