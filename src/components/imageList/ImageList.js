import React from "react";
import ImageCard from "../imageCard/ImageCard";

const ImageList = ({ images }) => {
  //   console.log(images);

  const imageList = images.map((image) => {
    return <ImageCard key={image.id} alt={image.description} src={image} />;
  });
  return <div>{imageList}</div>;
};

export default ImageList;
