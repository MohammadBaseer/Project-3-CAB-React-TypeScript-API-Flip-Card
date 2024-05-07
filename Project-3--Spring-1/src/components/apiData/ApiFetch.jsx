import React, { useEffect, useState } from "react";

export const ApiFetch = (props) => {
  const getDataFromApi = async () => {
    const url = `https://rickandmortyapi.com/api/character/?page=${props.nextPage}&name=${props.getVlaue}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      const apiData = data;
      props.setApiDataInfoPageNo(apiData.info.pages);
      if (apiData.results.length > 0) {
        props.setApiData(apiData.results);
      } 
    } catch (err) {
      console.log("Error======Error----------------------------- ", err);
      props.setApiData(null);
    }
  };


  useEffect(() => {
    getDataFromApi();
  }, [props.nextPage, props.getVlaue]);

  return null;
};
