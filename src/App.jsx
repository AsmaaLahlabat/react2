import React from 'react';
import CustomNavbar from './Navbar';
import Header from './Header';
import Portfolio from './Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
function App() {
    return (
        <div id="page-top">
            <CustomNavbar />


            <Header />



            <Routes>
           <Route path='/' element={ <Portfolio />}></Route>
           <Route path='/Portfolio' element={ <Portfolio />}></Route>
           <Route path='/About' element={  <About />}></Route>
           <Route path='/Contact' element={ <Contact />}></Route>
           
           
           
            
            </Routes>



            <Footer />
            { }
        </div>
    );
}

export default App;