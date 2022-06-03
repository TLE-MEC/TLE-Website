import React from "react";
import './Resource.css';
import { BsLink45Deg } from "react-icons/bs";
import AOS from 'aos'

import resourceData from "../../data/resourceData";

import res_ellipse_circle from '../../assets/svg/about_ellipse_circle.svg'
import books from '../../assets/svg/books.svg'

function Resource() {

  AOS.init({
    duration: 800,
  })


  return (
  <div className="resources" id="resources">
    <img src={res_ellipse_circle} alt="" className="res_ellipse_circle" />
    <div className="resources_container">
      <h1 className='section__header'>RESOURCES</h1>

      <p className="section__text">
        Here are some resources we've made specifically to guide you in your learning, updated every couple of months. Let us know what else you'd like to see here!
      </p>
      <div className="resources__div">
        {
          resourceData.map((res) => (
            <div data-aos="slide-up" className="resources__card" key={res.id}>
              <div className="resources__card__left">
                <img src={books} alt="" className="resources__card__img" width="600"/>
              </div>
              <div className="resources__card__right">  
                <h4>{res.name}</h4>
                <p>{res.desc}</p>
                <button className="resourceCard__btn">
                  Open <BsLink45Deg size={22}/>
                </button>
              </div>
            </div>  
          ))
        }            
      </div>
    </div>
    </div>
  )
}

export default Resource