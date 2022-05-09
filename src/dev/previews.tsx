import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import App from '../App';
import {ProjectPalette} from './palette'

const ComponentPreviews = () => {
  return (
    <Previews palette={<ProjectPalette/>}>
      <ComponentPreview path="/App">
        <App />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews
