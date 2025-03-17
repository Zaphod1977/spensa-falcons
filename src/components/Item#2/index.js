import React from 'react';
import Item4Image from '../../assets/images/item4.jpg';
import Item5Image from '../../assets/images/item5.jpg';
import Item6Image from '../../assets/images/item6.jpg';
import Project from '../Project';


function Item2(props) {
  return (
    <section id="work" className="work">
      <h2 className="work-leftside">Written work</h2>
      <div >
        <div className="">
          <Project className="resume"
            imageSource={Item4Image}
            imageAlt=""
            label="">
          </Project>
        </div>
        <div className="">
          <Project className="resume"
            imageSource={Item5Image}
            imageAlt=""
            label="">
          </Project>
        </div>
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

export default Item2;
