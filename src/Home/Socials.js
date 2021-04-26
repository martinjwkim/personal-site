import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Anchor, Box } from 'grommet';
import { Github, Twitter, Linkedin, Instagram, Facebook } from 'grommet-icons'

function Socials() {

  const props = {
    main: {
      direction: 'column',
      pad: { top: 'medium' },
      alignSelf: 'center',
      justify: 'center',
      align: 'center',
      gap: 'medium',
    },
    icon: {
      background: 'light-4',
      round: true,
      height: '50px',
      width: '50px',
      align: 'center',
    }
  }

  const showIcons = () => (
    [<Github id='Github'/>, <Twitter id='Twitter'/>, <Linkedin />, <Facebook />, <Instagram />].map(icon =>
        <Anchor key={uuidv4()} icon={icon} />
    )
  )

  return (
    <Box {...props.main}>
      {showIcons()}
    </Box>
  );
}

export default Socials;