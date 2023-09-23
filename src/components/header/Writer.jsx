import React from 'react';
import Typewriter from 'typewriter-effect';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './Header.css'


export default function Writer() {
  return (
    <Paper className="center-div">
      <Typography
        variant="h4"
        style={{ color: 'grey' }}
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('I have seen things you people wouldn\'t believe.')
              .pauseFor(300)
              .typeString(' Attack ships on fire off the shoulder of Orion.')
              .typeString(' I watched C-beams glitter in the dark near the Tannhäuser Gate.')
              .pauseFor(1000)
              .typeString(' All those moments will be lost in time, like tears in rain.')
              .pauseFor(1000)
              .typeString(' Time to die.')
              .pauseFor(2500)
              .deleteChars(4)
              .typeString(' live.')
              .pauseFor(2500)
              .deleteAll()
              .start();
          }}
        />

      </Typography>
    </Paper>
  )
}