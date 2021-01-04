import React from "react";
import ImageCard from "../imageCard/ImageCard";

// const ImageList = ({ images }) => {
//   console.log(images);

//     const imageList = images.map((image) => {
//       return (
//         <ImageCard
//           key={image.id}
//           alt={image.description}
//           src={image.urls.regular}
//         />
//       );
//     });
//   return <div>{images}</div>;
// };

// export default ImageList;
const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
