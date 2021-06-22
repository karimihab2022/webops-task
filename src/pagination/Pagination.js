import React from 'react';
import { Link } from 'react-router-dom';
import "./Pagination.css"
import { useState } from 'react';




function Pagination({ data,  title, pageLimit, dataLimit }) {
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);
    

    
     
  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }


  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }


  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

    return(
        <div className='pagination-container'>
           
            <div>
            <div className="pagination">
            <ul className="pagination">
                {/* previous button */}
                    <li
                 onClick={goToPreviousPage}
        className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
      >
        <a><span>← Previous</span></a>
        </li>

      {/* show page numbers */}
      {getPaginationGroup().map((item, index) => (
        <li
          key={index}
          onClick={changePage}
          className={currentPage === item ? 'active' : null}
        >
         <a><span>{item}</span></a>
          </li>
      ))}

      {/* next button */}
      <li
        onClick={goToNextPage}
        className={`next ${currentPage === pages ? 'disabled' : ''}`}
      >
        <a><span>Next →</span></a>
      </li>
      </ul>
    </div>
            </div>
            
        </div>
        );

}

export default Pagination