/* istanbul ignore file */
import { compileTemplate, createElement } from './jsx-runtime';
import Comment from './components/Comment';
import Custom from './components/Custom';
import Fragment from './components/Fragment';

export * from './types';
export { compileTemplate };
export { createElement };
export { default as Comment } from './components/Comment';
export { default as Custom } from './components/Custom';
export { default as Fragment } from './components/Fragment';

export default {
  Comment,
  Custom,
  Fragment,
  compileTemplate,
  createElement,
};
