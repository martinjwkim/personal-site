import React from 'react';
import { Grid } from 'grommet';
import About from './About'
import Home from './Home'

function Body() {

  const props = {
    main: {
      width: { min: '375px'},
      fill: true,
      rows: ["auto", "auto"],
    }
  }

  return (
    <Grid {...props.main}>
      <Home />
      <About />
    </Grid>
  );
}

export default Body;