import React from 'react';
import {
  Category,
  Component,
  Variant,
  Palette,
} from '@haulmont/react-ide-toolbox';

export default () => (
  <Palette>
    <Category name="Text">
      <Component name="Hello meessage">
        <Variant>
          <span> Hello, Haulmont Create React App! </span>
        </Variant>
      </Component>
    </Category>
  </Palette>
);
