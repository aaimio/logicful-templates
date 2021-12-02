import LogicfulTemplates from '..';
import type { Component } from '..';

export interface CustomElementProps {
  tagName: string;
  [key: string]: string | number | boolean;
}

const Custom: Component<CustomElementProps> = (props) => {
  const targetProps = { ...props, tagName: undefined };
  return LogicfulTemplates.createElement(props.tagName, targetProps);
};

export default Custom;
