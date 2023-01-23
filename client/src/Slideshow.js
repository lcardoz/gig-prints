import React, {useState, useEffect, useRef} from 'react';
import designer_screenshot from "./designer-screenshot.png";
import band_screenshot from "./band-screenshot.png";
import projects_screenshot from "./projects-screenshot.png";

const slideImages = [
  designer_screenshot,
  band_screenshot,
  projects_screenshot
];

// const slideCaptions = [
//     "Facilitating Touring Bands in Discovering Talented Poster Designers",
//     "Empowering Poster Designers to Connect with Touring Bands",
//     "Simplifying and Centralizing the Process of Creating Concert Posters"
// ]
const delay = 2500;

const Slideshow = () => {

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);



  return (
    <div className="slideshow">
      <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {slideImages.map((image, index) => (      
          <>
          <img
            className="slide"
            key={index}
            src={slideImages[index]}
            alt="homepage"
          />
          {/* <h1>Test</h1> */}
          </> 
        ))}
      </div>
      {/* <div>
        {slideCaptions.map((index) => (
          <h1 key={index} style={{color: "black", backgroundColor: "white"}}>{slideCaptions[index]}</h1>
        ))}  
      </div> */}
      <div className="slideshowDots">
        {slideImages.map((_, idx) => (
          <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`} onClick={() => {setIndex(idx);}}>
          </div>
        ))}
      </div>
  </div>
  )
}

export default Slideshow;