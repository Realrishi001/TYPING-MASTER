import React, { useState, useEffect } from "react";
import "./Typing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo, faPerson, faUser, faCog } from "@fortawesome/free-solid-svg-icons";
import { Paragraphs } from "../../Paragraphs";
import Navbar from "../Navbar/Navbar";
import SpeedAnalysis from "../../SpeedAnalysis";
import ImageSlide from '../ImageSlide/ImageSlide';
import { NavLink } from "react-router-dom";

const Typing = () => {
  const [timer, setTimer] = useState(30);
  const [isRunning, setIsRunning] = useState(false);
  const [currentParagraph, setCurrentParagraph] = useState("");
  const [input, setInput] = useState("");
  const [timeSelected, setTimeSelected] = useState(30);
  const [totalCharsTyped, setTotalCharsTyped] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);
  const [setting, setSetting] = useState(false);

  const paragraph = currentParagraph;

  const handleChange = (e) => {
    const typedText = e.target.value;
    const lastCharIndex = typedText.length - 1;
    const lastChar = typedText[lastCharIndex];

    setInput(typedText);
    setIsRunning(true);

    if (lastChar === paragraph[lastCharIndex]) {
      setTotalCharsTyped((prev) => prev + 1);
    }

    if (typedText === paragraph) {
      setTimerStarted(false);
    }

    if (!timerStarted) {
      setTimerStarted(true);
    }
  };

  const getLetters = (letter, typedLetter) => {
    if (typedLetter === undefined) return "";
    return letter === typedLetter ? "correct" : "incorrect";
  };

  const clearText = () => {
    setInput("");
    setTotalCharsTyped(0);
  };

  useEffect(() => {
    let timerInterval;

    if (isRunning && timerStarted && timer > 0) {
      timerInterval = setInterval(() => {
        setTimer((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerInterval);
            setInput(false);
            return 0;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }

    return () => clearInterval(timerInterval);
  }, [isRunning, timer, timerStarted]);

  const getRandomPara = (category = "defaultPara", time = 30) => {
    const filteredParagraphs = Paragraphs[category] || Paragraphs.default;

    if (!filteredParagraphs || filteredParagraphs.length === 0) {
      console.error(`No paragraphs found for category: ${category}`);
      return;
    }

    const randomIndex = Math.floor(Math.random() * filteredParagraphs.length);
    setCurrentParagraph(filteredParagraphs[randomIndex]);
    setTimer(time);
    setIsRunning(false);
    setInput("");
    setTotalCharsTyped(0);
  };

  useEffect(() => {
    getRandomPara("defaultPara", timeSelected);
  }, [timeSelected]);

  const handleStartTimer = () => {
    setIsRunning(true);
  };

  const handleStopTimer = () => {
    setIsRunning(false);
  };

  const handleRestartTimer = () => {
    setIsRunning(false);
    setTimer(timeSelected);
    clearText();
  };

  const openSetting =()=>{
    setSetting(prev => !prev);
    // setSetting(setting ? false : true);
  }
  
  return (
    <div className="typing-page">

      <div className="login-headers">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <FontAwesomeIcon icon={faCog} className="icon" onClick={openSetting}  />
      {setting &&
      <div className="more-setting">
        <NavLink to="/memorymove" style={{textDecoration: 'none'}} ><button>Memory Move</button></NavLink>
      </div>
      }
      </div>


      <h2><span>Typing</span> Page</h2>

      <Navbar onParagraphChange={getRandomPara} setTime={setTimeSelected} />

      <h6>{timer} </h6>
      <div className="Text-Para">
        <div className="text-container">
          {paragraph.split("").map((letter, index) => (
            <span
              key={index}
              className={getLetters(letter, input[index])}
              style={{
                color:
                  getLetters(letter, input[index]) === "correct"
                    ? "yellow"
                    : getLetters(letter, input[index]) === "incorrect"
                    ? "red"
                    : "grey",
              }}
            >
              {letter}
            </span>
          ))}
        </div>
        <div className="type-para">
          {(timer === 0 || input === paragraph) ? (
            <SpeedAnalysis totalCharsTyped={totalCharsTyped} timeElapsed={30 - timer} />
          ) : (
            <div className="typing-box">
              <textarea onChange={handleChange} placeholder="Click here and start typing!!" value={input}></textarea>
            </div>
          )}
        </div>
      </div>

      <ImageSlide totalCharsTyped={totalCharsTyped} timeElapsed={30 - timer} />

      <div className="restart-btn">
        <button title="restart" onClick={() => getRandomPara("defaultPara", timeSelected)}>
          <FontAwesomeIcon icon={faRedo} />
        </button>
      </div>
    </div>
  );
};

export default Typing;
