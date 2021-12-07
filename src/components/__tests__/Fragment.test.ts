import { Children } from '../../types';
import Fragment from '../Fragment';

describe('<Fragment> "component"', () => {
  it('returns its children', () => {
    const props = { children: ['Hello', 'World'] };
    const result = Fragment(props);
    expect(Array.isArray(result)).toBe(true);
    expect((result as Children).length).toBe(2);
    expect((result as Children)[0]).toBe('Hello');
    expect((result as Children)[1]).toBe('World');
  });

  it('returns null if children is not set', () => {
    const props = {};
    const result = Fragment(props as any);
    expect(result).toBe(null);
  });
});
