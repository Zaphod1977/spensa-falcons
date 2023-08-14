import React from 'react';
import Item5Image from '../../assets/images/item5.jpg'
import Project from '../Project';


function Item5(props) {

  return (
    <section id="work" className="work">
      <h2 className="work-leftside">Item#5</h2>
      <div >
        <div className="">
          <Project className="resume"
            imageSource={Item5Image}
            imageAlt=""
            label="">
          </Project>
        </div>
      </div>
    </section>
  );
};

export default Item5;
