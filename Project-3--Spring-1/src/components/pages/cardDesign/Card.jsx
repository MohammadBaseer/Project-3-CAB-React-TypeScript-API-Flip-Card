// import ApiData from "../../apiData/ApiData";
import Modal from "./Modal";

export const Card = (props) => {
// ---------------
const openModal = (event) => {
  const modal = document.getElementById("myModal");

  const itemId = event.currentTarget.getAttribute("id");
  const data = ApiData.results.find((data) => data.id.toString() === itemId);
  // console.log(data);

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
// console.log(ApiData)
// This Variable data come form Nav Page to Get the search INPUT value
const SearchValue = props.getVlaue.trim();
// Next and Prev Buttons Handler

const next=()=>{
  props.setNextPage(prevValue => prevValue + 1);
}

const prev=()=>{

 props.setNextPage(prevValue => {

console.log("Previous Value:", prevValue);

if (prevValue === 1) {
  console.log("Previous value is 1");
} else {
  console.log("Previous value is not 1");
}

return prevValue - 1;

});



 
}
  return (          
    <> 
    <div className="item-box">
      {ApiData.results.filter(data => data.name && data.name.toLowerCase().includes(SearchValue)).map((data, index) => {   
        return (
       <>   
            <div className="item">
              <div className="card-inner">
                <div className="card-front">
                  <img className="item-image" src={data.image} alt="Photo" key={index}/>
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
{ApiData.results.filter(data => data.name && data.name.toLowerCase().includes(SearchValue)).length === 0 && (
        <p>No Data Found</p>
      )}
     <Modal/>


    </div>     
  <div className="paging">
    <div>
    <button className="paging-btn" onClick={prev}>{'<'}</button>
    <button className="paging-btn" onClick={next}>{'>'}</button>
    
    </div>
  </div>

    </>
  );
};
