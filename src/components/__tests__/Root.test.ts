import { createElement } from 'react';
import LogicfulTemplates, { Root } from '../..';

describe('<Root> component tests', () => {
  it('returns a <Custom> component', () => {
    const props1 = { dangerouslySetInnerHTML: { __html: '<html></html>' } };
    const CustomElement1 = createElement(Root, props1);
    const result1 = LogicfulTemplates.compileTemplate(CustomElement1);
    expect(result1).toBe('<html></html>');
  });
});
