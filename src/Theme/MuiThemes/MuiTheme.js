import { createTheme, adaptV4Theme } from '@mui/material';

import { SummerSchool } from '../MuiVariables';
import theme from '../theme';
import typography from '../typography';

const MuiTheme = createTheme(adaptV4Theme({
  ...theme(SummerSchool),
  typography
})); 

export default MuiTheme;
