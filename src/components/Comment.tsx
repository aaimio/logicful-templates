import type { Document, IComment } from 'happy-dom';
import type { Component } from '..';

const Comment: Component = ({ children }, domDocument: Document): IComment | null => {
  if (!children) {
    return null;
  }

  const contents: string[] = [];

  for (let i = 0; i < children.length; i++) {
    const child = children[i];

    if (typeof child === 'string' || typeof child === 'number') {
      contents.push(`${child}`);
    } else if (typeof child === 'boolean') {
      contents.push(new Boolean(child).toString());
    }
  }

  if (contents.length > 0) {
    return domDocument.createComment(contents.join(''));
  }

  return null;
};

export default Comment;
