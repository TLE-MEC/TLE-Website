import React from "react";
import './Resource.css';
import { BsLink45Deg } from "react-icons/bs";
import AOS from 'aos'

import resourceData from "../../data/resourceData";

function Resource() {

  AOS.init({
    duration: 800,
  })


  return (
  <div className="resources" id="resources">
    <div className="resources_container">
      <h1 className='section__header'>RESOURCES</h1>

      <p className="section__text">The official announcements about upcoming events will be published here. Keep checking to know more...</p>
      <div className="resources__container">
        {
          resourceData.map((res) => (
            <div data-aos="slide-up" className="resources__card" key={res.id}>
              <div className="resources__card__header">
                <img src={res.image} alt="card__image" className="card__image" width="600"/>
              </div>
              <div className="resources__card__body">  
                <h4>{res.name}</h4>
                <p>{res.desc}</p>
              </div>
            
              <div className="resources__card__footer">
                <div className="resources__logo">
                  <div className="resources__logo__info">
                    <h5>Open Link <BsLink45Deg size={20}/></h5>
                  </div>
                </div>
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