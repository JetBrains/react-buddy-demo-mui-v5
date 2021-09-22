import React from 'react';
import { Previews, ComponentPreview } from '@react-buddy/ide-toolbox';
import App from '../App';
import {ConditionalComponent3, JsxTreeDemoScreen} from "../OutlineDemo";
import {FuncExprComponent} from "../PreviewDemo";

export const ComponentPreviews = () => {
  return (
    <Previews>
      <ComponentPreview path="/App">
        <App />
      </ComponentPreview>
        <ComponentPreview path="/JsxTreeDemoScreen">
            <JsxTreeDemoScreen/>
        </ComponentPreview>
        <ComponentPreview path="/ConditionalComponent3">
            <ConditionalComponent3/>
        </ComponentPreview>
        <ComponentPreview path="/FuncExprComponent">
            <FuncExprComponent title={'Title'}/>
        </ComponentPreview>
    </Previews>
  );
};
