import { createElement } from 'react';
import type { FunctionComponent } from 'react';

export interface CommentProps {
  children: string | number | boolean;
}

const Comment: FunctionComponent<CommentProps> = ({ children }) => {
  const value = (() => {
    switch (typeof children) {
      case 'string':
        return children;
      case 'number':
        return `${children}`;
      case 'boolean':
        return new Boolean(children).toString();
      default:
        return null;
    }
  })();

  if (value) {
    return createElement('logicful-templates-comment', { children: value });
  }

  return null;
};

export default Comment;
