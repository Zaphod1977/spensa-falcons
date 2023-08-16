import React from 'react';
import Item6Image from '../../assets/images/item6.jpg'
import Project from '../Project';


function Item6(props) {

  return (
    <section id="work" className="work">
      <h2 className="work-leftside">Item#6</h2>
      <div >
        <div className="">
          <Project className="resume"
            imageSource={Item6Image}
            imageAlt=""
            label="">
          </Project>
        </div>
      </div>
    </section>
  );
};

export default Item6;
