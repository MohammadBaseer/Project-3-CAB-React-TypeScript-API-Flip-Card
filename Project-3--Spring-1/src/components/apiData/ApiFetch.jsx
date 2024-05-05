import React, { useEffect, useState } from 'react'

export const ApiFetch =  (props) =>{

        const getDataFromApi = async () => {
            // spinner("block");

            
            const url = `https://rickandmortyapi.com/api/character/?page=${props.nextPage}`;
          
            try {
              const res = await fetch(url);
              const data = await res.json();
              // console.log(data);
              const apiData = data;
              props.setApiData(apiData);
            //   console.log(apiData.results)
            //   controller(apiData);
            //   spinner("none");
            } catch (err) {
              console.log(err);
            //   msg(err);
            //   spinner("none");
          
            }
          };

useEffect(() => {
    getDataFromApi();

}, [props.nextPage])



  return null;
}















// export const ApiFetch = async () => {
//     spinner("block");
//     const url = "https://rickandmortyapi.com/api/character/?page=1";
  
//     try {
//       const res = await fetch(url);
//       const data = await res.json();
//       // console.log(data);
//       const apiData = data;
//       controller(apiData);
//       spinner("none");
//     } catch (err) {
//       // console.log(err);
//       msg(err);
//       spinner("none");
  
//     }
//   };
