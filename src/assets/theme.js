import { red } from '@material-ui/core/colors';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
    palette: {
      primary: {
        main: '#0080C9',
      },
      secondary: {
        main: '#FFFFFF',
      },
      error: {
        main: red.A400,
      },
      background: {
        default: '#F6F6F6',
      },
    },
  });
  
  theme = responsiveFontSizes(theme);

  export default theme;