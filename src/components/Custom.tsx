import { createElement } from 'react';
import type { FunctionComponent } from 'react';

export interface CustomElementProps {
  tagName: string;
  [key: string]: any;
}

const Custom: FunctionComponent<CustomElementProps> = (props) => {
  const { tagName, ...otherProps } = props;
  return createElement(tagName, otherProps);
};

export default Custom;
