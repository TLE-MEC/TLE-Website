import React, { useState } from 'react';
import { AiFillYoutube, AiFillGithub } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { RiTeamLine, RiCalendarLine, RiVipCrown2Fill } from "react-icons/ri";
import { GoTelescope } from "react-icons/go"
import AOS from 'aos'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';

import eventData from '../../data/eventData';
import './Events.css';

import divider from '../../assets/svg/divider.svg'


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function EventCard({ id, name, desc, image, date, youtube, github, participants, dialog_img, leaderboard }) {

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
        style={{ padding: 0, borderRadius: 10 }}
        fullWidth={true}
        maxWidth={"lg"}
        PaperProps={{ sx: { width: "100%", borderRadius: 10, margin: 5 } }}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        disableScrollLock
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent
        style={{ padding: 0, borderRadius: 10 }}
        >
          <div className='eventDialog'>
            <div className='eventDialog__header'>
            <IoCloseOutline className='eventDialog__close' onClick={handleClose}/>
              <div className='edh__left'>
                <img src={dialog_img} alt="" />
              </div>
              <div className='edh__right'>
                <h1>{name}</h1>
                <div className='edh__right__btns'>
                  <div className='edh_btn'>
                    <RiTeamLine fontSize={20}/>
                    <p>{participants} Participants</p>
                  </div>
                  <div className='edh_btn'>
                    <RiCalendarLine fontSize={20}/>
                    <p>{date}</p>
                  </div>
                </div>
                <p className='edh__right_p'>{desc}</p>
              </div>
            </div>
            {leaderboard.length > 0 && (
              <>
                <img src={divider} alt="" className='event_divider_line' />
                <div className='eventDialog__leaderboard'>
                  <h1>Leaderboard</h1>
                  <div className='leaderboard__container'>
                    <div className='leaderboard__row second__row'>
                      <h3><span>2</span>nd</h3>
                      <img className='second__image' src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                      <h4>Shiny Jose</h4>
                    </div>
                    <div className='leaderboard__row first__row'>
                      <RiVipCrown2Fill className='crown' />
                      <img className='first__image' src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                      <h4>Shiny Jose</h4>
                    </div>
                    <div className='leaderboard__row third__row'>
                      <h3><span>3</span>rd</h3>
                      <img className='third__image' src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                      <h4>Shiny Jose</h4>
                    </div>
                  </div>
                </div>
              </>
            )}
            {(youtube || github) && (
              <>
              <img src={divider} alt="" className='event_divider_line' />
              <div className='eventDialog__footer'>
                <h1>External Links</h1>
                <div className='edf__btns'>
                  {youtube && (
                    <a className='edf_btn' href={youtube} target="_blank" rel="noreferrer">
                      <AiFillYoutube size={25}/>
                      Youtube
                    </a>
                  )}
                  {github && (
                    <a className='edf_btn' href={github} target="_blank" rel="noreferrer">
                      <AiFillGithub size={25}/>
                      Github
                    </a>
                  )}
                </div>
              </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
export default EventCard;