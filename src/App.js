import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import Nav from './Nav'
import './Nav.css'

export default () => 
  <BrowserRouter>
    <Nav />
    <Routes />
  </BrowserRouter>

