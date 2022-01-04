import React, { createElement } from 'react';
import { replaceInternalElementsHook } from '..';
import LogicfulTemplates, { Comment, Root } from '../..';

describe('"logicful-templates-comment" tests', () => {
  it('replaces special <logicful-templates-comment> elements with HTML comments', () => {
    const inputHtml = `<html>
  <body>
    <logicful-templates-comment>The text below is a friendly greeting</logicful-templates-comment>
    <span>Hello World</span>
  </body>
</html>
`;

    const result = replaceInternalElementsHook(inputHtml);
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

describe('"logicful-templates-root" tests', () => {
  it('"hoists" special <logicful-templates-root> elements\' children', () => {
    const inputHtml = `<html>
  <body>
    <logicful-templates-root>The text below is a friendly greeting</logicful-templates-root>
    <span>Hello World</span>
  </body>
</html>
`;

    const result = replaceInternalElementsHook(inputHtml);
    expect(result).toBe(`<html>
  <body>
    The text below is a friendly greeting
    <span>Hello World</span>
  </body>
</html>
`);
  });

  it("doesn't replace text versions of the <logicful-templates-root> element", () => {
    const Element = createElement(Comment, {
      children: '<logicful-templates-root>Hello World</logicful-templates-root>',
    });

    const result = LogicfulTemplates.compileTemplate(Element);
    expect(result).toBe('<!-- &lt;logicful-templates-root&gt;Hello World&lt;/logicful-templates-root&gt; -->');
  });

  it("allows consumer to set the <Root> element's innerHTML", () => {
    const Element = createElement('html', {
      children: [
        createElement(Root, {
          dangerouslySetInnerHTML: {
            __html: '<head><meta charset="utf-8"></head>',
          },
        }),
      ],
    });

    const result = LogicfulTemplates.compileTemplate(Element);
    expect(result).toBe('<html><head><meta charset="utf-8"></head></html>');
  });
});
