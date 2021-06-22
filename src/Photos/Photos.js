import React, { useEffect }  from "react";
import {FlexiImageGrid} from "react-flexi-image-grid";
import "./photos.css"
import { connect } from "react-redux";
import {requestphotos} from "../actions"


// Make a request for a user with a given ID


function Photos({ photos ,requestphotos}) {

    useEffect(()=>{
      console.log("marioma");
      requestphotos()   
  
    },[])
    
     return (
       <div className="images-cont">
         <div className="filter">

         </div>
           <div className=" flex-row-container">
          {photos.map(photo =><div className=" bg-img flex-row-item ">
          <img  width="270px" classname="im" src={photo.url}></img>
          <h3>{photo.title}</h3></div>)}
 

   </div>
       </div>
        
        );
    }

    const mapStateToProps = (state) => {
    
        return {
    
          searchField: state.searchRobots.searchField,
          photos: state.requestphotos.photos,
          isPending: state.requestphotos.isPending,
          
        }
      }
      const mapDispatchToProps = (dispatch) => {
    
        return {
         
          requestphotos: () => dispatch(requestphotos())
        }
      }


export default connect(mapStateToProps, mapDispatchToProps)(Photos);