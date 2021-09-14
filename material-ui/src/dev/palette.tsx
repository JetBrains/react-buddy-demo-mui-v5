import React from 'react';
import {
  Category,
  Component,
  Variant,
  Palette,
} from '@react-buddy/ide-toolbox';

export default () => (
  <Palette>
    <Category name="Text">
      <Component name="Hello meessage">
        <Variant>
          <span> Hello, Create React Buddy App! </span>
        </Variant>
      </Component>
    </Category>
  </Palette>
);
