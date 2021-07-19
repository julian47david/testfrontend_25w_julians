import React, {Fragment} from 'react'
import '../styles/slider.css'
import data from '../json/datos25w.json'
import slide1 from '../images/img/slide1.jpg'
import slide2 from '../images/img/slide2.jpg'
import slide3 from '../images/img/slide3.jpg'


const Slider = () => {
    return ( 

        <Fragment>
            
            <div id="carouselExampleIndicators" className="carousel slide carousel_mod d-none d-sm-block" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={slide1} alt="First slide"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h2 className="poppins-SB-48 carousel_h2">{data.slider[0].title}</h2>
                            <p className="roboto-RG-16 carousel_p">{data.slider[0].subtitle}</p>

                            <button type="button" class="btn btn-25w roboto-MD-16">Read More</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={slide2} alt="Second slide"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h2 className="poppins-SB-48 carousel_h2">{data.slider[1].title}</h2>
                            <p className="roboto-RG-16 carousel_p">{data.slider[1].subtitle}</p>

                            <button type="button" class="btn btn-25w roboto-MD-16">Read More</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={slide3} alt="Third slide"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h2 className="poppins-SB-48 carousel_h2">{data.slider[2].title}</h2>
                            <p className="roboto-RG-16 carousel_p">{data.slider[2].subtitle}</p>

                            <button type="button" class="btn btn-25w roboto-MD-16">Read More</button>
                        </div>
                    </div>

                    
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <div className="d-flex d-sm-none img_mod text-center">
                <h2 className="poppins-SB-48 carousel_h2-sm">{data.slider[0].title}</h2>
            </div>

        </Fragment>
    );
}
 
export default Slider;