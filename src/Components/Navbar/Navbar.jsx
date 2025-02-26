import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faA, faClock, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = ({ onParagraphChange, setTime }) => {
  const [showTimeOptions, setShowTimeOptions] = useState(false);
  const [showWordsOptions, setShowWordsOptions] = useState(false);

  const handleTimeClick = (time) => {
    setTime(time); // Update the time in Typing.js
  };

  const handleWordsClick = () => {
    setShowWordsOptions(true);
    setShowTimeOptions(false); // Ensure only one set of options is shown
  };

  return (
    <div className="navbar">
      <div className="side">
        <button onClick={() => onParagraphChange("punctuation")}>
          @ punctuation
        </button>
        <button onClick={() => onParagraphChange("numbers")}># numbers</button>
      </div>
      <div className="side">
        <button onClick={() => setShowTimeOptions(!showTimeOptions)}>
          <FontAwesomeIcon icon={faClock} /> time
        </button>
        <button onClick={handleWordsClick}>
          <FontAwesomeIcon icon={faA} /> words
        </button>
        <button onClick={() => onParagraphChange("punctuation")}>
          <FontAwesomeIcon icon={faQuoteLeft} /> quote
        </button>
      </div>
      <div className="side" style={{ borderRight: "none" }}>
        {showTimeOptions ? (
          <>
            <button onClick={() => handleTimeClick(10)}>10s</button>
            <button onClick={() => handleTimeClick(15)}>15s</button>
            <button onClick={() => handleTimeClick(30)}>30s</button>
            <button onClick={() => handleTimeClick(100)}>100s</button>
          </>
        ) : showWordsOptions ? (
          <>
            <button onClick={() => onParagraphChange(10)}>10</button>
            <button onClick={() => onParagraphChange(30)}>30 </button>
            <button onClick={() => onParagraphChange(50)}>50 </button>
            <button onClick={() => onParagraphChange(100)}>100 </button>
          </>
        ) : (
          <button title="I'm here just for fun">:)</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
