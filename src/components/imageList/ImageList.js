import React from "react";
import "./ImageList.css";
import ImageCard from "../imageCard/ImageCard";

const ImageList = ({ images }) => {
  const imageList = images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{imageList}</div>;
};

export default ImageList;
