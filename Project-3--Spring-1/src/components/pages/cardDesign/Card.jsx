// import ApiData from "../../apiData/ApiData";
import { useState, useEffect } from "react";
import Modal from "./Modal";

export const Card = (props) => {
  // ---------------
  const openModal = (event) => {
    const modal = document.getElementById("myModal");

    const itemId = event.currentTarget.getAttribute("id");
    const data = ApiData.results.find((data) => data.id.toString() === itemId);

    const modalContaint = document.querySelector(".modal");
    const modalTitle = modalContaint.querySelector(".title h1");
    const modalImage = modalContaint.querySelector(".model-image");
    const modalName = modalContaint.querySelector(".species");
    const modalStatus = modalContaint.querySelector(".status");

    modalTitle.textContent = data.name;
    modalImage.src = data.image;
    modalName.textContent = "Species: " + data.species;
    modalStatus.textContent = "Status: " + data.status;
    modal.style.display = "flex";
  };
  // Thi Props recicved Data from APiFetch Page
  const ApiData = props.apiData;

  // This Variable data come form Nav Page to Get the search INPUT value
  const SearchValue = props.getVlaue.trim();

  // Next and Prev Buttons Handler
  // ========================================= Start
  const [page, setPage] = useState(1);

  function next() {
    let i = page;
    setPage(++i);
    props.setNextPage(i);
    const apiDataPageNumber = ApiData.info.pages;
    if (i >= apiDataPageNumber) {
      document.querySelector(".nextBtn").setAttribute("disabled", "");
    }
    document.querySelector(".prevtBtn").removeAttribute("disabled", "");
  }

  // ================== End

  const prev = () => {
    let i = page;
    setPage(--i);
    props.setNextPage(i);

    const apiDataPageNumber = ApiData.info.pages;
    if (i === 1) {
      document.querySelector(".prevtBtn").setAttribute("disabled", "");
    }
    document.querySelector(".nextBtn").removeAttribute("disabled", "");
  };

  useEffect(() => {
    if (page === 1) {
      document.querySelector(".prevtBtn").setAttribute("disabled", "");
    }
  }, [page]);

  return (
    <>
      <div className="item-box">
        {ApiData.results
          .filter(
            (data) => data.name && data.name.toLowerCase().includes(SearchValue)
          )
          .map((data, index) => {
            return (
              <>
                <div className="item">
                  <div className="card-inner">
                    <div className="card-front">
                      <img
                        className="item-image"
                        src={data.image}
                        alt="Photo"
                        key={index}
                      />
                    </div>
                    <div className="card-back">
                      <h1>{data.name}</h1>
                      <button
                        className="more-btn"
                        id={data.id}
                        onClick={openModal}
                      >
                        More
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        {ApiData.results.filter(
          (data) => data.name && data.name.toLowerCase().includes(SearchValue)
        ).length === 0 && <p>No Data Found</p>}
        <Modal />
      </div>
      <div className="paging">
        <div>
          <button className="paging-btn prevtBtn" onClick={prev}>
            {"<"}
          </button>
          <button className="paging-btn nextBtn" onClick={next}>
            {">"}
          </button>
        </div>
      </div>
    </>
  );
};
