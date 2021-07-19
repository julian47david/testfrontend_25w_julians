import React from 'react'
import data from '../json/datos25w.json'
import '../styles/details.css'
import anchor from '../images/logos/anchor.svg'
import bell from '../images/logos/bell.svg'
import bookmark from '../images/logos/bookmark.svg'
import bandcamp from '../images/logos/bandcamp.svg'
import brush from '../images/logos/brush.svg'
import box_open from '../images/logos/box_open.svg'


const Details = () => {
    return ( 

        <section id="details">
            <div className="text-center">

                <h2 className="poppins-SB-39 color_title_2">{data.details.title}</h2>
                <p className="mx-auto mt-4 roboto-RG-16 color_title_2 details_parrafo">{data.details.subtitle}</p>

            </div>


            <div className="">
                <div className="row justify-content-center roboto-RG-16 color_title_2 mx-0 details_ul">
                    <ul className="col-12 col-md-5">
                        <li className="details_li">
                            <img className="details_img" src={anchor} alt="" />
                            <p>{data.details.sections[0]}</p>
                        </li>
                        <li className="details_li">
                            <img className="details_img" src={bell} alt="" />
                            <p>{data.details.sections[1]}</p>
                        </li>
                        <li className="details_li details_li-md">
                            <img className="details_img" src={bandcamp} alt="" />
                            <p>{data.details.sections[2]}</p>
                        </li>
                    </ul>
                    
                    <ul className="col-12 col-md-5">
                        <li className="details_li">
                            <img className="details_img" src={bookmark} alt="" />
                            <p>{data.details.sections[3]}</p>
                        </li>
                        <li className="details_li">
                            <img className="details_img" src={brush} alt="" />
                            <p>{data.details.sections[4]}</p>
                        </li>
                        <li className="details_li">
                            <img className="details_img" src={box_open} alt="" />
                            <p>{data.details.sections[5]}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
 
    );
}
 
export default Details;