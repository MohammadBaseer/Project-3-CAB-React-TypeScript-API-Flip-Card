import React from "react";

export const Nav = ({setValue}) => {
  const handlerInput = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
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
