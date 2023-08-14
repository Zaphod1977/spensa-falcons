import React from 'react';
import Item4Image from '../../assets/images/ResumeV2.0.jpg'
import Project from '../Project';


function Item4(props) {

  return (
    <section id="work" className="work">
      <h2 className="work-leftside">Resume</h2>
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
