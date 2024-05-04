import { useState, useEffect } from "react";
import { Footer } from "./components/footer/Footer";
import { Nav } from "./components/header/Nav";
import { Card } from "./components/pages/cardDesign/Card";
import ChildOne from "./components/pages/test-files/ChildOne";
import ChildTwo from "./components/pages/test-files/ChildTwo";

function App() {

const [getVlaue, setValue]= useState("");

  return (
    <>
      <Nav setValue={setValue} />
      <Card getVlaue={getVlaue} />
      <Footer />
      
    </>
  );
}

export default App;
