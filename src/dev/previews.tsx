import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import App from '../App';
import PaletteTree from './palette';

export const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/App">
        <App />
      </ComponentPreview>
    </Previews>
  );
};
