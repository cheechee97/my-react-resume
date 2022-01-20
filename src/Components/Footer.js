import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import '../css/Footer.css';

const Footer = () => {

    return (
    <footer className='bg-dark text-white'>

        <div className="row">
           <div className="twelve columns">
              <ul className="social-links">
                <li key=""><a href=""><i className="fa fa-facebook"></i></a></li>
              </ul>
   
              <ul className="copyright">
                 <li>&copy; Copyright 2017 Tim Baker</li>
                 <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
              </ul>
   
           </div>
           <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
        </div>
     </footer>
    );
}

export default Footer;


