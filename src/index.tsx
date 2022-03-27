import './index.css';
import Routers from 'routers';
import { render } from 'react-dom';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from 'services/redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const queryClient = new QueryClient();
const theme: any = createTheme({
  typography: { button: { textTransform: 'none' } },
});

render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routers />
          </BrowserRouter>
          <CssBaseline />
          <ToastContainer />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
