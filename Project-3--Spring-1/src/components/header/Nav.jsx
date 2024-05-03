import { useState } from "react";
import React from 'react';


export const Nav = (props) => {



  const [inputValue, setInputValue] = useState("");


  return (
    <>
    <div className="navhead">
      <input type="search" className="search-inp" placeholder="Search" onChange={(e) => { setInputValue(e.target.value) }} />

      {console.log(inputValue)}
    {props.setValue(inputValue)}
    </div>  

    </>
  );
};


