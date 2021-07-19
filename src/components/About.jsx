import React from 'react'
import data from '../json/datos25w.json'
import about from '../images/img/about.png'
import '../styles/about.css'



const About = () => {
    return ( 

        <section id="about" className="section_about">
            <div className="block_about">

            </div>
            <div className="row justify-content-center align-items-center mr-0">

                <div className="col-5 px-3 pr-md-5 text-center d-none d-sm-block">
                    <img className="img-fluid" src={about} alt="" />
                </div>

                <div className="col-9 col-sm-6 col-md-5 justify-content-start align-self-center pl-5">
                    <h2 className="poppins-SB-39 style_title color_title_2">{data.about.title[0]}<br/><span className="color_title">{data.about.title[1]}</span></h2>
                    
                    <p className="roboto-RG-16 py-2 py-md-4 about_parrafo">{data.about.subtitle}</p>

                    <button type="button" className="btn btn-25w roboto-MD-16">More Info</button>
                </div>

            </div>
        </section>
        
    );
}
 
export default About;