import { useState } from "react";
import Modal from "./Modal";

export const Card = ({data}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const openModal = (event) =>{
    setModalIsOpen(true)
  }
  return (
    <>
    <div className="item-box" >
      <div className="item">
        <div className="card-inner">
          <div className="card-front">
            <img className="item-image" src={data.image} alt="Photo" />
          </div>
          <div className="card-back">
            <h1>{data.name}</h1>
            <button className="more-btn" onClick={openModal}>More</button>
          </div>
        </div>
      </div>
      {/* Modal */}
<Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} data={data} />
      {/* End Modal */}
    </div>

  </>
  );
};
