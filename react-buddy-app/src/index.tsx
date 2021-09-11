import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useInitial } from './dev/hook';
import { ComponentPreviews } from './dev/previews';
import { DevSupport } from '@react-buddy/ide-toolbox';

ReactDOM.render(
  <React.StrictMode>
    <DevSupport
      ComponentPreviews={<ComponentPreviews />}
      useInitialHook={useInitial}
    >
      <App />
    </DevSupport>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
