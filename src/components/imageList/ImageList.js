import React from "react";
import ImageCard from "../imageCard/ImageCard";

const ImageList = (props) => {
  const imageList = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div>{imageList}</div>;
};

export default ImageList;
