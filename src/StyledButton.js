import React from 'react';
import { Button, ThemeContext } from 'grommet';

const StyledButton = (props) => {

  const style = {
    text: { medium: { size: '14px' } },
    global: { 
      colors: { text: '#5CC4C0' },
      hover: {}
    },
    button: {
      size: {
        small: {
          border: {
            radius: '0px'
          }
        },
        medium: {
          border: {
            radius: '0px'
          }
        },
      },
    }
  }

  return (
    <ThemeContext.Extend value={style}>
        <Button {...props} />
    </ThemeContext.Extend>
  )
}

export default StyledButton;