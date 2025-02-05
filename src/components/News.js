import React, { useState,useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  

 const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults,setTotalResults] = useState(0);

    // document.title = `${this.capitalizeFirstLetter(props.category)} -NewsMonkey`;
 

   const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

   const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=37022803470d4c5385f264d3d9eca356&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);

  }

   useEffect(() => {
     //eslint-disable-next-line
    updateNews();
   

   },[])
   

  // const handlePrevClick = async () => {
  //   setPage(page - 1);
  //   updateNews();
  // };

  //  const handleNextClick = async () => {
  //   setPage(page + 1);
  //   updateNews();
  // };


   const fetchMoreData = async () => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=37022803470d4c5385f264d3d9eca356&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
   };

 
    return (
      <>
        <h2 className="text-center" style={{marginTop:'90px'}}>HeadLine Hub - Top   {capitalizeFirstLetter(props.category)} Headlines </h2>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
        <div className="row my-3">
          
           {articles.map((element) => {
              return (
                <div className="col-md-4">
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
                
              );
              
            })}
             </div>
             </div>
             </InfiniteScroll>
       
      </>
    );
}

News.defaultProp = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
