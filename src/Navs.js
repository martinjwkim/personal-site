import React from 'react';
import { Anchor, Box, CheckBox } from 'grommet';

const Navs = ({ darkMode, setDarkMode }) => {

  const props = {
    main: {
      align: "center",
      gap: 'large',
      direction: 'row',
    },
    checkBox: {
      checked: darkMode,
      toggle: true,
      onChange: ()=>setDarkMode(!darkMode),
    }
  }

  return (
    <Box {...props.main}>
      <Anchor label="Home" onClick={() => {}} />
      <Anchor label="About" onClick={() => {}} />
      <Anchor label="Portfolio" onClick={() => {}} />
      <Anchor label="Contact" onClick={() => {}} />
      <CheckBox {...props.checkBox}/>
    </Box>
  )
}

export default Navs;