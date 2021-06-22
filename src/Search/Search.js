import React from "react";
import "./Search.css"

function Search(){
    return(
        <div className="vendors--search">

            <div className="vendors--search--inputs">
                <div className="vendors--search--dropdown">
               <h5>Find categories here</h5> 

               <div></div>

                </div>

                <form className="vendors--search--input">
                    <input type="text" placeholder="Search"></input>
                </form>
            </div>

        </div>
    );

}

export default Search;