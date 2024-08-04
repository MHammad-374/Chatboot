import React, { useEffect, useState } from 'react'
import run from './config/gemini_api'
import './App.css'
import Sidebar from './Components/Sidebar'
import Main from './Components/Main'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();


function App() {
  useEffect(() => {
    const storedQuestions = localStorage.getItem('questions')
    if (storedQuestions)
      setQuestionsArr(JSON.parse(storedQuestions))
  }, [])

  const [input, setInput] = useState('');
  const [darkmode, setDarkmode] = useState(false)
  const [intro, setIntro] = useState(true)
  const [question, setQuestion] = useState("")
  const [ans, setAns] = useState("")

  const [questionsArr, setQuestionsArr] = useState([]);

  const addQuestion = (q) => {
    let binary = true;
    for (let i = 0; i < questionsArr.length; i++) {
      if (questionsArr[i] === q)
        binary = false;
    }
    if (binary) {
      let newArr = [...questionsArr, q]
      setQuestionsArr(newArr);
      localStorage.setItem('questions', JSON.stringify(newArr));
    }
  };

  const onSent = async (prompt) => {
    setIntro(false)
    setQuestion(prompt)
    setAns("...")
    let a = await run(prompt)
    // console.log(a)
    setAns(a)
    addQuestion(prompt)
  }

  const handleInput = (value) => {
    // console.log(value)
    setInput(value)
  }
  const submit = () => {
    onSent(input)
    setInput('')
    // console.log("submit")
  }
  const introQuestion = (data) => {
    setInput(data)
    // console.log(data)
  }

  const handleDarkmode = () => {
    setDarkmode(!darkmode)
  }

  const newChat = () => {
    setIntro(true)
  }


  return (
    <>
      <div className={`body b-${darkmode ? "black" : 'white'}`}>
        <Sidebar darkmode={darkmode} newChat={newChat} questionsArr={questionsArr} introQuestion={introQuestion} />
        <Main
          darkmode={darkmode}
          handleDarkmode={handleDarkmode}
          intro={intro}
          ans={ans}
          input={input}
          submit={submit}
          handleInput={handleInput}
          question={question}
          introQuestion={introQuestion}
        />
      </div>
    </>
  )
}

export default App
