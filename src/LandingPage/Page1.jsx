import React from "react";
import model1 from "../Img/IMG_6125.jpg";
import model2 from "../Img/IMG_6126.jpg";
import model3 from "../Img/IMG_6127.jpg";
import "./Page1.css";

const Page1 = () => {
  return (
    <div className="models">
      {/* <img src={model2} alt="" className='model'/>
        <img src={model1} alt="" className='model'/>
        <img src={model3} alt="" className='model'/> */}
      <div className="model-label">
        <h4>NEW SEASON</h4>
        <h1>PABLO DIMENSION</h1>
      </div>
    </div>
  );
};

export default Page1;
