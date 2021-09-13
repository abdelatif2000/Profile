import React from 'react'
import About from '../About'
import Footer from '../Footer'
import Home from '../Home'
import Profile from '../Pofile'
import Portfolio from '../Portfolio'
import SocailMedai from '../SocailMedai'
import Work from '../Work'

export default function Index() {
    return (
        <div>
         <Home />
         <Work />    
         <Portfolio />
         <Profile />
         <SocailMedai />
         <Footer /> 
        </div>
    )
}
