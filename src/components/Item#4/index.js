import React from 'react';
import Item4Image from '../../assets/images/item4.jpg'
import Project from '../Project';


function Item4(props) {

  return (
    <section id="work" className="work">
      <h2 className="work-leftside">Mak'r</h2>
      <div >
        <div className="">
          <Project className="resume"
            imageSource={Item4Image}
            imageAlt=""
            label="">
          </Project>
        </div>
      </div>
    </section>
  );
};

export default Item4;
