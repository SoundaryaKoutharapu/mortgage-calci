import { createTheme } from '@mui/material/styles';

 export const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  text:{
    secondary: 'red'
  },

  typography: {
    h5:
    {
      letterSpacing:'5px', 
      fontFamily:'roboto'
    }
  }
 
});
