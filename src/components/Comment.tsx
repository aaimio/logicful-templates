import { createElement } from 'react';
import type { FunctionComponent } from 'react';
import LogicfulTemplates from '..';

interface CommentProps {
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
    const tagName = LogicfulTemplates._getIndexedInternalTagName('comment');

    LogicfulTemplates.registerHook('after', (html) => {
      return html
        .replace(new RegExp(`<\s*?${tagName}\s*?>`), '<!-- ')
        .replace(new RegExp(`<\s*?/${tagName}\s*?>`), ' -->');
    });

    // Use createElement to render the value so its value is escaped.
    return createElement(tagName, { children: value });
  }

  return null;
};

export default Comment;
