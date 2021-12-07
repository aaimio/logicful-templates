import { Document } from 'happy-dom';
import {
  compileTemplate,
  createDOMDocument,
  createElement,
  createElementAttribute,
  createElementAttributesFromProps,
  createElementChildren,
  domDocument,
} from '../jsx-runtime';
import { Options, Props } from '../types';

describe('JSX runtime', () => {
  beforeEach(() => {
    createDOMDocument();
  });

  describe('createDOMDocument', () => {
    it('creates a new document', () => {
      const document = createDOMDocument();
      expect(document).toBeInstanceOf(Document);
    });
  });

  describe('createElement', () => {
    it('creates a DOM element (using tagName & props)', () => {
      const tagName = 'some_element';
      const props: Props = { class: 'a-classy-name' };
      const element = createElement(tagName, props as any);

      // Assert attributes
      for (let i = 0; i < element.attributes.length; i++) {
        const attribute = element.attributes[i];

        if (typeof attribute === 'object') {
          expect(attribute.name).toBe('class');
          expect(attribute.value).toBe('a-classy-name');
        }
      }

      expect(element.tagName).toBe('SOME_ELEMENT');
      expect(element.children.length).toBe(0);
    });

    it('creates a DOM element (using a function)', () => {
      const props: Props = { class: 'some-class-you-have', width: 800, height: 600 };
      const createFunction = jest.fn(() => domDocument.createElement('div'));
      const element = createElement(createFunction, props as any);

      for (let i = 0; i < element.attributes.length; i++) {
        const attribute = element.attributes[i];

        if (typeof attribute === 'object') {
          expect(attribute.name).toBe('class');
          expect(attribute.value).toBe('center');
        }
      }

      expect(element.tagName).toBe('DIV');
      expect(Array.isArray(element.children)).toBe(true);
      expect(element.children.length).toBe(0);
      expect(createFunction).toBeCalledWith<[Props, Document]>(props, domDocument);
    });

    it('creates a DOM element (using a function & no props)', () => {
      const createFunction = jest.fn(() => domDocument.createElement('div'));
      const element = createElement(createFunction, undefined);

      for (let i = 0; i < element.attributes.length; i++) {
        const attribute = element.attributes[i];

        if (typeof attribute === 'object') {
          expect(attribute.name).toBe('class');
          expect(attribute.value).toBe('center');
        }
      }

      expect(element.tagName).toBe('DIV');
      expect(Array.isArray(element.children)).toBe(true);
      expect(element.children.length).toBe(0);
      expect(createFunction).toBeCalledWith<[{ children: any[] }, Document]>({ children: [] }, domDocument);
    });
  });

  describe('createElementAttribute', () => {
    it('creates attributes on an element', () => {
      const element1 = domDocument.createElement('div');

      createElementAttribute(element1, 'class', 'center-plz');
      expect(element1.outerHTML).toBe('<div class="center-plz"></div>');
      expect(element1.getAttribute('class')).toBe('center-plz');

      const element2 = domDocument.createElement('div');
      createElementAttribute(element2, 'id', 1337);
      expect(element2.outerHTML).toBe('<div id="1337"></div>');
      expect(element2.getAttribute('id')).toBe('1337');

      const element3 = domDocument.createElement('div');
      createElementAttribute(element3, 'name', true);
      expect(element3.outerHTML).toBe('<div name=""></div>');
      expect(element3.getAttribute('name')).toBe('');

      const element4 = domDocument.createElement('div');
      createElementAttribute(element4, 'disabled', false);
      expect(element4.getAttribute('disabled')).toBe(null);
    });
  });

  describe('createElementAttributesFromProps', () => {
    it('sets the innerHTML of an element if "$innerHTML" prop is passed', () => {
      const element1 = domDocument.createElement('script');
      createElementAttributesFromProps(element1, { $innerHTML: 'alert("Hello World")', class: 'definitely-not-dodgy' });
      expect(element1.outerHTML).toBe('<script class="definitely-not-dodgy">alert("Hello World")</script>');
      expect(element1.getAttribute('class')).toBe('definitely-not-dodgy');
    });

    it('initialises with an empty object if props is not specified', () => {
      const element1 = domDocument.createElement('script');
      createElementAttributesFromProps(element1, undefined as any);
      expect(element1.outerHTML).toBe('<script></script>');
    });

    it('sets custom attributes on an element if "$customAttributes" prop is passed', () => {
      const element1 = domDocument.createElement('div');

      createElementAttributesFromProps(element1, {
        class: 'super-custom-element',
        $customAttributes: {
          'illegal-attribute': true,
          'i-sure-hope-you-know-what-you-are-doing': false,
        },
      });

      expect(element1.outerHTML).toBe('<div class="super-custom-element" illegal-attribute=""></div>');
      expect(element1.getAttribute('class')).toBe('super-custom-element');
      expect(element1.getAttribute('illegal-attribute')).toBe('');
    });
  });

  describe('createElementChildren', () => {
    it('creates child nodes on an element (no children specified)', () => {
      const element = domDocument.createElement('div');
      createElementChildren(element, undefined as any);
      expect(element.children.length).toBe(0);
    });

    it('creates child nodes on an element (children = a string)', () => {
      const element = domDocument.createElement('div');
      createElementChildren(element, 'Hello World');
      expect(element.childNodes.length).toBe(1);
      expect(element.childNodes[0].nodeType).toBe(3 /* TEXT_NODE */);
      expect(element.childNodes[0].nodeValue).toBe('Hello World');
    });

    it('creates child nodes on an element (children = a number)', () => {
      const element = domDocument.createElement('div');
      createElementChildren(element, 1337);
      expect(element.childNodes.length).toBe(1);
      expect(element.childNodes[0].nodeType).toBe(3 /* TEXT_NODE */);
      expect(element.childNodes[0].nodeValue).toBe('1337');
    });

    it('creates child nodes on an element (children = a boolean)', () => {
      const element = domDocument.createElement('div');
      createElementChildren(element, false);
      expect(element.childNodes.length).toBe(1);
      expect(element.childNodes[0].nodeType).toBe(3 /* TEXT_NODE */);
      expect(element.childNodes[0].nodeValue).toBe('false');
    });

    it('creates child nodes on an element (children = an array)', () => {
      const element = domDocument.createElement('div');
      createElementChildren(element, ['string', true, domDocument.createElement('span')]);
      expect(element.childNodes.length).toBe(3);
      expect(element.childNodes[0].nodeType).toBe(3 /* TEXT_NODE */);
      expect(element.childNodes[0].nodeValue).toBe('string');
      expect(element.childNodes[1].nodeType).toBe(3 /* TEXT_NODE */);
      expect(element.childNodes[1].nodeValue).toBe('true');
      expect(element.childNodes[2].nodeType).toBe(1 /* ELEMENT_NODE */);
      expect(element.childNodes[2].nodeName).toBe('SPAN');
    });
  });

  describe('compileTemplate', () => {
    it('initialises an empty options object if none was specified', () => {
      const output = compileTemplate(() => createElement('div'));
      expect(output).toBe('<!DOCTYPE html><div></div>');
    });

    it('compiles a template (array of elements passed)', () => {
      const elementCreatorFn = () => {
        return [
          createElement('div', {
            class: 'some-class',
            children: [
              createElement('span', {
                id: 'greeting',
                children: ['hello ', createElement('strong', { children: ['world'] })],
              }),
            ],
          }),
          createElement('div', {
            class: 'some-other-class',
            children: [
              createElement('span', {
                id: 'farewell',
                children: ['goodbye ', createElement('strong', { children: ['world'] })],
              }),
            ],
          }),
        ];
      };

      const compileOptions: Options = { addDocType: false, pretty: false };
      const output = compileTemplate(elementCreatorFn, compileOptions);
      expect(output).toBe(
        '<div class="some-class"><span id="greeting">hello <strong>world</strong></span></div><div class="some-other-class"><span id="farewell">goodbye <strong>world</strong></span></div>'
      );
    });

    it('compiles a template (single element passed)', () => {
      const elementCreatorFn = () => {
        return createElement('div', {
          class: 'some-class',
          children: [
            createElement('span', {
              id: 'greeting',
              children: ['hello ', createElement('strong', { children: ['world'] })],
            }),
          ],
        });
      };

      const compileOptions: Options = { addDocType: false, pretty: false };
      const output = compileTemplate(elementCreatorFn, compileOptions);
      expect(output).toBe('<div class="some-class"><span id="greeting">hello <strong>world</strong></span></div>');
    });

    it('compiles a template (plot twist: no element was returned)', () => {
      const elementCreatorFn = () => {};
      const compileOptions: Options = { addDocType: false, pretty: false };
      const output = compileTemplate(elementCreatorFn as any, compileOptions);
      expect(output).toBe('');
    });

    it('compiles a template (element is a comment)', () => {
      const elementCreatorFn = () => {
        return domDocument.createComment('<!-- Is this a nested comment? -->');
      };
      const compileOptions: Options = { addDocType: false, pretty: false };
      const output = compileTemplate(elementCreatorFn, compileOptions);
      expect(output).toBe('<!-- <!-- Is this a nested comment? --> -->');
    });

    it('adds a doctype if option "addDocType" was set to true', () => {
      const elementCreatorFn = () => {};
      const compileOptions: Options = { addDocType: true, pretty: false };
      const output = compileTemplate(elementCreatorFn as any, compileOptions);
      expect(output).toBe('<!DOCTYPE html>');
    });

    it('formats the output if "pretty" was set to true', () => {
      const elementCreatorFn = () => {
        return createElement('div', { children: [createElement('span', { children: ['Hello World'] })] });
      };
      const compileOptions: Options = { addDocType: true, pretty: true };
      const output = compileTemplate(elementCreatorFn, compileOptions);
      expect(output).toBe(`<!DOCTYPE html>
<div><span>Hello World</span></div>
`);
    });
  });
});
