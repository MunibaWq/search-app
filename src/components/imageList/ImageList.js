import React from "react";
import "./ImageList.css";
import ImageCard from "../imageCard/ImageCard";

const ImageList = ({ images }) => {
  const imageList = images.map((image) => {
    return (
      <div className="list-container" key={image.id}>
        <ImageCard image={image} />
      </div>
    );
  });
  return <div className="image-list">{imageList}</div>;
};

export default ImageList;
