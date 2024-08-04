import React, { useState } from 'react'
import Loading from './Loading'


function Chat({ darkmode, ans, question }) {
  let sentence = ans;
  const boldWords = sentence.split('**')
  return (
    <section className='chat'>
      <div data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
        <div className="question-section">
          <div className="question">
            <p className={`ques-tion q-${darkmode ? 'black' : 'white'}`}>{question}</p>
          </div>
          <div className="answer">

            <div className={`symbol symbol-${darkmode ? "black" : "white"}`}>AI</div>
            {
              ans === "..." ?
                <Loading />
                :
                <p className={`ai-ans text-${darkmode ? "white" : 'black'}`}>
                  {
                    boldWords.map((word, index) => {
                      return (
                        <>
                          {
                            index % 2 === 0 ?
                              word.includes("*") ?
                                <p key={index} className='pa-ra newline'>{word.replace("*", '')}</p>
                                :
                                <p key={index} className='pa-ra'>{word}</p>
                              :
                              word.includes("*") ?
                                <p key={index} className='pa-raBold newline'>{word.replace("*", '')}</p>
                                :
                                <p key={index} className='pa-raBold'>{word}</p>
                          }
                        </>
                      )
                    }
                    )
                  }
                </p>
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Chat
