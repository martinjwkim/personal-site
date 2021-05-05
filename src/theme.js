import { grommet } from 'grommet';
import { deepMerge } from "grommet/utils"

const theme = deepMerge(grommet, {
  global: {
    font: {
      family: "Playfair Display,serif"
    },
    breakpoints: {
    },
    colors:
    {
      brand: '#5CC4C0'
    }
  },
  paragraph: {
    font: {
      family: 'Montserrat,sans-serif'
    }
  },
  button: {
    extend: {
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
  },
  collapsible: {
    minSpeed: 500,
  },
  checkBox: {
    border: {
      color: {
        "light": "#5CC4C0"
      }
    },
    toggle: {
      color: {
        "light": "#5CC4C0"
      }
    },
  },
});

export default theme;