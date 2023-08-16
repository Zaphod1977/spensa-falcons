import React from 'react';
import Item1Image from '../../assets/images/item1.jpg';
import Item2Image from '../../assets/images/item2.jpg';
import Item3Image from '../../assets/images/item3.jpg';
import Project from '../Project';

function Item1() {
  return (
    <section id="work" className="work">
      <h2 className="work-leftside">Item#1-3</h2>
      <div >
        <div className="">
          <Project className="resume"
            imageSource={Item1Image}
            imageAlt=""
            label="">
          </Project>
        </div>
        <div className="">
          <Project className="resume"
            imageSource={Item2Image}
            imageAlt=""
            label="">
          </Project>
        </div>
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
}

export default Item1;
