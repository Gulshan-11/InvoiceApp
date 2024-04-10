import React from 'react'
import { Link } from 'react-router-dom'
import './SideNavbar.css'
const SideNavbar = () => {
  return (
    <div className='side-navbar'>
      <ul>
        <Link to={'/'}><li>Home</li></Link>
        <Link to={'/invoices'}><li>Invoices</li></Link>
      </ul>
    </div>
  )
}

export default SideNavbar