import React, { useState } from 'react'
import Navbar from './Navbar'
import Intro from './Intro'
import Search from './Search'
import Chat from './Chat'
import Offcanvas from './Offcanvas'


function Main({ darkmode, handleDarkmode, intro, input, handleInput, submit, ans, question, introQuestion }) {

  return (
    <main>
      {/* <Offcanvas /> */}
      <Navbar darkmode={darkmode} handleDarkmode={handleDarkmode} />
      <hr />
      {
        intro ? <Intro darkmode={darkmode} introQuestion={introQuestion} /> : <Chat darkmode={darkmode} ans={ans} question={question} />
      }
      <Search darkmode={darkmode} input={input} handleInput={handleInput} submit={submit} />
    </main>
  )
}

export default Main
