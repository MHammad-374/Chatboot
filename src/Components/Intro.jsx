import React, { useState } from 'react'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';

function Intro({ darkmode, introQuestion }) {
  let cards = [
    {
      id: 1,
      title: "Quiz me on world capitals.",
      icon: <SchoolOutlinedIcon style={{ color: "rgb(34, 156,  255)" }} />
    },
    {
      id: 2,
      title: "Morning routine for productivity.",
      icon: <LightbulbOutlinedIcon style={{ color: "rgb(34, 156,  255)" }} />
    },
    {
      id: 3,
      title: "Message to comfort a friend.",
      icon: <EditNoteOutlinedIcon style={{ color: "rgb(34, 156,  255)" }} />
    },
    {
      id: 4,
      title: "Fun fact about the Roman Empire.",
      icon: <InboxOutlinedIcon style={{ color: "rgb(34, 156,  255)" }} />
    }
  ]

  return (
    <section className='intro'>
      <h1 className='intro-heading h-color'>Hello, Dev </h1>
      <h1 className='intro-heading '>How can I help you today? </h1>
      <div className="intro-cards">
        {
          cards.map((card) => {
            return (
              <div
                className={`intro-card card-${darkmode ? "black" : 'white'}`}
                key={card.id}
                onClick={() => introQuestion(card.title)}
              >
                {card.icon}
                <p className={`card-title text-${darkmode ? "white" : "black"}`}>{card.title}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Intro
