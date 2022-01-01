import { renderToStaticMarkup } from 'react-dom/server';
import { addDocTypeHook, createPrettierHook, replaceCommentsHook } from './hooks';

import type { ReactElement } from 'react';
import type { Options as PrettierOptions } from 'prettier';

type HookTiming = 'before' | 'after';
type BeforeHook = () => void;
type AfterHook = (html: string) => string;

class LogicfulTemplates {
  private currentPrettierHook: AfterHook | null = null;
  private beforeCompileTemplateCallbacks: BeforeHook[] = [];
  private afterCompileTemplateCallbacks: AfterHook[] = [replaceCommentsHook];

  private executeHooks(timing: Extract<HookTiming, 'before'>): BeforeHook;
  private executeHooks(timing: Extract<HookTiming, 'after'>): AfterHook;
  private executeHooks(timing: HookTiming): any {
    switch (timing) {
      case 'before': {
        // Before hooks are functions executed before compilation, they don't modify HTML.
        return () => {
          for (let i = 0; i < this.beforeCompileTemplateCallbacks.length; i++) {
            const targetHook = this.beforeCompileTemplateCallbacks[i];

            if (typeof targetHook === 'function') {
              targetHook();
            }
          }
        };
      }
      case 'after': {
        // After hooks are functions executed after compilation that transform the HTML.
        return (html: string) => {
          let targetHtml = html;

          for (let i = 0; i < this.afterCompileTemplateCallbacks.length; i++) {
            const hook = this.afterCompileTemplateCallbacks[i];

            if (typeof hook === 'function') {
              targetHtml = hook(targetHtml);
            }
          }

          return targetHtml;
        };
      }
      default:
        break;
    }
  }

  /**
   * Registers a callback that is executed before or after compiling a template
   * @param timing When to execute the callback, either `before` or `after`:
   * - `before` callbacks are void functions executed before compilation.
   * - `after` callbacks are function that receive a HTML string and should
   *   return a transformed HTML string.
   * @param callback The callback to execute before or after compiling a
   * template
   */
  public registerHook(timing: Extract<HookTiming, 'before'>, callback: BeforeHook): void;
  public registerHook(timing: Extract<HookTiming, 'after'>, callback: AfterHook): void;
  public registerHook(timing: HookTiming, callback: (...args: any) => any) {
    switch (timing) {
      case 'before': {
        if (this.beforeCompileTemplateCallbacks.findIndex((cb) => cb === callback) === -1) {
          this.beforeCompileTemplateCallbacks.push(callback);
        }
        break;
      }
      case 'after': {
        if (this.afterCompileTemplateCallbacks.findIndex((cb) => cb === callback) === -1) {
          this.afterCompileTemplateCallbacks.push(callback);
        }
        break;
      }
      default:
        break;
    }
  }

  /**
   * Clears all hooks (except internal ones) from the template callback arrays
   */
  public clearAllHooks() {
    this.beforeCompileTemplateCallbacks.length = 0;
    this.afterCompileTemplateCallbacks.length = 0;
    this.afterCompileTemplateCallbacks.push(replaceCommentsHook);
  }

  public unregisterHook(timing: Extract<HookTiming, 'before'>, callback: BeforeHook): void;
  public unregisterHook(timing: Extract<HookTiming, 'after'>, callback: AfterHook): void;
  public unregisterHook(timing: HookTiming, callback: Function) {
    let targetCallbacks: typeof this.beforeCompileTemplateCallbacks | typeof this.afterCompileTemplateCallbacks;

    switch (timing) {
      case 'before': {
        targetCallbacks = this.beforeCompileTemplateCallbacks;
        break;
      }
      case 'after': {
        targetCallbacks = this.afterCompileTemplateCallbacks;
        break;
      }
      default: {
        targetCallbacks = [];
        break;
      }
    }

    const idx = targetCallbacks.findIndex((cb) => cb === callback);

    if (idx > -1) {
      targetCallbacks.splice(idx, 1);
    }
  }

  /**
   * Compiles a template to HTML
   * @param element The component to compile, e.g. `<Template />`
   * @param optOptions An object of compile options
   * @returns The compiled HTML
   */
  public compileTemplate(
    element: ReactElement | (() => ReactElement),
    optOptions: {
      addDocType?: boolean;
      pretty?: boolean;
      prettyOptions?: PrettierOptions;
    } = {}
  ): string {
    const options: Parameters<typeof this.compileTemplate>[1] = { addDocType: false, pretty: false, ...optOptions };

    // Unregister built-in hooks for each call to `compileTemplate` to ensure
    // they're not ran accidentally if a user first opted in to them, then opted
    // out to them.
    this.unregisterHook('after', addDocTypeHook);

    if (typeof this.currentPrettierHook === 'function') {
      this.unregisterHook('after', this.currentPrettierHook);
    }

    // Register built-in hooks if user opted into these through `optOptions`
    if (options.addDocType) {
      this.registerHook('after', addDocTypeHook);
    }

    if (options.pretty) {
      this.currentPrettierHook = createPrettierHook(optOptions.prettyOptions || {});
      this.registerHook('after', this.currentPrettierHook);
    }

    this.executeHooks('before')();

    const targetElement = typeof element === 'function' ? element() : element;
    let html: string = '';

    html = renderToStaticMarkup(targetElement);
    html = this.executeHooks('after')(html);

    return html;
  }
}

export default new LogicfulTemplates();
