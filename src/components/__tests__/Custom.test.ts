import { createElement } from 'react';
import LogicfulTemplates, { Custom } from '../..';

describe('<Custom> "component"', () => {
  it('returns a <Custom> component', () => {
    const props1 = { children: ['hello'], tagName: 'custom-element' };
    const CustomElement1 = createElement(Custom, props1);
    const result1 = LogicfulTemplates.compileTemplate(CustomElement1);
    expect(result1).toBe('<custom-element>hello</custom-element>');
  });
});
