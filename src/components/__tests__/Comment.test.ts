import { IComment } from 'happy-dom';
import { domDocument } from '../../jsx-runtime';
import Comment from '../Comment';

describe('<Comment> "component"', () => {
  it('returns a <Comment> component', () => {
    const props = { children: ['hello', 1, false, true] };
    const result = Comment(props, domDocument);
    expect(result).toBeDefined();
    expect((result as IComment).nodeType).toBe(8 /* COMMENT_NODE */);
    expect((result as IComment).nodeValue).toBe('hello1falsetrue');
  });

  it('returns null if children is empty', () => {
    const props = { children: [] };
    const result = Comment(props, domDocument);
    expect(result).toBeNull();
  });
});
