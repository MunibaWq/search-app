import React from "react";
import ImageCard from "../imageCard/ImageCard";

const ImageList = ({ images }) => {
  console.log(images);

  images.map((image) => {
    return <ImageCard key={image.id} alt={image.description} src={image} />;
  });
};

export default ImageList;
