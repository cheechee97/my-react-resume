import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import React, { Component, useState, useEffect } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Footer from './Components/Footer';
import Work from './Components/Work';

function App() {
  const [portfolioData, setPortfolioData] = useState({});
  const [loaded, setisLoaded] = useState(false);

  const getData = async () => {
     return fetch('/portfolioData.json',{
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
        //console.log(myJson);
        setPortfolioData(myJson);
        return myJson;
      });
  }
  useEffect(()=>{
    // getData();
    // if (portfolioData != undefined) {
    //   setLoading(true);
    // }
    (async () => {
      const Data = await getData();
      console.log(Data);
      setPortfolioData(Data);
      setisLoaded(true);
    })();

  },[])


  if (loaded) {
    return (
      <div className="App">
        <Header data={portfolioData.main} />
        <About data={portfolioData.main} />
        <Resume data={portfolioData.resume}/>
        <Work />
        <Footer />
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
