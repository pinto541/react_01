import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

import Categories from '../components/Categories';
import Products from '../components/Products';
import Announcement from '../components/Announcement';


const Home = () => {
  return (
    <div>
         <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>

    </div>
  )
}

export default Home