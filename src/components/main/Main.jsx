import * as React from 'react';

import Paper from '@mui/material/Paper';
import TypewriterComponent from '../header/Writer';
import Header from '../header/Header'
import { Grid } from '@mui/material';
import QwictHeaderImage from '../header/QwictHeaderImage';

export default function Main() {
    return (

      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Header/>
        </Grid>
        <Grid item xs={6}>
          <QwictHeaderImage/>
        </Grid>
        <Grid item xs={3}>
          <TypewriterComponent/>
        </Grid>
      </Grid>
    );
}


