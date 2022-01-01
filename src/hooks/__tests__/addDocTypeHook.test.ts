import { addDocTypeHook } from '..';

describe('addDocType hook tests', () => {
  it('adds a doctype to an HTML string', () => {
    const startHtml = `<html><body>Hello World</body></html>`;
    const result = addDocTypeHook(startHtml);
    expect(result).toBe('<!doctype html><html><body>Hello World</body></html>');
  });
});
