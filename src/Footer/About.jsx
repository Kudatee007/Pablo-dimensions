import React from "react";
import "./About.css";
import hife from "../Img/hife.svg";

const About = () => {
  return (
    <div className="About">
      <h1 className="about-us">ABOUT US</h1>
      <div className="hife-box">
        <img src={hife} alt="" className="hife" />
      </div>
      <p className="about-p">
        <span className="about-span">PABLO_DIMENSION</span>Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. At nam in facilis provident
        obcaecati ducimus nulla expedita fuga corporis est? Optio sed eius
        repudiandae nam fugit nulla, laudantium doloribus corrupti. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Quo praesentium eaque
        voluptatibus nostrum dolores quos eum laborum modi, quasi ducimus
        accusamus sunt consectetur architecto temporibus iusto amet.
        Perspiciatis, repudiandae eius. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Sint vero possimus debitis sapiente consequatur ipsa.
        Architecto, suscipit minus. Sequi, voluptatibus ipsum nemo vero enim et
        doloremque labore eligendi ex iure! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quaerat dolorem ipsam, architecto numquam
        facere hic pariatur dolorum distinctio reiciendis, nisi consequatur,
        unde soluta id mollitia est! Architecto, quaerat ea! Et.
      </p>
    </div>
  );
};

export default About;
