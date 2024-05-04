import { useState } from "react";
import React from "react";

export const Nav = (props) => {
  const handlerInput = (e) => {
    const inputValue = e.target.value;
    props.setValue(inputValue);
  };
  return (
    <>
      <div className="navhead">
        <input
          type="search"
          className="search-inp"
          placeholder="Search"
          onChange={handlerInput}
        />
      </div>
    </>
  );
};
