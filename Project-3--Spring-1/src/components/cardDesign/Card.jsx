import ApiData from "../apiData/ApiData";

export const Card = () => {
  const openModal = (event) => {
    const modal = document.getElementById("myModal");
    const itemId = event.currentTarget.getAttribute("id");
    const data = ApiData.results.find((data) => data.id.toString() === itemId);

    console.log(data);

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

  const closeModal = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  return (
    <div className="item-box">
      {ApiData.results.map((data, index) => {
        return (
          <>
            <div className="item" key={index}>
              <div className="card-inner">
                <div className="card-front">
                  <img className="item-image" src={data.image} alt="Photo" />
                </div>
                <div className="card-back">
                  <h1>{data.name}</h1>
                  <button className="more-btn" id={data.id} onClick={openModal}>
                    More
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}

      {/* model Card */}
      <div id="myModal" className="modal model-card">
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
    </div>
  );
};
