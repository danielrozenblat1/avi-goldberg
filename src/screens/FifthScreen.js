import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import PhoneIcon from '@mui/icons-material/Phone';
import DescriptionIcon from '@mui/icons-material/Description';
import EditIcon from '@mui/icons-material/Edit';
import HandshakeIcon from '@mui/icons-material/Handshake';
import Typography from '@mui/material/Typography';
import ScrollReveal from 'scrollreveal';
import GroupIcon from '@mui/icons-material/Group';

import styles from "./FifthScreen.module.css";


const CustomizedTimeline = () => {

  React.useEffect(() => {

    ScrollReveal().reveal(`.${styles.title}`, {
      duration: 500,
      distance: "30px",
      origin: "top",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });

    ScrollReveal().reveal(`#item1`, {
      duration: 500,
      distance: "30px",
      origin: "left",
      easing: "ease-in-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });

    ScrollReveal().reveal(`#item2`, {
      duration: 500,
      distance: "30px",
      origin: "left",
      easing: "ease-in-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });

    ScrollReveal().reveal(`#item3`, {
      duration: 1000,
      distance: "30px",
      origin: "left",
      easing: "ease-in-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });

  }, []);

  return (
    <>
      <div className={styles.title}>Previous Work Places</div>
      <Timeline position="alternate-reverse">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="left"
            variant="body2"
            color="black"
            fontFamily="Rubik"
          >
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.5rem" id="item1">
              1
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'black' }} />
            <PhoneIcon fontSize="large" sx={{ color: 'black' }} />
            <TimelineConnector sx={{ bgcolor: 'black' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.2rem" color="black" id="item1" textAlign="right" direction="ltr" marginBottom="0">
            first place
            </Typography>
            <Typography fontFamily="RubikR" dir="ltr" fontSize="1rem" color="black" id="item1" textAlign="right" marginBottom="0">
       from 1995-2001
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="black"
            fontFamily="Rubik"
          >
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.5rem" color="black" id="item2">
              2
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'black' }} />
            <DescriptionIcon fontSize="large" sx={{ color: 'black' }} />
            <TimelineConnector sx={{ bgcolor: 'black' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.2rem" color="black" id="item2" textAlign="left" direction="ltr" marginBottom="0">
        Second Place 
            </Typography>
            <Typography  fontFamily="RubikR" dir="ltr" fontSize="1rem" color="black" id="item2" textAlign="left" marginBottom="0">
from 2001-2009
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="black"
            fontFamily="Rubik"
          >
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.5rem" id="item3">
              3
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'black' }} />
            <GroupIcon fontSize="large" sx={{ color: 'black' }} />
            <TimelineConnector sx={{ bgcolor: 'black' }} fontFamily="Rubik" />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.2rem" color="black" id="item3" textAlign="right" direction="ltr" marginBottom="0">
           Third Place
            </Typography>
            <Typography fontFamily="RubikR" dir="ltr" fontSize="1rem" color="black" id="item3" textAlign="right" marginBottom="0">
from 2009-2015 
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="black"
            fontFamily="Rubik"
          >
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.5rem" color="black" id="item2">
              4
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'black' }} />
            <EditIcon fontSize="large" sx={{ color: 'black' }} />
            <TimelineConnector sx={{ bgcolor: 'black' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.2rem" color="black" id="item2" textAlign="left" direction="ltr" marginBottom="0">
        Forth Place
            </Typography>
            <Typography fontFamily="RubikR" dir="ltr" fontSize="1rem" color="black" id="item2" textAlign="left" marginBottom="0">
   from 2015-2019
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="black"
            fontFamily="Rubik"
          >
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.5rem" id="item3">
              5
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'black' }} />
            <HandshakeIcon fontSize="large" sx={{ color: 'black' }} />
            <TimelineConnector sx={{ bgcolor: 'black' }} fontFamily="Rubik" />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="RubikR" fontSize="1.2rem" color="black" id="item3" textAlign="right" direction="ltr" marginBottom="0">
       Fifth Place
            </Typography>
            <Typography fontFamily="RubikR" dir="ltr" fontSize="1rem" color="black" id="item3" textAlign="right" marginBottom="0">
          from 2019-now
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>

    </>
  );
};

export default CustomizedTimeline;