import React, { useState } from 'react';
// import { AiFillYoutube, AiFillGithub } from "react-icons/ai";
import { GoTelescope } from "react-icons/go"
import AOS from 'aos'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';

import eventData from '../../data/eventData';
import './Events.css';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function EventCard({ id, name, desc, image, date, youtube, github }) {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  AOS.init()

  const len = eventData.length

  return (
    <div key={id} className="eventCard" data-aos="fade-up" data-aos-duration={`${400*(len+1-id)}`}>
      <div className="eventCard_image">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <div className="title">
          <div className="time">{date}</div>
          <div className="name">{name}</div>
        </div>
        <div className="para">{desc}</div>
      </div>
      <div className="eventCard_activity">
        <button onClick={handleClickOpen}>
          Explore
          <GoTelescope />
        </button>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div className='eventDialog'>
              <div className='eventDialog__header'>
                <div className='edh__left'>
                  <img src={image} alt="" />
                </div>
                <div className='edh__right'>
                  <h1>{name}</h1>
                  <div className='edh__right__btns'>
                    
                  </div>
                </div>
              </div>
              <div className='eventDialog__leaderboard'>
              
              </div>
              <div className='eventDialog__footer'>
              
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  )
}
export default EventCard;