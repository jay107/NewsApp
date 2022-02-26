import React, { useEffect, useState } from 'react';
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import NewsImg from "../images/d-world-news-background-digital-breaking-studio-report-live-208423108.jpg";
import Loading from "./Loading";

const SearchNews = ({ search, setSearch }) => {

    const [searchNews, setSearchNews ] = useState("");

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=${search}&sortBy=popularity&apiKey=d4eeb79ada9e4603b2870fb49b15fd30`).then(data => {
            setSearchNews(data.data.articles);
        })
    }, [search]);

    if(!searchNews) return <Loading />

    return (
        <div>
               <p style={{
                     display: "flex",
                     justifyContent: "center",
                     flexDirection: "row"
                 }}><SearchIcon /> <input type="text" 
                 placeholder="search for news" 
                 style={{ 
                     height: "30px",
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                     background: "transparent",
                     border: "1px solid transparent",
                     color: "black",
                     fontSize: "20px",
                     marginLeft: "10px",
                     outline: "none",
                     borderBottom: "1px solid black"
                }} 
                onChange={e => setSearch(e.target.value)}
                /></p> 
              <div>
            <div className="news-grid">
            {searchNews.map((item) => (
           
           <div className="news-card">
               <img src={item?.urlToImage || NewsImg} className="news-image" />
               <h3> Source:- {item.source.name}</h3>
               <p>Author:- {item.author}</p>
               <p>Title:- {item.title}</p>
               <a href={item?.url} className="news-btn">Read Full News..</a>
               <p>{item.publishedAt}</p>
               </div>
           
    ))}
            </div>
        </div>
        </div>
    )
}

export default SearchNews
