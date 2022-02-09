import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {useInitial} from "./dev/hook";

const ComponentPreviews = React.lazy(() => import("./dev/previews"))

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
      <DevSupport
          ComponentPreviews={ComponentPreviews}
          useInitialHook={useInitial}
      >
        <App />
      </DevSupport>
  </ThemeProvider>,
  document.querySelector('#root'),
);
