import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss';


const Navbar = () => {
  return (
    <nav>
      <div><Link to="/" className='link-nav'><img src='./img/rickandmorty-icon.png' alt='ICON'></img></Link></div>
        <ul>
        <li><Link to="/" className='link-nav'>Characters</Link></li>
        <li><Link to="locations" className='link-nav'>Locations</Link></li>
        <li><Link to="episodies" className='link-nav'>Episodies</Link></li>
        </ul>
      </nav>
  )
}

export default Navbar