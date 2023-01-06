import React from "react";

const DetailBanner = ({image, imageName}) => {
  return (
    
    <div
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <div className="text-container">
        <h1>{imageName}</h1>
        
      </div>
    </div>
    
  );
};

export default DetailBanner;
