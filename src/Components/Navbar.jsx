import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Offcanvas from './Offcanvas';
import Theme from './Theme'

function Navbar({
  darkmode,
  handleDarkmode,
  introQuestion,
  newChat,
  questionsArr
}) {
  return (
    <nav>
      <div className="hamburger">
        <Offcanvas darkmode={darkmode} newChat={newChat} questionsArr={questionsArr} introQuestion={introQuestion} />
      </div>
      <h1 className={`heading text-${darkmode ? "white" : "black"}`}>Webdev AI</h1>
      <Theme handleDarkmode={handleDarkmode} />
    </nav>
  )
}

export default Navbar
