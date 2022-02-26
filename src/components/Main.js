import React from 'react'
import NewsImg from "../images/d-world-news-background-digital-breaking-studio-report-live-208423108.jpg";
import Loading from "./Loading";
const Main = ({ news }) => {

  const API_KEY = "d4eeb79ada9e4603b2870fb49b15fd30";

    if(!news) return <Loading />;
    return (
        <>
        <div className="news-grid">
        {news.map((item, index) => (
           
               <div className="news-card" key={index}>
                   <img src={item?.urlToImage || NewsImg} className="news-image" />
                   <h3> Source:- {item.source.name}</h3>
                   <p>Author:- {item?.author || "No Author"}</p>
                   <p>Title:- {item.title}</p>
                   <a href={item?.url} className="news-btn">Read Full News..</a>
                   <p>{item.publishedAt}</p>
                   </div>
               
        ))}
        </div>
        <hr />
      
        </>
    );
}


export default Main
