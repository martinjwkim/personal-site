import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Anchor, Box } from 'grommet';
import { Github, Twitter, Linkedin, Instagram, Facebook } from 'grommet-icons'

function Socials() {

  const props = {
    main: {
      direction: 'row',
      pad: { top: 'medium' }
    },
  }

  const showIcons = () => (
    [<Github />, <Twitter />, <Linkedin />, <Facebook />, <Instagram />].map(icon => <Anchor key={uuidv4()} icon={icon} />)
  )

  return (
    <Box {...props.main}>
      {showIcons()}
    </Box>
  );
}

export default Socials;