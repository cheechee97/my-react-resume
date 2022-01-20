import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import '../css/About.css';
import { saveAs } from "file-saver";
// import profilepic from '../images/ouji3.jpg';

const About = ( {data} ) => {

    const profilepic = "images/"  + data.image;
    const saveFile = () => {
        saveAs(
          "/CheeLimPengResume.pdf",
          "Resume.pdf"
        );
      };

    return(
        <section id="about">
            <div className="container">
                <div className="row">
                    <div className="col-4 text-white">
                        <img className="profile-pic"  src={profilepic} alt="Profile Pic" />
                    </div>
                    <div className="col-8 text-white">
                        <h2>About Me</h2>
                        <p>{data.bio}</p>
                        <button type="button" onClick={saveFile} className="btn btn-dark" style={{width: 200}} download><i className="fa fa-download"></i> &nbsp; Download Resume</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;