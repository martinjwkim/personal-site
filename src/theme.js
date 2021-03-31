import { grommet } from 'grommet';
import { deepMerge } from "grommet/utils"

const theme = deepMerge(grommet, {
  global: {
    font: {
    },
    breakpoints: {
      xsmall: {
        value: 480,
      },
    }
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
  }
});

export default theme;