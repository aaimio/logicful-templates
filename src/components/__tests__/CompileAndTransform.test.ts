import { createElement } from 'react';
import LogicfulTemplates, { CompileAndTransform } from '../..';

describe('CompileAndTransform tests', () => {
  it('compiles its children and applies the transform function', () => {
    const Element = createElement(
      CompileAndTransform,
      {
        transform: (html) => {
          return html.toUpperCase();
        },
      },
      [createElement('div', { key: 0, children: createElement('span', { children: 'Hello World' }) })]
    );

    const result = LogicfulTemplates.compileTemplate(Element);
    expect(result).toBe('<DIV><SPAN>HELLO WORLD</SPAN></DIV>');
  });
});
