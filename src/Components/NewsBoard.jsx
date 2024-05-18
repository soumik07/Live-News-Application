import React, { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap'
import { NewsItem } from './NewsItem';

export const NewsBoard = ({selectedCategory, selectedCountry}) => {
    const[articles, setArticles] = useState([]);
    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${selectedCountry}&category=${selectedCategory}&apiKey=14a898e78983400f9e1070855571ddbb`
        fetch(url,{
            method: 'GET',
            headers: {
              'Upgrade': 'h2c',
              'Connection': 'Upgrade'
            }
          }).then(response=>response.json()).then(data=>{
            setArticles(data.articles)
            
        })
    },[selectedCategory, selectedCountry])
  return (
    <div >
        <h3 className='text-center mt-2'><Badge bg="warning" text='dark'>Latest News</Badge></h3>
        {/* {console.log(selectedCountry)} */}
        {articles.map((news, index)=>{
            return(
                
                    <NewsItem key={index} title={news.title} description={news.description} imageUrl={news.urlToImage} newsUrl={news.url}/>
                

            ) 
        })}
    </div>
  )
}
