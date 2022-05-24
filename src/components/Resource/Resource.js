import React from "react";
import './Resource.css';
import Logo from '../../assets/svg/logo.svg';
import { BsLink45Deg } from "react-icons/bs";

function Resource() {
  return (
  <div className="resources" id="resources">
    <div className="resources_container">
      <h1 className='section__header'>RESOURCES</h1>

      <p className="resources__text">The official announcements about upcoming events will be published here. Keep checking to know more...</p>
      <div className="resources__container">
          <div className="resources__card">
            <div className="resources__card__header">
              <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" className="card__image" width="600"/>
            </div>
            <div className="resources__card__body">  
              <h4>HELLO WORLD</h4>
              <p>Introducing to CP & DSA</p>
            </div>
          
            <div className="resources__card__footer">
            <div className="resources__logo">
              <img src={Logo} alt="logo__image" className="resources__logo_img"/>
              <div className="resources__logo__info">
                <h5>Open Link <BsLink45Deg size={20}/></h5>
                
              </div>
            </div>
          </div>

            
          </div>
          <div className="resources__card">
          <div className="resources__card__header">
            <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" className="card__image" width="600"/>
          </div>
          <div className="resources__card__body">
            
            <h4>CODESPRINT</h4>
            <p>On your mark. Get Set. Code</p>
            
          </div>
        
          <div className="resources__card__footer">
          <div className="resources__logo">
            <img src={Logo} alt="logo__image" className="resources__logo_img"/>
            <div className="resources__logo__info">
              <h5>Open Link <BsLink45Deg size={20}/></h5>
              
            </div>
          </div>
        </div>

          
        </div>
              
      </div>
    </div>
    </div>
  )
}

export default Resource