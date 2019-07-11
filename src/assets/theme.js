import { red } from '@material-ui/core/colors';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
    typography: {
      fontFamily: 'Roboto',
      h1: {
        fontSize: '34px',
        textDecoration: 'none solid rgb(0, 0, 0)',
      },
      h2: {
        fontSize: '25px',
        textDecoration: 'none solid rgb(0, 0, 0)',
        lineHeight: 1.36,
      }
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
  });
  
  theme = responsiveFontSizes(theme);

  export default theme;