import React from 'react'
import '../styles/form.css'
import form_img from '../images/img/form_img.png'



const Form = () => {



    return ( 

        <section id="form">

            <div className="row justify-content-around align-items-center mx-0">
                <div className="col-10 col-md-4 ml-0 ml-sm-4">

                    <h2 className="poppins-SB-39">Get in touch<br/><span className="color_title">We are hiring!</span></h2>

                    <form className="contact-form row">
                        <div className="form-field col-lg-12">
                            <input 
                                id="name" 
                                className="input-text js-input roboto-MD-16" 
                                type="text" 
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className="form-field col-lg-12 ">
                            <input 
                                id="email" 
                                className="input-text js-input roboto-MD-16"
                                type="email" 
                                placeholder="E-mail" 
                                required
                            />
                        </div>
                        <div className="form-field col-lg-12 ">
                            <input 
                                id="phone" 
                                className="input-text js-input roboto-MD-16" 
                                type="text" 
                                placeholder="Phone" 
                                required
                            />
                        </div>
                        <div className="form-field col-lg-12">
                            <input 
                                id="message" 
                                className="input-text js-input roboto-MD-16" 
                                type="text" 
                                placeholder="Message" 
                                required
                            />
                        </div>
                        <div className="form-field col-lg-12">
                            <input 
                                className="btn submit-btn btn-25w_form" 
                                type="submit" 
                                value="Send"
                            />
                        </div>
                    </form>
                </div>

                <div className="col-5 d-none d-md-block">
                    <img className="img-fluid" src={form_img} alt="" />
                </div>
            </div>
        </section>

    );
}
 
export default Form;