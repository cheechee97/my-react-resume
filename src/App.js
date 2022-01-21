import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import React, { Component, useState, useEffect } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Footer from './Components/Footer';
import Project from './Components/Project';

function App() {
  const [resumeData, setResumeData] = useState({});
  const [loaded, setisLoaded] = useState(false);

  const getData = async () => {
     return fetch('/resumeData.json',{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    ).then(async function(response){   
        if (response.ok) {
          return response.json();
        } else {
          console.log("Error occured getting response from portfolioData");
          throw new Error;
        }      
        
    }).then(function(myJson) {
        setResumeData(myJson);
        return myJson;
      });
  }
  useEffect(()=>{
    (async () => {
      const Data = await getData();
      setResumeData(Data);
      setisLoaded(true);
    })();

  },[])


  if (loaded) {
    return (
      <div className="App">
        <Header data={resumeData.main} />
        <About data={resumeData.main} />
        <Resume data={resumeData.resume}/>
        <Project data={resumeData.portfolio}/>
        <Footer data={resumeData.main}/>
      </div>
    );
  } else {
    return(
      <div className='loading'>
          <div className="spinner-border text-primary loading-icons" role="status">
            <span className="sr-only">Loading...</span>
          </div>
      </div>
    );
  }

}

export default App;
