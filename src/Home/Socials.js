import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Anchor, Box } from 'grommet';
import { Github, Twitter, Linkedin, Instagram, Facebook } from 'grommet-icons'

function Socials({ direction, color }) {

  const props = {
    main: {
      direction: direction,
      alignSelf: 'center',
      justify: 'center',
      align: 'center',
      gap: 'medium',
    },
  }

  const showIcons = () => (
    [<Github id='Github' />, <Twitter id='Twitter' />, <Linkedin />, <Facebook />, <Instagram />].map(icon =>
      <Anchor key={uuidv4()} icon={icon} color={color} />
    )
  )

  return (
    <Box {...props.main}>
      {showIcons()}
    </Box>
  );
}

export default Socials;