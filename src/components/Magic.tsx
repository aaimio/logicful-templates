import { createElement, FunctionComponent } from 'react';
import LogicfulTemplates from '..';

interface HoistProps {
  compileLater?: never;
  /**
   * Sets the inner HTML of the `<Magic>` component, which will be hoisted up a
   * level as the `<Magic>` component is not an element itself, in other words
   * it acts as setting outerHTML.
   */
  dangerouslySetInnerHTML?: { __html: string };
  /**
   * Whether to hoist the children of this component or not. This prop is
   * optional as the default behaviour of the `<Magic>` component is to hoist
   * its children.
   */
  hoist: boolean;
}

interface CompileLaterProps {
  /**
   * Whether the children of this component should be compiled later. This can
   * either be a boolean or a number.
   * - If a `boolean` is passed, it will be rendered after every other regular
   *   component. If you have multiple `<Magic compileLater>` components, the
   *   regular order is maintained (i.e. based on which one is executed first).
   *   - Example: `<Magic compileLater>`
   * - If a `number` is passed, the number will be considered as the priority of
   *   when to render the component, priority 1 is considered higher than
   *   priority 99.
   *   - Example: `<Magic compileLater={255}>`
   */
  compileLater: boolean | number;
  dangerouslySetInnerHTML?: never;
  hoist?: never;
}

const Magic: FunctionComponent<HoistProps | CompileLaterProps> = ({
  children,
  compileLater,
  dangerouslySetInnerHTML,
}) => {
  // Allow consumer to pass a function as a child. This could be useful if
  // they're embedding a function to be executed, but that function can only be
  // executed once.
  const getChildren = () => (typeof children === 'function' ? children() : children);

  if (compileLater === true || typeof compileLater === 'number') {
    const tagName = LogicfulTemplates._getIndexedInternalTagName('magic-compile-later');
    const priority = typeof compileLater === 'number' ? compileLater : undefined;

    LogicfulTemplates.registerHook(
      'after',
      (html: string) => {
        const compiled = LogicfulTemplates.compileTemplate(<>{getChildren()}</>);
        return html
          .replace(new RegExp(`<\s*?${tagName}\s*?>`), compiled)
          .replace(new RegExp(`<\s*?/${tagName}\s*?>`), '');
      },
      priority
    );

    // Placeholder element, replaced by hook defined above.
    return createElement(tagName);
  }

  // The default behaviour is to hoist this element's children. Consumer could
  // specify "hoist" prop for clarity (and satisfy TS), but it is not required.
  const tagName = LogicfulTemplates._getIndexedInternalTagName('magic-hoist');

  LogicfulTemplates.registerHook('after', (html) => {
    return html.replace(new RegExp(`<\s*?${tagName}\s*?>`), '').replace(new RegExp(`<\s*?/${tagName}\s*?>`), '');
  });

  return createElement(tagName, { children: getChildren(), dangerouslySetInnerHTML });
};

export default Magic;
