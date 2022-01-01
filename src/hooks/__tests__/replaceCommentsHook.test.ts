import { createElement } from 'react';
import { replaceCommentsHook } from '..';
import LogicfulTemplates, { Comment } from '../..';

describe('replaceCommentsHook tests', () => {
  it('replaces special <logicful-templates-comment> elements with HTML comments', () => {
    const inputHtml = `<html>
  <body>
    <logicful-templates-comment>The text below is a friendly greeting</logicful-templates-comment>
    <span>Hello World</span>
  </body>
</html>
`;

    const result = replaceCommentsHook(inputHtml);
    expect(result).toBe(`<html>
  <body>
    <!-- The text below is a friendly greeting -->
    <span>Hello World</span>
  </body>
</html>
`);
  });

  it("doesn't replace text versions of the <logicful-templates-comment> element", () => {
    const Element = createElement(Comment, {
      children: '<logicful-templates-comment>Hello World</logicful-templates-comment>',
    });

    const result = LogicfulTemplates.compileTemplate(Element);
    expect(result).toBe('<!-- &lt;logicful-templates-comment&gt;Hello World&lt;/logicful-templates-comment&gt; -->');
  });
});
