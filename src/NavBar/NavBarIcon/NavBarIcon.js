import React from 'react';
import { Box } from 'grommet';
import OpenIcon from './OpenIcon'
import OpenToClose from './OpenToClose'
import CloseToOpen from './CloseToOpen';
import './OpenIcon.css'
import './OpenToClose.css'
import './CloseIcon.css'
import './CloseToOpen.css'

function NavBarIcon({ openNav, setOpenNav, iconType, setIconType }) {

  const handleClick = () => {
    setOpenNav(open => !open)
    openNav ? setIconType('close-to-open') : setIconType('open-to-close');
  }

  const showIcon = () => {
    if (iconType === 'open') return <OpenIcon />;
    if (iconType === 'open-to-close') return <OpenToClose />;
    if (iconType === 'close-to-open') return <CloseToOpen />;
  }

  const props = {
    main: {
      margin: 'none',
      width: '52px',
      height: '52px',
      justify: 'center',
      align: 'center',
      focusIndicator: false,
      className: `icon`,
      onClick: () => handleClick(),
    },
  }

  return (
    <Box {...props.main}>
      {showIcon()}
    </Box>
  );
}

export default NavBarIcon;

