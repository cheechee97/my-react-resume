import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import '../css/Resume.css';

const Resume = ( {data} ) => {

    return (
        <section id="resume">
        <div className="row education mt-2 pt-2">
            <div className="header-col d-flex justify-content-center col-4">
                <div>
                    <h1 className="justify-content-center"><span>Education</span></h1>
                </div>
            </div>
            <div className="col-8">
                    {data.education.map(
                        (education) => {
                            return (
                                <div key={education.school}>
                                    <h3> {education.school}</h3>
                                    <p className='info'>
                                        {education.degree} &nbsp;
                                        <span>&bull;</span>
                                        <em className='date'> {education.graduated}</em>
                                    </p>
                                    <p> <a href={education.link}> Navigate to {education.school}</a></p>
                                    <p>{education.description}</p>
                                </div>
                            );
                            
                        }
                    )}
            </div>
        </div>
        <div className="row work mt-2 pt-2">
            <div className="header-col d-flex justify-content-center col-4">
                <div>
                    <h1><span>Work</span></h1>
                </div>
            </div>
            <div className="col-8">
                    {data.work.map(
                        (work) => {
                            return (
                                <div key={work.company}>
                                    <h3> {work.company}</h3>
                                    <p className='info'>
                                        {work.title} &nbsp;
                                        <span>&bull;</span>
                                        <em className='date'> {work.years}</em>
                                    </p>
                                    <p> <a href={work.link}> Navigate to {work.company}</a></p>
                                    <p>{work.description}</p>
                                </div>
                            );
                            
                        }
                    )}
            </div>
        </div>
        <div className="row skillsection mt-2 pt-2">
            <div className="header-col d-flex justify-content-center col-4">
                <div>
                    <h1><span>SKILL</span></h1>
                </div>
            </div>
            <div className="col">
                    <p className='info'>
                        {data.skillmessage} &nbsp;
                    </p>
            </div>
            <div className='row container col-8'>
                <div className="row mt-2 pt-2 mb-2 pb-2 d-flex">
                {data.skills.map(
                        (skill) => {
                            return (
                                <div className="col-3" key={skill.name}>
                                    <div className='row container d-flex justify-content-center'>
                                        <img className='skill' src={"images/skill/" + skill.image} alt={skill.name} />
                                        <h5 className='text-center mt-2 pt-2'> {skill.name} </h5>
                                    </div>
                                </div>
                            );
                            
                        }
                    )}
                    
                </div>
            </div>
        </div>

        </section>
    );
}

export default Resume;