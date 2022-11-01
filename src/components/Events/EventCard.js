import React, { useState } from 'react';
import { AiFillYoutube, AiFillGithub } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { RiTeamLine, RiCalendarLine, RiVipCrown2Fill } from "react-icons/ri";
import { GoTelescope } from "react-icons/go"
import AOS from 'aos'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import {FaLink} from 'react-icons/fa'
import eventData from '../../data/eventData';
import './Events.css';

import divider from '../../assets/svg/divider.svg'


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function EventCard({ id, name, desc, image, date, youtube, github, participants, dialog_img, leaderboard,link }) {

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
        style={{ padding: 0, borderRadius: 10}}
        fullWidth={true}
        maxWidth={"lg"}
        PaperProps={{ sx: { width: "100%", borderRadius: 10, m: 2 } }}
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
                  {leaderboard.map((ldbrd) => (
                    <div key={ldbrd.id}>
                    <h3 className='ldbrd__title'>{ldbrd.title}</h3>
                    <div className='leaderboard__container' >
                      {ldbrd.second && (
                        <div className='leaderboard__row second__row'>
                          <h3><span>2</span>nd</h3>
                          <img className='second__image' src={ldbrd.second.image} alt="" />
                          <h4>{ldbrd.second.name}</h4>
                        </div>
                      )}
                      {ldbrd.first && (
                        <div className='leaderboard__row first__row'>
                          <RiVipCrown2Fill className='crown' />
                          <img className='first__image' src={ldbrd.first.image} alt="" />
                          <h4>{ldbrd.first.name}</h4>
                        </div>
                      )}
                      {ldbrd.third && (
                        <div className='leaderboard__row third__row'>
                          <h3><span>3</span>rd</h3>
                          <img className='third__image' src={ldbrd.third.image} alt="" />
                          <h4>{ldbrd.third.name}</h4>
                        </div>
                      )}
                      {ldbrd.prize && ldbrd.prize.map((p, id) => (
                        <div style={{ margin: '0 1rem'}} className='leaderboard__row first__row' key={id}>
                          <RiVipCrown2Fill className='crown' />
                          <img className='first__image' src={p.image} alt="" />
                          <h4>{p.name}</h4>
                        </div>
                      ))}
                    </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            {(youtube || github ||link) && (
              <>
              <img src={divider} alt="" className='event_divider_line' />
              <div className='eventDialog__footer'>
                <h1>External Links</h1>
                <div className='edf__btns'>
                {link && (
                    <a className='edf_btn' href={link} target="_blank" rel="noreferrer">
                      <FaLink size={25}/>
                      Register
                    </a>
                  )}
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