import React from 'react';
import Item2Image from '../../assets/images/IMG_0609.jpg';
import Project from '../Project';


function Item2(props) {
  return (
    <section id="work" className="work">
      <h2 className="work-leftside">Item#2</h2>
      <div >
        <div className="">
          <Project className="resume"
            imageSource={Item2Image}
            imageAlt=""
            label="">
          </Project>
        </div>
      </div>
    </section>
  );
};

export default Item2;
