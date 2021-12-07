import Custom from '../Custom';
import { domDocument } from '../../jsx-runtime';
import { IElement } from 'happy-dom';

describe('<Custom> "component"', () => {
  it('returns a <Custom> component', () => {
    const props = { children: ['hello'], tagName: 'div' };
    const result = Custom(props, domDocument);
    expect(result).toBeDefined();
    expect((result as IElement).tagName).toBe('DIV');
    expect((result as IElement).outerHTML).toBe('<div>hello</div>');
  });
});
