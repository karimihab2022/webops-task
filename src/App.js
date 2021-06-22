import React from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from "./Footer/Footer";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Pagination from './pagination/Pagination';
import Search from './Search/Search';
import Photos from './Photos/Photos';

function App() {
  const [posts, setPosts] = useState([Photos.data]);
  const[footer,setFootet]=useState(true);


  
  
    function handleResize() {
      if (window.innerWidth < 1150) {
        setFootet(false);
      } else {
        setFootet(true);
      }
    
    } 

    window.addEventListener('resize', handleResize)
  
 


  return (
    <div className="App">
      <Header/>
      <Search/>
      <Photos/>
      <Pagination
            data={posts}
            RenderComponent={Photos}
            title="Posts"
            pageLimit={9}
            dataLimit={9}
          />
      {footer && <Footer/>}
      
    </div>
  );
}

export default App;
