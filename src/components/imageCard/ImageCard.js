import React, { useEffect, useRef } from "react";

const ImageCard = (props) => {
  //refs give access to a single DOM element

  const imageRef = useRef(0);
  const { description, urls } = props.image;

  useEffect(() => {
    console.log(`this is imageRef`);
    console.log(imageRef);
    return () => {
      <div>this is useEffect</div>;
    };
  });
  return (
    <div className="image-card">
      <img ref={imageRef} alt={description} src={urls.regular} />
    </div>
  );
};

export default ImageCard;
