import React from 'react';
import { Box } from 'grommet';
import { Github, Twitter, Linkedin, Instagram, Facebook } from 'grommet-icons'
import { v4 as uuidv4 } from 'uuid';
import Icon from './Icon'

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
      <Icon icon={icon} color={color} href={url} key={uuidv4()}/>
    )
  )

  return (
    <Box {...props.main}>
      {showIcons()}
    </Box>
  );
}

export default Socials;