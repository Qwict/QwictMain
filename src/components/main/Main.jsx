import * as React from 'react';

import { Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import TypewriterComponent from '../header/Writer';
import Header from '../header/Header'
import QwictHeaderImage from '../header/QwictHeaderImage';
import QwictCorner from '../../media/QwictCorner.png';
import QwictVertical from '../../media/QwictVertical.png';
import QwictHorizontal from '../../media/QwictHorizontal.png';


export default function Main() {
  const isLargerThanMediumScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));
  return isLargerThanMediumScreen ? (
    <>
      {/* <img src={QwictCorner} style={{position: "fixed", top: 0, left: 0, backgroundSize: "cover",margin:"5%"}}/>
        <img src={QwictVertical} style={{position: "fixed", top: 0, right: 0, backgroundSize: "cover", margin:"5%"}}/>
        <img src={QwictHorizontal} style={{position: "fixed", top: 1200, right: 0, backgroundSize: "cover", margin:"5%"}}/> */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} xl={3} className="center-div">
          <Header />
        </Grid>
        <Grid item xs={12} md={6} xl={6} className="center-div">
          <QwictHeaderImage />
        </Grid>
        <Grid item xs={12} xl={3}>
          <TypewriterComponent />
        </Grid>
      </Grid>
    </>
  ) : (
    <>
      {/* <img src={QwictCorner} style={{position: "fixed", top: 0, left: 0, backgroundSize: "cover",margin:"5%"}}/>
      <img src={QwictVertical} style={{position: "fixed", top: 0, right: 0, backgroundSize: "cover", margin:"5%"}}/>
      <img src={QwictHorizontal} style={{position: "fixed", top: 1200, right: 0, backgroundSize: "cover", margin:"5%"}}/> */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} xl={6} style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          height: '50vh',
        }}>
          <QwictHeaderImage />
        </Grid>
        <Grid item xs={12} md={6} xl={3} style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          height: '50vh',
        }}>
          <Header />
        </Grid>
        <Grid item xs={12} xl={3}>
          <TypewriterComponent />
        </Grid>
      </Grid>
    </>
  );
}


