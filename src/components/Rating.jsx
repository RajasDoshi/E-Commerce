import React from "react";

const Rating = ({ value, text }) => {
  return (
    <div className="rating">
      <span style={{color:"yellow"}}>
        <i className={value===1?"fa-solid fa-star":"fa-solid fa-star-half-stroke"}></i>
      </span>
      <span style={{color:"yellow"}}>
        <i className={value>=2?"fa-solid fa-star":"fa-solid fa-star-half-stroke"}></i>
      </span>
      <span style={{color:"yellow"}}>
        <i className={value>=3?"fa-solid fa-star":"fa-solid fa-star-half-stroke"}></i>
      </span>
      <span style={{color:"yellow"}}>
        <i className={value>=4?"fa-solid fa-star":"fa-solid fa-star-half-stroke"}></i>
      </span>
      <span style={{color:"yellow"}}>
        <i className={value>=5?"fa-solid fa-star":"fa-solid fa-star-half-stroke"}></i>
      </span>
      <span>{text}</span>
    </div>
  );
};

export default Rating;