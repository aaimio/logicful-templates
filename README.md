# Logicful templates

A library allowing you to build HTML templates using JSX.

JSX is a JavaScript syntax extension that [comes with the full power of JavaScript](https://reactjs.org/docs/introducing-jsx.html). It allows you to use if statements, loops, variables, and so on. By using the power of JSX we can build logicful HTML templates.

```TSX
const Template = () => {
  const employees = [
    { name: 'Petra', age: 33, title: 'Chief Template Creator' },
    { name: 'John', age: 31, title: 'Template Hacker' },
    { name: 'Jacky', age: 26, title: 'Senior Template Engineer' },
    { name: 'Boris', age: 28, title: 'Template Acquisition Expert' },
  ];

  return (
    <>
      <html lang='en'>
        <head>
          <title>An example JSX template</title>
          <meta charset='UTF-8' />
          <script type='text/javascript' $innerHTML='alert("An in-your-face message!")' />
        </head>
        <body>
          <div class='employees'>
            {employees.map((employee) => (
              <div class='employee'>
                <div class='name'>
                  {employee.name}, {employee.age}
                </div>
                <div class='title'>{employee.title}</div>
              </div>
            ))}
          </div>
        </body>
      </html>
    </>
  );
};
```

would compile into

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>An example JSX template</title>
    <meta charset="UTF-8" />
    <script type="text/javascript">
      alert("An in-your-face message!");
    </script>
  </head>
  <body>
    <div class="employees">
      <div class="employee">
        <div class="name">Petra, 33</div>
        <div class="title">Chief Template Creator</div>
      </div>
      <div class="employee">
        <div class="name">John, 31</div>
        <div class="title">Template Hacker</div>
      </div>
      <div class="employee">
        <div class="name">Jacky, 26</div>
        <div class="title">Senior Template Engineer</div>
      </div>
      <div class="employee">
        <div class="name">Boris, 28</div>
        <div class="title">Template Acquisition Expert</div>
      </div>
    </div>
  </body>
</html>
```

- [Usage](#usage)
  - [TypeScript](#typescript)
  - [JavaScript + Babel](#javascript--babel)
  - [Function overview](#function-overview)
    - [`compileTemplate`](#compiletemplate)
    - [`createElement`](#createelement)
- [Special components](#special-components)
  - [`<Custom>`](#custom)
  - [`<Comment>`](#comment)
- [Special props](#special-props)
  - [`$innerHTML`](#innerhtml)
  - [`$customAttributes`](#customattributes)
- [Compiling your templates](#compiling-your-templates)
- [Bring your own types](#bring-your-own-types)
- [Things to note](#things-to-note)

## Usage

Install the library using:

```
npm i logicful-templates
```

### TypeScript

If you're using TypeScript, please ensure you're using a version higher than 4.1 as we'll be using the [`jsxImportSource`](https://www.typescriptlang.org/tsconfig#jsxImportSource) configuration to load the `logicful-templates` JSX runtime. Add the configuration below to your `tsconfig.json`:

```JSON
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "logicful-templates",
    "types": ["logicful-templates"],
    //...
  }
}
```

For a working example, please check out the example TypeScript repository:

- https://github.com/aaimio/logicful-templates-example-ts

### JavaScript + Babel

If you're using plain JavaScript we'll need to add an extra step to transpile the JSX syntax into regular JS (which in turn builds the HTML files). Add the configuration below to your Babel configuration file:

```JSON
{
  "plugins": [
    [
      "@babel/plugin-transform-react-jsx",
      {
        "runtime": "automatic",
        "importSource": "logicful-templates"
      }
    ]
  ]
}
```

For a working example, please check out the example JavaScript repository:

- https://github.com/aaimio/logicful-templates-example-js

### Function overview

#### `compileTemplate`

Compiles a component and spits out an HTML file.

**Arguments**

- `elementCreatorFn`: A callback that returns an HTML element, this would normally be a component e.g. `<Template />`
- `compileOptions`: An object taking various compile options:
  - `addDocType`: Whether to add the `<!DOCTYPE html>` string at the start of the output (default: `true`)
  - `pretty`: Whether to format the output with [Prettier](https://prettier.io/) (default: `true`)
  - `prettyOptions`: Custom options for Prettier (see [this page](https://prettier.io/docs/en/options.html)) (default: `{ parser: 'html' }`)

```TS
const Template = () => (
  <div>Hello World</div>
);

