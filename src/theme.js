import { deepMerge } from "grommet/utils"
import { grommet } from 'grommet';

const theme = deepMerge(grommet, {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
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