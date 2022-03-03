import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import About from './container/about/About';
import Home from './container/home/Home';
import Contact from './container/contact/Contact';
import Gallery from './container/gallery/Gallery';
import Categorie from './container/categorie/Categorie';
import './App.css';
import Footer from './component/Footer';
import CardDetail from './container/cardDetail/Carddetail';
function App() {
  return (
    <div className='appmain_div'>
       <div className='header_view_div'>
       <Header/>
       </div>
      <div className='route_div'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/catagories' element={<Categorie/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/cardDetail/:title' element={<CardDetail/>}></Route>       
      </Routes>
      <div className='footer_view'>
      <Footer/>
      </div>
     
      </div>
 
    </div>
  )}
export default App