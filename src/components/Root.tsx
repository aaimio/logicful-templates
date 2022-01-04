import { createElement } from 'react';
import type { FunctionComponent } from 'react';

export interface RootProps {
  dangerouslySetInnerHTML?: {
    __html: string;
  };
}

const Root: FunctionComponent<RootProps> = ({ children, dangerouslySetInnerHTML }) => {
  return createElement('logicful-templates-root', { children, dangerouslySetInnerHTML });
};

export default Root;
