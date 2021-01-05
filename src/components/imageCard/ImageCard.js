import React, { useEffect, useRef, useState } from "react";

const ImageCard = (props) => {
  const { description, urls } = props.image;
  const [span, setSpan] = useState(0);
  const imageRef = useRef(0);

  useEffect(() => {
    imageRef.current.addEventListener("load", setSpanValue);
  });

  const setSpanValue = () => {
    const height = imageRef.current.clientHeight;
    const spanValue = Math.ceil(height / 10);
    setSpan(spanValue);
  };
  return (
    <div style={{ gridRowEnd: `span ${span}` }} className="image-card">
      <img ref={imageRef} alt={description} src={urls.regular} />
    </div>
  );
};

export default ImageCard;
