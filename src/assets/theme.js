import { red } from '@material-ui/core/colors';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
    typography: {
      fontFamily: "OpenSans",
      h1: {
        fontSize: '34px',
        textDecoration: 'none solid rgb(0, 0, 0)',
      },
      h2: {
        fontSize: '25px',
        textDecoration: 'none solid rgb(0, 0, 0)',
        lineHeight: 1.36,
      },
      h4: {
        fontSize: '16px',
        textDecoration: 'none solid rgb(141, 141, 141)',
        color: '#8D8D8D',
        lineHeight: 1.375,
      },
      overline: {
        fontSize: '14px',
        textDecoration: 'none solid rgb(0, 0, 0)',
        fontFamily: "OpenSans-Light",
        textTransform: "none",
        lineHeight: "normal",
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
    overrides: {
      MuiButton: {
        root: {
          textTransform: 'none',
        }
      },
      MuiTab: {
        root: {
          textTransform: 'none',
        }
      }
    }
  });
  
  theme = responsiveFontSizes(theme);

  export default theme;