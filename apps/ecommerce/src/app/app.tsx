// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createTheme, ThemeProvider } from '@mui/material';
import Product from '../pages/product/product';
import styles from './app.module.css';

export function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Kumbh Sans, sans-serif',
    },
    components: {
      MuiListItemText: {
        styleOverrides: {
          primary: {
            fontWeight: 700,
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Product></Product>
    </ThemeProvider>
  );
}

export default App;
