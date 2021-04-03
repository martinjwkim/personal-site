import React from 'react';
import { Anchor, Box } from 'grommet';
import { Github, Twitter, Instagram, Facebook} from 'grommet-icons'

function Socials() {

  const props = {
    main: {
      direction: 'row',
      pad: {top: 'medium'}
    },
  }

  const showIcons = () => (
    [<Github />, <Twitter />, <Instagram />, <Facebook />].map(icon => <Anchor icon={icon} />)
  )

  return (
    <Box {...props.main}>
      {showIcons()}
    </Box>
  );
}

export default Socials;