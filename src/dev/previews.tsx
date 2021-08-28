import React from 'react';
import { Previews, ComponentPreview } from '@haulmont/react-ide-toolbox';
import App from '../App';

export const ComponentPreviews = () => {
  return (
    <Previews>
      <ComponentPreview path="/App">
        <App />
      </ComponentPreview>
    </Previews>
  );
};
