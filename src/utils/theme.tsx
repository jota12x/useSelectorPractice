import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0041c0',
      light: '#5B87E4',
    },
    secondary: {
      main: '#19857b',
    },
    text: {
      primary: '#343434',
      secondary: '#707070',
      disabled: '#AFAFAF',
    },
    info: {
      main: '#EFF4FF',
      dark: '#E3E3E3',
      light: '#FFF',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: ['NotoSansJpRegular', 'Roboto'].join(','),
    body1: {
      fontSize: '1rem',
      wordBreak: 'break-word',
      whiteSpace: 'pre-line',
    },
    subtitle1: {
      fontSize: '0.875rem',
      wordBreak: 'break-word',
      whiteSpace: 'pre-line',
    },
    subtitle2: {
      fontSize: 12,
      wordBreak: 'break-word',
      whiteSpace: 'pre-line',
    },
    h4: {
      fontSize: '1.75rem',
      fontFamily: 'NotoSansJpBold',
      wordBreak: 'break-word',
      whiteSpace: 'pre-line',
    },
    h5: {
      fontSize: '1.25rem',
      fontFamily: 'NotoSansJpBold',
      wordBreak: 'break-word',
      whiteSpace: 'pre-line',
    },
    h6: {
      fontSize: '1rem',
      fontFamily: 'NotoSansJpBold',
      wordBreak: 'break-word',
      whiteSpace: 'pre-line',
    },
  },
});

export default theme;
