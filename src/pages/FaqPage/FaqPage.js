import React, { useState } from 'react'
import AOS from 'aos'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { FiPlus, FiMinus } from "react-icons/fi";

import faqData from '../../data/faqData'

import './FaqPage.css'

import faq_image from '../../assets/svg/faq_image.svg'


import CustomTitle from '../../utils/CustomTitle'

function FaqPage() {

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  
  AOS.init({
    duration: 800,
  })

  return (
    <div className='faqPage'>
      <CustomTitle title="FAQ" />
      <div className='faqPage__container'>
        <div className='faq__left'>
          <h1>FAQ</h1>
          <div className='faq_content'>
            {faqData.map((faq) => (
              <Accordion 
                key={faq.id} 
                expanded={expanded === `${faq.id}`} 
                onChange={handleChange(`${faq.id}`)}
                disableGutters
                elevation={0}
                sx={{
                  background: 'transparent',
                  padding: 0,
                  '&:before': {
                    display: 'none',
                  }
                }}
              >
                <AccordionSummary
                  expandIcon={expanded === `${faq.id}` ? <FiMinus className='acc--icon  bg-acc' /> : <FiPlus className='acc--icon' />}
                  aria-controls={`panel${faq.id}bh-content`}
                  id={`panel${faq.id}bh-header`}
                  sx={{
                    padding: 0,
                  }}
                >
                  {faq.question}
                </AccordionSummary>
                <AccordionDetails>
                    <p>
                      {faq.answer}
                    </p>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
        <div className='faq__right'>
          <img src={faq_image} alt="" className='faq_image' />
        </div>
      </div>
    </div>
  )
}

export default FaqPage