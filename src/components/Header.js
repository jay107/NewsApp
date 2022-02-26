import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav position="static" className="header-main">
            
               <Link to="/">NEWS SPOT </Link>
               <p >
               <Link to="/" style={{
                   fontSize: "20px"
               }} >Trending-news</Link>
                <Link to="/search-news" style={{
                   fontSize: "20px"
               }}>search-news</Link>
               </p>
              
               
        </nav>
    )
}

export default Header
