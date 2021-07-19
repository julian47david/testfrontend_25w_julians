import React from 'react'
import data from '../json/datos25w.json'
import '../styles/products.css'
import right from '../images/logos/arrow_right.svg'
import left from '../images/logos/arrow_left.svg'

const Products = () => {
    return ( 

        <section id="products" className="py-6_mod">
            {/* <img className="products_arrowL" src={left} alt=""/>
            <img className="products_arrowR" src={right} alt=""/> */}

            <div className="text-center">

                <h2 className="poppins-SB-21 color_title ">{data.products.title}</h2>
                <h3 className="poppins-SB-39 color_title_2 mt-2 mb-5 mx-auto products_h2-md">{data.products.subtitle}</h3>

            </div>
            <div className="px-5 d-flex justify-content-center d-flex_mod">
                    <div className="card card_width ">
                        <div className="card-body pb-5 card_shadow">
                            <h5 className="card-title poppins-SB-21 color_title_2 mt-3 mb-4">{data.products.card_title}</h5>
                        
                            <ul className="card-text pl-0 roboto-RG-16 color_title_2 ">


                                <li className="products_list">{data.products.card_items[0]}</li>
                                <li className="products_list">{data.products.card_items[1]}</li>
                                <li className="products_list">{data.products.card_items[2]}</li>
                                <li className="products_list">{data.products.card_items[3]}</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="card card_width ">
                        <div className="card-body pb-5 card_shadow">
                            <h5 className="card-title poppins-SB-21 color_title_2 mt-3 mb-4">{data.products.card_title}</h5>
                        
                            <ul className="card-text pl-0 roboto-RG-16 color_title_2">
                                <li className="products_list">{data.products.card_items[0]}</li>
                                <li className="products_list">{data.products.card_items[1]}</li>
                                <li className="products_list">{data.products.card_items[2]}</li>
                                <li className="products_list">{data.products.card_items[3]}</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="card card_width ">
                        <div className="card-body pb-5 card_shadow">
                            <h5 className="card-title poppins-SB-21 color_title_2 mt-3 mb-4">{data.products.card_title}</h5>
                        
                            <ul className="card-text pl-0 roboto-RG-16 color_title_2">
                                <li className="products_list">{data.products.card_items[0]}</li>
                                <li className="products_list">{data.products.card_items[1]}</li>
                                <li className="products_list">{data.products.card_items[2]}</li>
                                <li className="products_list">{data.products.card_items[3]}</li>
                            </ul>
                        </div>
                        
                    </div>
            </div>
        </section>

    );
}

export default Products;