import React from 'react'
import '../styles/services.css'
import data from '../json/datos25w.json'
import glob from '../images/logos/glob.svg'
import cloud_upload from '../images/logos/cloud_upload.svg'
import headset from '../images/logos/headset.svg'
import users from '../images/logos/users.svg'


const Services = () => {
    return ( 

        <section id="services" className="services py-6">
            <h2 className="poppins-SB-39 text-center style_title color_title_2">{data.services.title}</h2>

            <p className="services_parrafo text-center  roboto-RG-16 mx-auto mb-5 mt-3">{data.services.section}</p>

            <div className="row justify-content-center align-items-center mx-0">

                <div className="col-6 col-sm-4 col-md-2 text-center mx-4_mod">
                    <img className="logo_services" src={glob} alt=""/>
                    
                    <h3 className="poppins-SB-21 mt-3 mt-sm-4 services_h3 mx-auto">{data.services.cards[0]}</h3>
                </div>

                <div className="col-6 col-sm-4 col-md-2 text-center mx-4_mod">
                    <img className="logo_services" src={cloud_upload} alt=""/>

                    <h3 className="poppins-SB-21 mt-3 mt-sm-4 services_h3 mx-auto">{data.services.cards[1]}</h3>
                </div>

                <div className="col-6 col-sm-4 col-md-2 text-center mx-4_mod">
                    <img className="logo_services" src={headset} alt=""/>

                    <h3 className="poppins-SB-21 mt-3 mt-sm-4 services_h3 mx-auto">{data.services.cards[2]}</h3>
                </div>

                <div className="col-6 col-sm-4 col-md-2 text-center mx-4_mod">
                    <img className="logo_services" src={users} alt=""/>

                    <h3 className="poppins-SB-21 mt-3 mt-sm-4 services_h3 mx-auto">{data.services.cards[3]}</h3>
                </div>

            </div>
        </section>
    );
}
 
export default Services;