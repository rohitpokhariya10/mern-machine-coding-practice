import { useEffect, useState } from "react";

const App = () => {
  let [images, setImages] = useState([
    {
      id: 0,
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      title: "Mountain",
    },
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      title: "Beach",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
      title: "City",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
      title: "Forest",
    },
  ]);
  let [currentImage, setCurrentImage] = useState(0);
  // console.log(currentImage)

  //console.log("Images-->", images);

  function handleNext() {
    // console.log("images length-->" , images.length)
    // console.log(images.length % id)
    let nextValue = Math.floor((currentImage + 1) % images.length);
    //console.log("next Value-->", nextValue);
    setCurrentImage(nextValue);
  }
  function handlePrev() {
    let prevValue = (currentImage - 1 + images.length) % images.length;
    setCurrentImage(prevValue);
  }

  /* Rendering Active Image */
  var ActiveImage = images[currentImage];
  //console.log("Active Image-->", ActiveImage);

  let count = 0;
  useEffect(() => {
    let timer = setTimeout(() => {
      count + 1;
      console.log(count);
      handleNext();
    }, 3000);

    return ()=>{
      clearTimeout(timer);
    }
  }, [currentImage]);

  return (
    <div>
      <h1>DAY 12 MCR | Image Craousel</h1>
      {/* Display Images */}
      <div className="images-crousel-container">
        {
          <div className="images">
            <div className="img">
              <img src={ActiveImage.url} alt={ActiveImage.title} />
            </div>
            {/* <span>⏺</span> */}
            {images.map((img) => {
              return (
                <span
                  key={img.id}
                  onClick={() => setCurrentImage(img.id)}
                  className={
                    img.id == currentImage ? "current-image" : "default"
                  }
                >
                  ⏺
                </span>
              );
            })}
          </div>
        }
      </div>
      {/* Carousel Btns */}
      <div className="btns">
        {<button onClick={() => handlePrev()}>Prev</button>}
        {<button onClick={() => handleNext()}>Nex</button>}
      </div>
    </div>
  );
};

export default App;
