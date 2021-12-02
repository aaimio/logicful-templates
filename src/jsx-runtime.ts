import prettier from 'prettier';
import { Window } from 'happy-dom';
import Fragment from './components/Fragment';

import type { Document, IElement } from 'happy-dom';
import type { Children, Options, Props } from './types';

let domDocument: Document = new Window().document;

const createElementAttribute = (element: IElement, name: string, value: string | number | boolean) => {
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    if (value === true) {
      element.setAttribute(name, '');
    } else if (value === false) {
      // Do nothing.
    } else {
      element.setAttribute(name, `${value}`);
    }
  }
};

const createElementAttributesFromProps = (element: IElement, props: Props): void => {
  const attributeNames = Object.keys(props || {});

  for (let i = 0; i < attributeNames.length; i++) {
    const attributeName = attributeNames[i];
    const attributeValue = props[attributeName];

    // Allow consumer to set innerHTML of the element
    if (attributeName === '$innerHTML' && typeof attributeValue === 'string') {
      element.innerHTML = attributeValue;
    }
    // Allow an object of arbritrary attributes
    else if (attributeName === '$customAttributes' && typeof attributeValue === 'object') {
      const customAttributeNames = Object.keys(attributeValue);

      for (let j = 0; j < customAttributeNames.length; j++) {
        const customAttributeName = customAttributeNames[j];
        const customAttributeValue = attributeValue[customAttributeName];

        createElementAttribute(element, customAttributeName, customAttributeValue);
      }
    }
    // For all other "props"
    else {
      createElementAttribute(element, attributeName, attributeValue);
    }
  }
};

const createElementChildren = (element: IElement, children: Children): void => {
  if (!children) {
    return;
  }

  if (typeof children === 'string' || typeof children === 'number' || typeof children === 'boolean') {
    const textNode = domDocument.createTextNode(`${children}`);
    element.appendChild(textNode);
  } else if (Array.isArray(children)) {
    for (let i = 0; i < children.length; i++) {
      createElementChildren(element, children[i]);
    }
  } else if (children.nodeType) {
    element.appendChild(children);
  }
};

export const createElement = (
  tagNameOrCreateFunction: string | ((props: Props, domDocument: Document) => IElement),
  props: { children?: Children } & Props = { children: [] }
): IElement => {
  if (typeof tagNameOrCreateFunction === 'function') {
    return tagNameOrCreateFunction(props, domDocument);
  }

  const element = domDocument.createElement(tagNameOrCreateFunction);

  createElementAttributesFromProps(element, { ...props, children: undefined });
  createElementChildren(element, props.children);

  return element;
};

export const compileTemplate = (
  elementCreatorFn: () => IElement | IElement[] | string,
  compileOptions: Options = {}
) => {
  const mergedOptions: Options = {
    addDocType: true,
    pretty: false,
    prettyOptions: {},
    ...compileOptions,
  };

  domDocument = new Window().document;

  const elementOrElements = elementCreatorFn();
  const elements = Array.isArray(elementOrElements) ? elementOrElements : [elementOrElements];

  let output: string = '';

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    if (!element) {
      continue;
    }

    if (typeof element === 'string') {
      output += element;
    } else if (element.nodeType === 8 /* COMMENT_NODE */) {
      output += `<!-- ${element.nodeValue} -->`;
    } else {
      output += element.outerHTML;
    }
  }

  if (mergedOptions.addDocType) {
    output = `<!DOCTYPE html>${output}`;
  }

  if (mergedOptions.pretty) {
    output = prettier.format(output, {
      parser: 'html',
      ...mergedOptions.prettyOptions,
    });
  }

  return output;
};

export { createElement as jsx, createElement as jsxs, createElement as jsxDev, Fragment };