const result = compileTemplate(() => <Template />);

fs.writeFile("template.html", result, () => {});
```

See the repositories below for working examples on how build your templates:

- https://github.com/aaimio/logicful-templates-example-ts
- https://github.com/aaimio/logicful-templates-example-js

#### `createElement`

Creates an HTML element.

In most cases you won't need to use this function, but it allows you to build custom HTML elements without any restrictions. You can check out the [`<Comment>`](./src/components/Comment.tsx) and [`<Custom>`](./src/components/Custom.tsx) "components" to see how it's being used.

**Arguments**

- `createElementFn`: A callback that returns an HTML element. It will be called with the `props` argument and a `document` instance (so you can freely interact with the underlying DOM). In most cases this will be a `<Component />` function, but you could also return a custom HTML element.
- `props`: The props (or attributes) for the component (this includes `children`)

```TS
const Template = () => (
  <div>Hello World</div>
);

const result = compileTemplate(() => <Template />);

fs.writeFile("template.html", result, () => {});
```

## Special components

### `<Custom>`

This component provides flexibility by allowing you to specify what the output tag name for an element will be, while also allowing you to specify any type of prop (or attribute) on the element.

```TS
// Input
const MyComponent = () => {
  return (
    <Custom
      tagName='amp-img'
      alt='A view of the sea'
      src='/path/to/img'
      width={900}
      height={675}
      layout='responsive'
    />
  )
}

// Output
// <amp-img alt="a view of the sea" src="/path/to/img" width="900" height="675" layout="responsive"></amp-img>
```

You could even write an abstraction over the `<Custom>` component to provide better type hinting for the next person consuming your component.

```TS
import { Custom } from 'logicful-templates';
import type { Component } from 'logicful-templates';

interface AmpImgProps {
  alt: string;
  src: string;
  width: number;
  height: number;
  layout: string;
}

const AmpImg: Component<AmpImgProps> = (props) => {
  return <Custom tagName='amp-img' {...props} />;
};
```

### `<Comment>`

This component provides a way of adding HTML comments to the compiled output.

```TS
import { Comment } from 'logicful-templates';

// Input
const MyComponent = () => {
  const input = 'World';

  return (
    <div>
      <Comment>Hello {input}</Comment>
    </div>
  )
}

// Output
// <div><!-- Hello World --></div>
```

## Special props

### `$innerHTML`

This prop sets an element's `innerHTML` (much like React's [`dangerouslySetInnerHTML`](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)).

```TS
// Input
const MyComponent = () => {
  return (
    <script type="text/javascript" $innerHTML='alert("An in-your-face message!")' />
  )
}

// Output
// <script type="text/javascript">alert("That was logicful!")</script>

```

### `$customAttributes`

Sets custom attributes on the element e.g. for when an attribute is unkown or unsupported.

```TS
// Input
const MyComponent = () => {
  return (
    <img src='/path/to/img' $customAttributes={{
      'a_custom_attribute': 'A custom attribute value'
    }}>
  )
}

// Output
// <img src='/path/to/img' a_custom_attribute='A custom attribute value'>
```

## Compiling your templates

At this time there is no CLI provided (please let me know if that would be useful), for now you could write a simple node script to compile all of your templates. Please see repositories below for examples on how to compile your templates:

- https://github.com/aaimio/logicful-templates-example-ts
- https://github.com/aaimio/logicful-templates-example-js

## Bring your own types

Typings for all the standard HTML elements and attributes are shipped with the library. However, you could easily extend or overwrite these by defining your own in a separate `*.d.ts` file.

```TS
declare module JSX {
  export interface IntrinsicElements {
    'custom-element': {
      src: string,
    }
  }
}
```

You could also allow ANY elements and attributes by specifying a `d.ts` file as per below.

```TS
declare module JSX {
  export interface IntrinsicElements {
    [key: string]: any;
  }
}
```

## Things to note

- The syntax is very similar to that of React but keep these gotchas in mind:
  - Props are meant to be equal to their HTML attribute equivalents, i.e. don't use `className`, just use `class`
  - `compileTemplate` takes a callback that returns an HTML element, so use `compileTemplate(() => <Component />)` instead of `compileTemplate(<Component />)`
