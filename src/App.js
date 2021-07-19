import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header'
import Slider from './components/Slider'
import About from './components/About'
import Services from './components/Services'
import Products from './components/Products'
import Details from './components/Details'
import Form from './components/Form'
import Footer from './components/Footer'



function App() {
	return (

		<Fragment>
			<div className="container-fluid px-0">
				<Header/>
				<Slider/>
				<About/>
				<Services/>
				<Products/>
				<Details/>
				<Form/>
				<Footer/>
			</div>
		</Fragment>

	);
}

export default App;
