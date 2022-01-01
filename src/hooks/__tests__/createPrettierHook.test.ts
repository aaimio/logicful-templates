import { createPrettierHook } from '..';

describe('createPrettierHook tests', () => {
  it('creates a prettier hook function', () => {
    const prettierHookFn = createPrettierHook({});
    expect(prettierHookFn).toBeInstanceOf(Function);
  });

  it('makes HTML output look prettier', () => {
    const prettierHookFn = createPrettierHook({ parser: 'html' });
    const inputHtml = '<html><body><div>Hello World</div></body></html>';
    const result = prettierHookFn(inputHtml);
    expect(result).toBe(`<html>
  <body>
    <div>Hello World</div>
  </body>
</html>
`);
  });
});
