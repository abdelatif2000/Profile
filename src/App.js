import React, { Component } from 'react'
import Index from './Components/Index'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import {BrowserRouter,NavLink,Route} from 'react-router-dom'
import styled from 'styled-components'


 class App extends Component {
  render() {
    return (
    
      <BrowserRouter>
         <Navbar/>
         <Route exact path='/' component={Index} />
         <Route exact path='/contact' component={Contact} />
      </BrowserRouter>
    )
  }
}
export default App;
