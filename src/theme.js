import { grommet } from 'grommet';
import { deepMerge } from "grommet/utils"

const theme = deepMerge(grommet, {
  global: {
    font: {
    },
    breakpoints: {
    },
    colors:
    {
      brand: '#7D4CDB'
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
        "light": "#7D4CDB"
      }
    },
    toggle: {
      color: {
        "light": "#7D4CDB"
      }
    },
  },
});

export default theme;