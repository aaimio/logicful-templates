import { renderToStaticMarkup } from 'react-dom/server';
import { addDocTypeHook, createPrettierHook } from './hooks';
import { ReactElement } from 'react';
import type { Options as PrettierOptions } from 'prettier';

type HookTiming = 'before' | 'after';
type TransformHTMLFunction = (html: string) => string;
type VoidFunction = () => void;
type Hook<T extends VoidFunction | TransformHTMLFunction> = {
  priority: true | number;
  callback: T;
  dispose: VoidFunction;
};

class LogicfulTemplates {
  private beforeHooks: Hook<VoidFunction>[] = [];
  private afterHooks: Hook<TransformHTMLFunction>[] = [];
  private renderIdx = 0;

  /**
   * Creates and returns a special tag name /w a render index. These tag names
   * are used to "render" placeholder elements that are eventually replaced with
   * their expected ones.
   * @returns A render index
   */
  public _getIndexedInternalTagName(prefix: string) {
    return `lt-${prefix}-${this.renderIdx++}`;
  }

  /**
   * Returns a function that can be called to execute compilation hooks
   * @param timing Which hooks to execute, either `before` or `after`
   */
  private executeHooks(timing: Extract<HookTiming, 'before'>): void;
  private executeHooks(timing: Extract<HookTiming, 'after'>, html: string): string;
  private executeHooks(timing: HookTiming, html?: any): any {
    // We keep looping over beforeHooks + afterHooks arrays as there may be nested
    // components registering their own hooks after the initial call has already been
    // executed. For example, two nested <Magic> components having functions as children.

    if (timing === 'before') {
      // Before hooks are functions executed before compilation that don't transform HTML
      while (this.beforeHooks.length) {
        this.beforeHooks.forEach((hook) => {
          hook.dispose();

          if (typeof hook.callback === 'function') {
            hook.callback();
          }
        });
      }
    } else if (timing === 'after') {
      let transformedHTML = html;

      // After hooks are functions executed after compilation that transform HTML
      while (this.afterHooks.length) {
        this.afterHooks.forEach((hook) => {
          hook.dispose();

          if (typeof hook.callback === 'function') {
            transformedHTML = hook.callback(transformedHTML);
          }
        });
      }

      return transformedHTML;
    }
  }

  /**
   * Registers a callback that is executed before or after compiling a template
   * @param timing When to execute the callback, either `before` or `after`:
   *   - `before` callbacks are executed before compilation.
   *   - `after` callbacks receive a HTML string and return transformed HTML
   * @param callback callback to execute before or after compiling a template
   * @returns A disposer function that can be called to dispose the hook
   */
  public registerHook(timing: Extract<HookTiming, 'before'>, callback: VoidFunction, priority?: number): void;
  public registerHook(timing: Extract<HookTiming, 'after'>, callback: TransformHTMLFunction, priority?: number): void;
  public registerHook(timing: HookTiming, callback: (...args: any) => any, priority?: number): void {
    const sortHookArray = (
      a: Hook<VoidFunction | TransformHTMLFunction>,
      b: Hook<VoidFunction | TransformHTMLFunction>
    ) => {
      // Number-weighted priorities execute later than regular (= "true") priorities
      if (a.priority === true && typeof b.priority === 'number') {
        return -1;
      }
      // Higher numbers execute later than lower ones
      if (typeof a.priority === 'number' && typeof b.priority === 'number') {
        return a.priority - b.priority;
      }

      return 0;
    };

    if (timing === 'before') {
      this.beforeHooks.push({
        priority: priority ?? true,
        callback,
        dispose: () => {
          this.beforeHooks = this.beforeHooks.filter((hook) => hook.callback !== callback);
        },
      });

      this.beforeHooks.sort(sortHookArray);
    } else if (timing === 'after') {
      this.afterHooks.push({
        priority: priority ?? true,
        callback,
        dispose: () => {
          this.afterHooks = this.afterHooks.filter((hook) => hook.callback !== callback);
        },
      });

      this.afterHooks.sort(sortHookArray);
    }
  }

  /**
   * Clears all hooks
   */
  public clearAllHooks() {
    this.beforeHooks = [];
    this.afterHooks = [];
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
    const options: Parameters<typeof this.compileTemplate>[1] = {
      addDocType: false,
      pretty: false,
      ...optOptions,
    };

    if (options.addDocType) {
      this.registerHook('after', addDocTypeHook);
    }

    if (options.pretty) {
      this.registerHook('after', createPrettierHook(optOptions.prettyOptions || {}));
    }

    this.executeHooks('before');

    let html: string;

    html = renderToStaticMarkup(typeof element === 'function' ? element() : element);
    html = this.executeHooks('after', html);

    return html;
  }
}

export default new LogicfulTemplates();
