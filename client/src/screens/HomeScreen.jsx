import React from 'react'
import Offers from '../components/Offers'
import Services from '../components/Services'
import Featured_Products from '../components/Featured_Products'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
function HomeScreen() {
  return (
    <div>
      <Offers/>
      <Services/>
      <Featured_Products/>
      <div style={{marginTop:'50px',marginBottom:'-40px'}}>
      <Carousel/>
      </div>
    </div>
  )
}

export default HomeScreen
