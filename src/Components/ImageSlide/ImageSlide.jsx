import React, { useEffect, useRef, useState } from 'react';
import "./ImageSlide.css";
import Image from '../../Assests/Loopbackground.png';

const ImageSlide = ({ totalCharsTyped, timeElapsed }) => {
  const [position, setPosition] = useState(0);
  const imageRef = useRef(null);
  
  const wordsPerMinute = (timeElapsed > 0 ? ((totalCharsTyped / 5) / (timeElapsed / 60)).toFixed(2) : 0);
  const speed = parseFloat(wordsPerMinute);

  useEffect(() => {
    const imageWidth = imageRef.current ? imageRef.current.offsetWidth : 600;

    const interval = setInterval(() => {
      setPosition((prev) => {
        const newPosition = prev - speed;
        return newPosition <= -imageWidth ? 0 : newPosition;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [totalCharsTyped, timeElapsed]);

  return (
    <div className="Image-container">
      <div style={{ width: '1000px', height: '300px', overflow: 'hidden', border: '1px solid grey', position: 'relative' }}>
      <div style={{ display: 'flex', position: 'absolute', left: position }}>
        <img ref={imageRef} src={Image} alt='Sliding Image' style={{ flexShrink: -1 , width: "1000px", height: "300px" }} />
        <img src={Image} alt='Sliding Image Duplicate' style={{ flexShrink: -1 , width: "1000px", height: "300px" }} />
      </div>
    </div>

    <div className='speed-info'>
     Speed : <span> {speed}</span>
    </div>

    </div>
  );
};

export default ImageSlide;
