import React from 'react';
import Logo from '../logo.png';
import "./Header.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Dropdown from './Dropdown';
import './Nav.css'


function Header() {
    const [ click,setclick]=useState(false);
    const [ dropdown,setDropdown]=useState(false);
    const handelclick =()=>{
        setclick(!click);
    }
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
    
      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };
    return (
    <div className='header--container'>
            <div className=" header header--black">
                 <div className="header--links header--links--left">
                    <ul >
                    <li><Link>360 PLANNER</Link></li>
                    <li><Link>HER</Link></li>
                    <li><Link>HIM</Link></li>                    
                    <li><Link>THE WEDDING</Link></li>
                     </ul>
                 </div>

          <div className="header--logo">
             <img  className="img-responsive" src={Logo}></img>
          </div>
          <div className="header--links header--links--right">
          <ul>
              <li><Link>VENDORS</Link></li>
              <li className='nav-item'
                      onMouseEnter={onMouseEnter}
                      onMouseLeave={onMouseLeave}>

                         <Link  ClassName='nav-links'> GALLERY </Link>
                         {dropdown  && <Dropdown />}
                     </li>
              <li><Link>IDEAS & MORE</Link></li>

          </ul>
          </div>
          
      </div>
        </div>
      
    );
  }
  
  export default Header;
  