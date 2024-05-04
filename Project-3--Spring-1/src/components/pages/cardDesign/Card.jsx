import ApiData from "../../apiData/ApiData";
import Modal from "./Modal";

export const Card = (props) => {
// ---------------
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

// This Variable data come form Nav Page to Get the search INPUT value
const SearchValue = props.getVlaue.trim();

  return (          
    <>
    
    <div className="item-box">
      


      {ApiData.results.filter(data => data.name && data.name.toLowerCase().trim().includes(SearchValue)).map((data, index) => {



        // {ApiData.length === 0? (
        //   <p>Sorry, no results found.</p>
        // ) : (
        //   <p>hi</p>
        // )}

        
   
        
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

     <Modal/>
    </div>
    </>
  );
};
