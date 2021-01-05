import React, { useEffect, useRef, useState } from "react";

const ImageCard = (props) => {
  const [span, setSpan] = useState(0);
  //refs give access to a single DOM element

  const imageRef = useRef(0);
  const { description, urls } = props.image;

  useEffect(() => {
    console.log(`this is imageRef`);
    console.log(imageRef.current);
    console.log(imageRef.current.clientHeight);
    return () => {
      const spans = imageRef.current.clientHeight;
    };
  });
  return (
    <div className="image-card">
      <img ref={imageRef} alt={description} src={urls.regular} />
    </div>
  );
};

export default ImageCard;
