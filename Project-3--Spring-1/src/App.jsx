import { useState } from "react";
import { Footer } from "./components/footer/Footer";
import { Nav } from "./components/header/Nav";
import { Card } from "./components/cardDesign/Card";

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
