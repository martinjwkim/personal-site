import React from 'react';
import { Box, Layer, ThemeContext } from 'grommet';


const Background = () => {

  const props = {
    layer: {
      modal: false,
      responsive: false,
      position: 'top',
      animate: false,
      animation: false,
    },
    main: {
      background: {
        image: 'url(/generic-background.png)',
        size: 'cover',
        position: 'top',
      },
      height: {min: 'large'},
      width: '100vw',
    },
    theme: {
      value: {
        layer: {
          border: {
            radius: '0px',
          },
          zIndex: -1,
        }
      }
    }
  }

  return (
    <ThemeContext.Extend {...props.theme}>
      <Layer {...props.layer}>
        <Box {...props.main}></Box>
      </Layer>
    </ThemeContext.Extend>
  )
}

export default Background;