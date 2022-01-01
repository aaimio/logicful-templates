import { createElement } from 'react';
import LogicfulTemplates, { Comment } from '../..';

describe('<Comment> "component"', () => {
  it('returns a <Comment> component', () => {
    const props1 = { children: 'Hello World' };
    const CommentElement1 = createElement(Comment, props1);
    const result1 = LogicfulTemplates.compileTemplate(CommentElement1);
    expect(result1).toBe('<!-- Hello World -->');

    const props2 = { children: true };
    const CommentElement2 = createElement(Comment, props2);
    const result2 = LogicfulTemplates.compileTemplate(CommentElement2);
    expect(result2).toBe('<!-- true -->');

    const props3 = { children: 1337 };
    const CommentElement3 = createElement(Comment, props3);
    const result3 = LogicfulTemplates.compileTemplate(CommentElement3);
    expect(result3).toBe('<!-- 1337 -->');

    const props4 = { children: () => createElement('div') };
    const CommentElement4 = createElement(Comment, props4 as any);
    const result4 = LogicfulTemplates.compileTemplate(CommentElement4);
    expect(result4).toBe('');
  });

  it('does not replace "<logicful-templates-comment>" if they\'re not elements', () => {
    const props1 = { children: '<logicful-templates-comment>Oops</logicful-templates-comment>' };
    const CommentElement1 = createElement(Comment, props1);
    const result1 = LogicfulTemplates.compileTemplate(CommentElement1);
    expect(result1).toBe('<!-- &lt;logicful-templates-comment&gt;Oops&lt;/logicful-templates-comment&gt; -->');
  });
});
