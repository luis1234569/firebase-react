import React, { useEffect, useState } from "react";
export const listLink = [
  "descarga.jpg",
  "descarga1.jpg",
  "descarga2.jpg",
  "descarga3.jpg",
];

function Carrousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(listLink[0]);
  const [loaded, setLoaded] = useState(true);

  const autoPlay = true;
  const showButtons = true;

  useEffect(() => {
    if (autoPlay || !showButtons) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, listLink);
      }, 4000);
      return () => clearInterval(interval);
    }
  });

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;

      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
      setLoaded(true);
    }, 500);
  };

  const previous = () => {
    selectNewImage(selectedIndex, listLink, false);
    console.log("Previous");
  };

  const next = () => {
    selectNewImage(selectedIndex, listLink);
  };
  return (
    <div>
      <div className="container w-full mx-auto mt-6 h-96 ">
          {selectedImage? <img
            className='animate-load mx-auto max-h-96'
            src={"../assets/" + selectedImage}
            alt=""
          />:<></>}

      </div>
      <div className="flex flex-row w-full justify-center cursor-pointer">
        <div className="bg-red-400 " onClick={previous}>
          <i className="material-icons ">keyboard_arrow_left</i>
        </div>
        <div className="bg-red-400 " onClick={next}>
          <i className="material-icons ">keyboard_arrow_right</i>
        </div>
      </div>
    </div>
  );
}

export default Carrousel;
