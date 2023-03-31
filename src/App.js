import React from 'react'
import './App.css'

export default function App() {
  return (
    <div>
      <div className='nav-background'>
        <div className='nav-container'>
          <header id='nav-header'>
            <h1><a href='#' id='nav-logo'>Fatemeh Nilchi</a></h1>
          </header>
          <nav>
            <ul className='nav-ul'>
              <li><a href='#' className='nav-link'>Home</a></li>
              <li><a href='#' className='nav-link'>News</a></li>
              <li><a href='#' className='nav-link'>Contact</a></li>
              <li><a href='#' className='nav-link'>About</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}


