import type { Document } from 'happy-dom';
import type { Component } from '..';

const Comment: Component = ({ children }, domDocument: Document) => {
  let comment: string | null = null;

  if (Array.isArray(children)) {
    const contents: string[] = [];

    for (let i = 0; i < children.length; i++) {
      const child = children[i];

      if (typeof child === 'string' || typeof child === 'number' || typeof child === 'boolean') {
        contents.push(`${child}`);
      }
    }

    comment = contents.join('');
  } else if (typeof children === 'string' || typeof children === 'number' || typeof children === 'boolean') {
    comment = children;
  }

  return comment ? domDocument.createComment(comment) : null;
};

export default Comment;
