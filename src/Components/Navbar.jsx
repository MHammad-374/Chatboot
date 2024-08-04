import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Offcanvas from './Offcanvas';
import Theme from './Theme'

function Navbar({ darkmode, handleDarkmode }) {
  return (
    <nav>
        <div className="hamburger">
          <Offcanvas darkmode={darkmode} />
        </div>
        <h1 className={`heading text-${darkmode ? "white" : "black"}`}>Webdev AI</h1>
        <Theme handleDarkmode={handleDarkmode} />
    </nav>
  )
}

export default Navbar
