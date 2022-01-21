import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import '../css/Footer.css';

const Footer = ( {data} ) => {

    return (
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by Scanfcode.
              </p>
            </div>
  
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
               {data.social.map(
                              (social) => {
                                 return (<li key={social.name}><a href={social.url}><i className={social.className}></i></a></li>);
                                 
                              }
                           )}  
              </ul>
            </div>
          </div>
        </div>
  </footer>
    );
}

export default Footer;


