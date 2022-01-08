import { createElement } from 'react';
import LogicfulTemplates from '..';

describe('Core tests', () => {
  it('registers a `before` hook', () => {
    const beforeRegistering = LogicfulTemplates['beforeHooks'];
    expect(beforeRegistering.length).toBe(0);

    const numHooksToRegister = Math.floor(Math.random() * 500);
    for (let i = 0; i < numHooksToRegister; i++) LogicfulTemplates.registerHook('before', () => {}, 10);
    expect(beforeRegistering.length).toBe(numHooksToRegister);
  });

  it('registers an `after` hook', () => {
    const afterRegistering = LogicfulTemplates['afterHooks'];
    expect(afterRegistering.length).toBe(0);

    const numHooksToRegister = Math.floor(Math.random() * 500);
    for (let i = 0; i < numHooksToRegister; i++) LogicfulTemplates.registerHook('after', (input) => input);
    expect(afterRegistering.length).toBe(numHooksToRegister);
  });

  it('does not register unknown timing hooks', () => {
    LogicfulTemplates.clearAllHooks();
    LogicfulTemplates.registerHook('nonExistentTiming' as any, () => {});
    expect(LogicfulTemplates['beforeHooks'].length).toBe(0);
    expect(LogicfulTemplates['afterHooks'].length).toBe(0);
  });

  it('unregisters a `before` hook after execution', () => {
    const someHook = jest.fn();

    LogicfulTemplates.registerHook('before', someHook);
    expect(LogicfulTemplates['beforeHooks'].length).toBe(1);
    expect(LogicfulTemplates['beforeHooks'][0].callback).toBe(someHook);

    LogicfulTemplates['executeHooks']('before');
    expect(LogicfulTemplates['beforeHooks'].length).toBe(0);
  });

  it('clears all hooks', () => {
    LogicfulTemplates.clearAllHooks();
    LogicfulTemplates.registerHook('before', () => {});
    LogicfulTemplates.registerHook('before', () => {});
    LogicfulTemplates.registerHook('after', (html) => html);
    LogicfulTemplates.registerHook('after', (html) => html);
    LogicfulTemplates.registerHook('after', (html) => html);
    expect(LogicfulTemplates['beforeHooks'].length).toBe(2);
    expect(LogicfulTemplates['afterHooks'].length).toBe(3);

    LogicfulTemplates.clearAllHooks();
    expect(LogicfulTemplates['beforeHooks'].length).toBe(0);
    expect(LogicfulTemplates['afterHooks'].length).toBe(0);
  });

  it('executes `before` hooks', () => {
    LogicfulTemplates.clearAllHooks();
    const mockHook1 = jest.fn();
    LogicfulTemplates.registerHook('before', mockHook1);
    LogicfulTemplates['executeHooks']('before');
    expect(mockHook1).toHaveBeenCalled();

    LogicfulTemplates.clearAllHooks();
    const mockHook2 = 'Oops, not a function.';
    LogicfulTemplates.registerHook('before', mockHook2 as any);
    LogicfulTemplates['executeHooks']('before');
    // Expect nothing here.
  });

  it('executes `after` hooks', () => {
    LogicfulTemplates.clearAllHooks();
    const mockHook1 = jest.fn((html: string) => `<!-- Hello World -->${html}`);
    LogicfulTemplates.registerHook('after', mockHook1);
    const result1 = LogicfulTemplates['executeHooks']('after', '<html></html>');
    expect(mockHook1).toHaveBeenCalled();
    expect(result1).toBe('<!-- Hello World --><html></html>');

    LogicfulTemplates.clearAllHooks();
    const mockHook2 = 'Oops, not a function.';
    LogicfulTemplates.registerHook('after', mockHook2 as any);
    const result2 = LogicfulTemplates['executeHooks']('after', '<html></html>');
    expect(result2).toBe('<html></html>');
  });

  it('does not execute unknown timing hooks', () => {
    const result = LogicfulTemplates['executeHooks']('nonExistentTiming' as any);
    expect(result).toBeUndefined();
  });

  it('compiles a template', () => {
    const Template1 = () =>
      createElement('div', {
        children: [createElement('div', { children: [createElement('span', { children: ['Hello World'] })] })],
      });
    const result1 = LogicfulTemplates.compileTemplate(createElement(Template1), { addDocType: true });
    expect(result1).toBe('<!doctype html><div><div><span>Hello World</span></div></div>');

    const Template2 = () =>
      createElement('div', {
        children: [
          createElement('div', { children: [createElement('span', { children: ['Hello World'], className: 'text' })] }),
        ],
      });
    const result2 = LogicfulTemplates.compileTemplate(createElement(Template2));
    expect(result2).toBe('<div><div><span class="text">Hello World</span></div></div>');

    const Template3 = () =>
      createElement('div', {
        children: [
          createElement('div', { children: [createElement('span', { children: ['Hello World'], className: 'text' })] }),
        ],
      });
    const result3 = LogicfulTemplates.compileTemplate(() => createElement(Template3), {
      addDocType: true,
      pretty: true,
    });
    expect(result3).toBe(`<!DOCTYPE html>
<div>
  <div><span class="text">Hello World</span></div>
</div>
`);

    const Template4 = () =>
      createElement('div', {
        children: [
          createElement('div', { children: [createElement('span', { children: ['Hello World'], className: 'text' })] }),
        ],
      });
    const result4 = LogicfulTemplates.compileTemplate(() => createElement(Template4), {
      addDocType: true,
      pretty: true,
      prettyOptions: { tabWidth: 4 },
    });
    expect(result4).toBe(`<!DOCTYPE html>
<div>
    <div><span class="text">Hello World</span></div>
</div>
`);
  });

  it('compiles a template without hooks', () => {
    const Template1 = () =>
      createElement('div', {
        children: [createElement('div', { children: [createElement('span', { children: ['Hello World'] })] })],
      });
    const result1 = LogicfulTemplates.compileTemplate(createElement(Template1));
    expect(result1).toBe('<div><div><span>Hello World</span></div></div>');

    const Template2 = () =>
      createElement('div', {
        children: [
          createElement('div', { children: [createElement('span', { children: ['Hello World'], className: 'text' })] }),
        ],
      });
    const result2 = LogicfulTemplates.compileTemplate(createElement(Template2));
    expect(result2).toBe('<div><div><span class="text">Hello World</span></div></div>');

    const Template3 = () =>
      createElement('div', {
        children: [
          createElement('div', { children: [createElement('span', { children: ['Hello World'], className: 'text' })] }),
        ],
      });
    const result3 = LogicfulTemplates.compileTemplate(() => createElement(Template3));
    expect(result3).toBe(`<div><div><span class="text">Hello World</span></div></div>`);

    const Template4 = () =>
      createElement('div', {
        children: [
          createElement('div', { children: [createElement('span', { children: ['Hello World'], className: 'text' })] }),
        ],
      });
    const result4 = LogicfulTemplates.compileTemplate(() => createElement(Template4));
    expect(result4).toBe(`<div><div><span class="text">Hello World</span></div></div>`);
  });
});
