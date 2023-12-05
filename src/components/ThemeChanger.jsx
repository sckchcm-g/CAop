import React, { useState } from 'react';
import image1 from '../assets/image(1).jpg';
import image2 from '../assets/image(2).jpg';
import image3 from '../assets/image(3).jpg';
import image4 from '../assets/image(4).jpg';
import image5 from '../assets/image(5).jpg';
import image6 from '../assets/image(6).jpg';


const imageData = () => {
    const data = [
      {
        id: 1,
        img: image1,
      },
      {
        id: 2,
        img: image2,
      },
      {
        id: 3,
        img: image3,
      },
      {
        id: 4,
        img: image4,
      },
      {
        id: 5,
        img: image5,
      },
      {
        id: 6,
        img: image6,
      },
    ];
  
    return data;
  };

const ThemeChanger = () => {
  const [backgroundImage, setBackgroundImage] = useState('');
//   const images = ['image(1).jpg', 'image(2).jpg', 'image(3).jpg', 'image(4).jpg', 'image(5).jpg', 'image(6).jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleButtonClick = () => {
    if (prevIndex < 5) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
        document.body.style.backgroundColor = url(imageData[currentIndex].img);
    } else {
        setCurrentIndex((prevIndex) => (prevIndex = 0) % imageData.length);
        document.body.style.backgroundColor = url(imageData[currentIndex].img);
    }
  };


//   React.useEffect(() => {
//     setBackgroundImage(`url(${imageData[currentIndex]})`);
//   }, [currentIndex]);


  return (
    <div style={{ backgroundImage }}>
      {/* <h1>Hello, World!</h1> */}
      <button onClick={handleButtonClick}>Change Background</button>
    </div>
  );
};

export default ThemeChanger;