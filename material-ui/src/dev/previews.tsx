import React from 'react';
import { Previews, ComponentPreview } from '@react-buddy/ide-toolbox';
import App, {Copyright} from '../App';

export const ComponentPreviews = () => {
  return (
    <Previews>
      <ComponentPreview path="/App">
        <App />
      </ComponentPreview>
        <ComponentPreview path="/Copyright">
            <Copyright/>
        </ComponentPreview>
    </Previews>
  );
};
