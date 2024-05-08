
function Modal({modalIsOpen, setModalIsOpen, data }) {

   const closeModal = () => {
    setModalIsOpen(false)
  };
  // -------------
  // window.onclick = function(event) {
  //   var modal = document.getElementById("myModal");
  //   if (event.target == modal) {
  //     setModalIsOpen(false)
  //   }
    // console.log(modalIsOpen)
  // };
  // ---------------
  return (
    <>
            <div id="myModal" className="modal model-card" style={modalIsOpen === true ? {display: 'flex'} : {display: 'none'}} >

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
