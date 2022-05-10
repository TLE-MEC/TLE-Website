import React from "react";
import './Resource.css';
import Logo from '../../assets/svg/logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
function Resource() {
  return (


    <div>

        <h3 style={{ textAlign: "center", padding: "20px", marginTop: "120px" }}>
         RESOURCES
        </h3>
 
            <p className="text" style={{ textAlign: "center", paddingTop: "20px", marginTop: "30px" }}>The official announcements about upcoming events will be published here. Keep checking to know more...</p>

            <div class="container">
                <div class="card">
                  <div class="card__header">
                    <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image" width="600"/>
                  </div>
                  <div class="card__body">
                    
                    <h4>HELLO WORLD</h4>
                    <p>Introducing to CP & DSA</p>
                   
                  </div>
                
                  <div class="card__footer">
                  <div class="logo">
                    <img src={Logo} alt="logo__image" class="logo_img"/>
                    <div class="logo__info">
                      <h5>Open Link<FontAwesomeIcon icon={faLink} style={{paddingLeft:"5px"}} /></h5>
                      
                    </div>
                  </div>
                </div>

                  
                </div>
                <div class="card">
                <div class="card__header">
                  <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image" width="600"/>
                </div>
                <div class="card__body">
                  
                  <h4>CODESPRINT</h4>
                  <p>On your mark. Get Set. Code</p>
                 
                </div>
              
                <div class="card__footer">
                <div class="logo">
                  <img src={Logo} alt="logo__image" class="logo_img"/>
                  <div class="logo__info">
                    <h5>Open Link<FontAwesomeIcon icon={faLink} style={{paddingLeft:"5px"}}/></h5>
                    
                  </div>
                </div>
              </div>

                
              </div>
                
            </div>
        </div>
    




  )
}

export default Resource

