import React from 'react'

const Pagination = ({pageInfo, page, setPage}) => {
 

  function next() {
    setPage(page +1 )
  }

  const prev = () => {
    setPage(page - 1)
  };

  return (
    <div className="paging">
    <div>
      <button className="paging-btn" onClick={prev} disabled={page === 1 ? true : false}  >
        {"<"}
      </button>
      <button className="paging-btn" onClick={next} disabled={page === pageInfo.pages ? true : false}>
        {">"}
      </button>
    </div>
  </div>
  )
}

export default Pagination
