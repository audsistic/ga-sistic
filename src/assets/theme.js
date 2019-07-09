import { red } from '@material-ui/core/colors';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
    typography: {
      fontFamily: 'Roboto',
    },
    palette: {
      primary: {
        main: '#0080C9',
        dark: '#000000',
        light: '#8C8C8C',
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
    MuiInputLabel: {
      root: {
        fontSize: '18px',
        color: '#777777',
        paddingTop: '10px',
        paddingLeft: '88.17px',
      },
      focused: {
        color: '#206B96',
        padding: '0px',
      }
    }
  });
  
  theme = responsiveFontSizes(theme);

  export default theme;