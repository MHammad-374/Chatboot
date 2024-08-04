import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

function Sidebar({ darkmode, newChat, questionsArr, introQuestion }) {
  return (
    <div className={`sidebar-${darkmode ? 'black' : "white"}`}>
      <div data-aos="fade-right">
        <div className={`new-chat nc-${darkmode ? 'black' : "white"}`} onClick={() => newChat()} >
          <AddIcon style={{ fontSize: '22px' }} />
          <h5 className='n-chat'>New Chat</h5>
        </div>
        <div className={`recent-box text-${darkmode ? 'white' : "black"}`}>
          <h5 className='recent'>Recent</h5>
          <div className="outer-box">
            {
              questionsArr.map((question, index) => {
                return (
                  <>
                    <div key={index} className={`questions-box text-${darkmode ? 'white' : "black"}`} onClick={()=>introQuestion(question)}>
                      <QuestionAnswerIcon /> {question}
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
