import './App.css';
import React, { useState,useEffect } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";



export default function App() {


    const [progress, setprogress] = useState(0);
    
       const setProgress = (progress) => {
            setprogress(progress);
      }
  

    return (
      <div>
       <BrowserRouter>
      <Navbar/>
      <LoadingBar
      height={3}
        color="#f11946"
        progress={progress}
      />
        <Routes>
        <Route exact path="/" element = {<News setProgress = {setProgress} key="sports" pageSize={6} country="us" category="general"/>} />
        < Route exact path="/business" element ={<News setProgress = {setProgress} key="business" pageSize={6} country="us" category="business"/>} />
        < Route exact path="/entertainment" element ={<News setProgress = {setProgress} key="entertainment" pageSize={6} country="us" category="entertainment"/>} />
        < Route exact path="/general" element ={<News setProgress = {setProgress} key="general" pageSize={6} country="us" category="general"/>} />
        < Route exact path="/health" element ={<News setProgress = {setProgress} key="health" pageSize={6} country="us" category="health"/>} />
        < Route exact path="/science" element ={<News setProgress = {setProgress} key="science" pageSize={6} country="us" category="science"/>} />
        < Route exact path="/sports" element ={<News setProgress = {setProgress} key="sports" pageSize={6} country="us" category="sports"/>} />
        < Route exact path="/technology" element ={<News setProgress = {setProgress} key="technology" pageSize={6} country="us" category="technology"/>} />  
        </Routes>
        </BrowserRouter>
        
       
      </div>
    )
  
}
