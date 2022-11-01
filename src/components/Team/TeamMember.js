import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { FiChevronRight } from "react-icons/fi";
import { BsDot } from "react-icons/bs";

import "./TeamMember.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0}  {...props} />
))(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  borderRadius: 10
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<FiChevronRight color="#003a3a" size={20}/>}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "#c2e6e6"
      : "#c2e6e6",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions({team}) {
  const [expanded, setExpanded] = useState(false);

  const handleChange =
    (panel ) => (event , newExpanded ) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className="tp-memberaccordion">
      {team.map((item, index) => {
        return (
          <Accordion
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            key={index}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <h3 className="tp-teamname">{item.name}</h3>
            </AccordionSummary>
            <AccordionDetails>
              {item.members.map((it,no) => {
                return (
                  <p key={no} className="tp-membername">
                    <BsDot color="#212121" size={18}/>
                    {it.name}
                  </p>
                );
              })}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
