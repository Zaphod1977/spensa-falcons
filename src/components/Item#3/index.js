import React from 'react';
import Item3Image from '../../assets/images/item3.jpg';
import Project from '../Project';


function Item3(props) {
  return (
    <section id="work" className="work">
      <h2 className="work-leftside">Photography</h2>
      <div >
        <div className="">
          <Project className="resume"
            imageSource={Item3Image}
            imageAlt=""
            label="">
          </Project>
        </div>
      </div>
    </section>
  );
};

export default Item3;