import React from 'react';
import Item1Image from '../../assets/images/item1.jpg';
import Item2Image from '../../assets/images/item2.jpg';
import Item3Image from '../../assets/images/item3.jpg';
import Item4Image from '../../assets/images/item4.jpg';
import Item5Image from '../../assets/images/item5.jpg';
import Item6Image from '../../assets/images/item6.jpg';
import Project from '../Project';

function Item1() {
  return (
    <section id="work" className="work">
      <h2 className="work-leftside">Meet & Greet</h2>
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
}

export default Item1;
