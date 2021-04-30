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
    [{
      icon: <Github id='Github' />,
      url: 'https://github.com/martinjwkim'
    },{
      icon: <Twitter id='Twitter' />,
      url: 'https://twitter.com/martinjwkim'
    },{
      icon: <Linkedin />,
      url: 'https://www.linkedin.com/in/martinjwkim/'
    },{
      icon: <Facebook />,
      url: 'https://www.facebook.com/martinhadadreem/'
    },{
      icon: <Instagram />,
      url: 'https://www.instagram.com/martinhadadreem/'
    }].map(({ icon, url }) =>
  <Anchor key={uuidv4()} icon={icon} color={color} href={url} />
    )
  )

  return (
    <Box {...props.main}>
      {showIcons()}
    </Box>
  );
}

export default Socials;