import React, { useState } from "react";
import { AiFillYoutube, AiFillGithub } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { RiTeamLine, RiCalendarLine, RiVipCrown2Fill } from "react-icons/ri";
import { GoTelescope } from "react-icons/go";
import AOS from "aos";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { FaLink, FaShareAlt, FaFilePdf } from "react-icons/fa";
import { eventShareUrl, eventSlug } from "../../utils/events";
import "./Events.css";

import divider from "../../assets/svg/divider.svg";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function EventCard({
  id,
  name,
  desc,
  image,
  date,
  youtube,
  github,
  participants,
  dialog_img,
  leaderboard,
  link,
  slug,
  reportUrl,
  reportFileUrl,
  defaultOpen = false,
}) {
  const [open, setOpen] = useState(defaultOpen);
  const [copied, setCopied] = useState(false);

  React.useEffect(() => {
    if (defaultOpen) setOpen(true);
  }, [defaultOpen]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  AOS.init();

  const resolvedSlug = slug || (id != null ? String(id) : "");
  const shareUrl = eventShareUrl({ slug: resolvedSlug, id, name });

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: name, text: desc, url: shareUrl });
        return;
      }
      throw new Error("no-native-share");
    } catch (err) {
      // Fall back to clipboard when native share is unavailable/cancelled.
      if (err && err.name === "AbortError") return;
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        window.prompt("Copy this event link:", shareUrl);
      }
    }
  };

  const reportLink = reportFileUrl || reportUrl || "";

  return (
    <div
      key={id}
      className="eventCard"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <div className="eventCard_image">
        <img src={image} alt="" loading="lazy" />
      </div>
      <div className="eventCard_content">
        <div className="eventCard_title">
          <div className="eventCard_time">{date}</div>
          <div className="eventCard_name">{name}</div>
        </div>
        <div className="eventCard_para">{desc}</div>
      </div>
      <div className="eventCard_activity eventCard_activity--split">
        <button onClick={handleClickOpen}>
          Explore
          <GoTelescope />
        </button>
        {link ? (
          <a
            className="eventCard_register"
            href={link}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            Register
          </a>
        ) : null}
      </div>
      <Dialog
        style={{ padding: 0, borderRadius: 10 }}
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
        <DialogContent style={{ padding: 0, borderRadius: 10 }}>
          <div className="eventDialog">
            <div className="eventDialog__header">
              <IoCloseOutline
                className="eventDialog__close"
                onClick={handleClose}
              />
              <div className="edh__left">
                <img src={dialog_img} alt="" />
              </div>
              <div className="edh__right">
                <h1>{name}</h1>
                <div className="edh__right__btns">
                  {participants && (
                    <div className="edh_btn">
                      <RiTeamLine fontSize={20} />
                      <p>{participants} Participants</p>
                    </div>
                  )}
                  <div className="edh_btn">
                    <RiCalendarLine fontSize={20} />
                    <p>{date}</p>
                  </div>
                </div>
                <p className="edh__right_p">{desc}</p>
                <div className="edh__cta">
                  {link && (
                    <a
                      className="edh__register"
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Register Now
                    </a>
                  )}
                  <button className="edh__share" onClick={handleShare}>
                    <FaShareAlt size={14} />
                    {copied ? "Link copied!" : "Share"}
                  </button>
                </div>
              </div>
            </div>
            {leaderboard && leaderboard.length > 0 && (
              <>
                <img src={divider} alt="" className="event_divider_line" />
                <div className="eventDialog__leaderboard">
                  <h1>Leaderboard</h1>
                  {leaderboard.map((ldbrd) => (
                    <div key={ldbrd.id}>
                      <h3 className="ldbrd__title">{ldbrd.title}</h3>
                      <div className="leaderboard__container">
                        {ldbrd.second && (
                          <div className="leaderboard__row second__row">
                            <h3>
                              <span>2</span>nd
                            </h3>
                            <img
                              className="second__image"
                              src={ldbrd.second.image}
                              alt=""
                            />
                            <h4>{ldbrd.second.name}</h4>
                          </div>
                        )}
                        {ldbrd.first && (
                          <div className="leaderboard__row first__row">
                            <RiVipCrown2Fill className="crown" />
                            <img
                              className="first__image"
                              src={ldbrd.first.image}
                              alt=""
                            />
                            <h4>{ldbrd.first.name}</h4>
                          </div>
                        )}
                        {ldbrd.third && (
                          <div className="leaderboard__row third__row">
                            <h3>
                              <span>3</span>rd
                            </h3>
                            <img
                              className="third__image"
                              src={ldbrd.third.image}
                              alt=""
                            />
                            <h4>{ldbrd.third.name}</h4>
                          </div>
                        )}
                        {ldbrd.prize &&
                          ldbrd.prize.map((p, pid) => (
                            <div
                              style={{ margin: "0 1rem" }}
                              className="leaderboard__row first__row"
                              key={pid}
                            >
                              <RiVipCrown2Fill className="crown" />
                              <img
                                className="first__image"
                                src={p.image}
                                alt=""
                              />
                              <h4>{p.name}</h4>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            {(youtube || github || link || reportLink) && (
              <>
                <img src={divider} alt="" className="event_divider_line" />
                <div className="eventDialog__footer">
                  <h1>External Links</h1>
                  <div className="edf__btns">
                    {link && (
                      <a
                        className="edf_btn"
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaLink size={25} />
                        Register
                      </a>
                    )}
                    {youtube && (
                      <a
                        className="edf_btn"
                        href={youtube}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <AiFillYoutube size={25} />
                        Youtube
                      </a>
                    )}
                    {github && (
                      <a
                        className="edf_btn"
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <AiFillGithub size={25} />
                        Github
                      </a>
                    )}
                    {reportLink && (
                      <a
                        className="edf_btn"
                        href={reportLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaFilePdf size={22} />
                        Report
                      </a>
                    )}
                    <button className="edf_btn edf_btn--share" onClick={handleShare}>
                      <FaShareAlt size={20} />
                      {copied ? "Copied!" : "Share"}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Re-export helper for routes that need a slug without importing utils.
EventCard.slugFor = (event) => eventSlug(event);

export default EventCard;
