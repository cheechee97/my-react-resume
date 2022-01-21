import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import '../css/Project.css';

const Project = ( {data} ) => {

    return(
        <section id="project">

            <div className="row mx-auto">
        
                <div className="d-flex justify-content-center ">
        
                    <h1>SIDE PROJECT AND HOBBIES.</h1>
        
                </div>                    
                <div className="d-flex justify-content-center m-2 p-2">
                    <p> {data.projectmessage} </p>
                </div>
                {data.projects.map(
                        (projects) => {
                            return (
                                <div className="d-flex align-items-center m-4 p-4 mx-auto project-section border border-primary" key={projects.title}>
                                    <div className='text-left'>
                                        <h4 className=""> <a href={projects.url}> {projects.title} </a> </h4>
                                        <div className='text-left mt-1 pt-1'>
                                            <p> {projects.description} </p>
                                        </div>
                                    </div>
                                </div>
                            );
                            
                        }
                    )}
                
            </div>
        </section>
        );
}

export default Project;