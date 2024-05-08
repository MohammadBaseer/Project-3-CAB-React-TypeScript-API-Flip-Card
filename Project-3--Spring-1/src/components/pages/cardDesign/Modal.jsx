import React from "react";
function Modal({ modalIsOpen, setModalIsOpen, data }) {
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleModalClick = (event) => {
    if (event.target.id === "myModal") {
      setModalIsOpen(false);
    }
  };

  // ---------------
  return (
    <>
      <div id="myModal" className="modal model-card" style={modalIsOpen === true ? { display: "flex" } : { display: "none" }} onClick={handleModalClick} >
        <div className="model-inner">
          <div className="model-front">
            <div className="title">
              <h1>{data.name}</h1>
            </div>
            <img className={"model-image"} src={data.image} alt="Photo" />
            <div className="model-elment">
              <p className="species">{data.species}</p>
              <p className="status">{data.status}</p>
              <button className="close" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
