import React from 'react';
import Logo from '../logo.png';
import "./Header.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {Dditems }from "./dditems";
import "./Dropdown.css";

function Dropdown (){
    
    return(
        <div className="header--link--dropdown">
            
                {Dditems.map((item,i)=>{
                        return(
                            
                                <Link key={i} className={item.cName} >
                                    {item.name}
                                </Link>
                            
                        );
                })}
            
        </div>
    );


}
export default Dropdown;