import React,{useEffect, useState} from 'react'
import './MemoryMove.css'
import { NavLink } from 'react-router-dom';

const MemoryMove = () => {

    const[start, setStart] = useState(false);
    const[timer, setTimer] = useState(10);
    const[showTextBox, setShowTextBox] = useState(false);
    const[userInput, setUserInput] = useState("");
    const[result, setResult] = useState(null);
    
    const paragraphs= [
        "This is to check the type master paragraph 1",
        "This is to check the type master paragraph 2",
        "This is to check the type master paragraph 3"
    ]

    const[paragraph, setParagraph] = useState(
        paragraphs[Math.floor(Math.random() * paragraphs.length)]
    )

    const getLetters = (letter, typedLetter)=>{
        if(typedLetter === undefined) return "";
        return letter === typedLetter ? "correct" : "incorrect";
    }

    const CalculateResult = () =>{
        const originalWords = paragraph.split(" ");
        const typedWords = userInput.trim().split(" ");
        let correctwords = 0;
        let totalWords = originalWords.length;

        typedWords.forEach((word, index)=>{
            if(word === originalWords[index]){
                correctwords++;
            }
        })
        const speed  = typedWords.length * (60/10);
        setResult({correctwords, totalWords: originalWords.length, speed})
    }
   
   
    useEffect(()=>{
        if(timer > 0){
            const time = setTimeout(()=> setTimer(timer - 1), 1000)
            return () => clearTimeout(timer);
        }else{
            setShowTextBox(true);
        }
    },[timer])

    const Onstart = ()=>{
        setStart(true);
        setTimer(10);
    }

  return (

    <div className='container'>
        
        {start ? (
            
        <div className='memory-container'>
            {timer > 0 && <h1>Timer : {timer}s</h1>}
            {timer > 0 && <p>{paragraph}</p>}

            {showTextBox && (
            <>
            <NavLink to="/" style={{color: "lightblue", textAlign: "right",fontSize:"15px"}}>Back</NavLink>
            <div className='heading'><h2>Memory Move</h2></div>
            <div className='text-hidden'>
                {paragraph.split("").map((letter, index)=>(
                    <span key={index} className={getLetters(letter, userInput[index])}
                    style={{
                        color: getLetters(letter, userInput[index]) === "correct" ? "yellow" : getLetters(letter, userInput[index]) === "incorrect"? "#323437" : "transparent",
                    }}

                    >{letter}</span>
                ))}
            </div>

            <div className='txt-btn'>
                <textarea onChange={(e)=>setUserInput(e.target.value)} placeholder='Click here and Start typing...' />
                <button onClick={CalculateResult}  >Submit</button>    
            </div>
            </>
            
            )}
            {result && (
                <div className='result'>
                    <h2>Result : </h2>
                    <p><strong>Correct words :</strong> {result.correctwords}/{result.totalWords}</p>
                    <p><strong>WPM</strong> : {result.speed} </p>
                </div>
            )}
            

        </div>
        ) : (
            <div className='Container'>
        
            <div className='title'>
                <h1>Hit the start button to begin the Memory Typing Test!!</h1>
                <p>Let's see, how far you can memorize a sentence...!?</p>
            </div>
            <button type='button' className='button' onClick={Onstart}>Start</button>
    
        </div>
        )}
    </div>
  )
}

export default MemoryMove