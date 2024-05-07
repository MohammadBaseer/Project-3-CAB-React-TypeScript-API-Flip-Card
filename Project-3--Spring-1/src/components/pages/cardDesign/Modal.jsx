import React from "react";

function Modal() {
  // -------------
  const closeModal = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
    setIsopen(false)
  };
  // -------------
  window.onclick = function (event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  // ---------------
  return (
    <>
      {/* model Card */}
      <div id="myModal" className="modal model-card" >
     
        <div className="model-inner">
          <div className="model-front">
            <div className="title">
              <h1>Title</h1>
            </div>
            <img className="model-image" src="{data.image}" alt="Photo" />
            <div className="model-elment">
              <p className="species">Name</p>
              <p className="status">Title</p>
              <button className="close" onClick={closeModal}>
                Cloes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Model card */}
    </>
  );
}

export default Modal;
