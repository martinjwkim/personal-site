import { grommet } from 'grommet';
import { deepMerge } from "grommet/utils"

const theme = deepMerge(grommet, {
  global: {
    font: {
    },
    breakpoints: {
      medium: {value: 100000},
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
  },
});

export default theme;