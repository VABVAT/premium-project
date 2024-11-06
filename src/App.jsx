import { useState } from 'react'
import logo from '/search.png';
import p1 from '/p1.png'
import tb from '/tb.png'
import Card from './components/Card.jsx'
import Searchbar from './components/Searchbar.jsx';
import './App.css'
import Textcontent from './components/Textcontent.jsx';
import Banner from './components/Banner.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [isVisible, setVisible] = useState(false);
  return (
      <div className='bg-gradient-to-b from-gstart to-gend min-h-screen min-w-screen '> 
        <div className='bg-white h-44 flex items-center justify-center md:justify-start flex-wrap md:flex-nowrap'> 
          <div className='font-poppins  font-bold text-5xl ml-0 md:ml-10'>
         BOCCA
         </div>
         <div>
          <button onClick={() => (setVisible(true))}><img src={logo} className={`transition-all duration-500   ${!isVisible ? 'w-8 h-8 ml-24 opacity-100' : 'w-0 h-0 opacity-0'}`}></img></button> 
         </div>
         <Searchbar Active={isVisible}/>
        </div>
        <div className='flex flex-wrap'>
        <div className='flex flex-wrap justify-center align-center w-76 md:w-706 mt-40 ml-0 md:ml-20'>
        <Card text="Product 1" im={p1} price="$12.99"/>
        <Card text="Product 2" im={p1} price="$12.99"/>
        <Card text="Product 3" im={p1} price="$12.99"/>
        <Card text="Product 4" im={p1} price="$12.99"/>
        </div>
        <div className='flex ml-auto sm:ml-40 mr-auto sm:mr-0  items-center justify-center'><Textcontent /></div>
        </div>
        <Banner im={tb}/>
        <Footer />
        <br />
        <br />
      </div>
      
  )
}

export default App
