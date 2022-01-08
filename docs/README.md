# Logicful templates

[![codecov](https://codecov.io/gh/aaimio/logicful-templates/branch/master/graph/badge.svg?token=9R5TVD0BA6)](https://codecov.io/gh/aaimio/logicful-templates) ![build](https://github.com/aaimio/logicful-templates/actions/workflows/build.yml/badge.svg)

A simple library allowing you to build HTML templates using React & JSX.

JSX is a JavaScript syntax extension that [comes with the full power of JavaScript](https://reactjs.org/docs/introducing-jsx.html). It allows you to use if statements, loops, variables, and so on. By using React & JSX we can build logicful HTML templates.

<details>
  <summary>Show example</summary>

```TSX
const Template = () => {
  const employees = [
    { name: 'Petra', age: 33, title: 'Chief Template Creator' },
    { name: 'John', age: 31, title: 'Template Hacker' },
    { name: 'Jacky', age: 26, title: 'Senior Template Engineer' },
    { name: 'Boris', age: 28, title: 'Template Acquisition Expert' },
  ];

  return (
    <html lang='en'>
      <head>
        <title>An example JSX template</title>
        <meta charSet='UTF-8' />
        <script type='text/javascript' dangerouslySetInnerHTML={{ __html: 'alert("An in-your-face message!")' }} />
      </head>
      <body>
        <div className='employees'>
          {employees.map((employee) => (
            <div key={employee.name} className='employee'>
              <div className='name'>
                {employee.name}, {employee.age}
              </div>
              <div className='title'>{employee.title}</div>
            </div>
          ))}
        </div>
      </body>
    </html>
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

</details>

- [Usage](#usage)
  - [Setup](#setup)
    - [TypeScript](#typescript-configuration)
    - [JavaScript + Babel](#javascript--babel-configuration)
  - [Function overview](#function-overview)
    - [`compileTemplate`](#compiletemplate)
    - [`registerHook`](#registerhook)
- [Special components](#special-components)
  - [`<Magic>` 🪄](#magic)
  - [`<Custom>`](#custom)
  - [`<Comment>`](#comment)
- [Bring your own types](#bring-your-own-types)

## Usage

### Setup

Install the library using:

```
npm i logicful-templates
```

#### TypeScript configuration

If you're using TypeScript, ensure you're using a version larger than 4.1 as we'll be using the [`jsxImportSource`](https://www.typescriptlang.org/tsconfig#jsxImportSource) configuration to load the `react` JSX runtime.

Add the configuration below to your `tsconfig.json`:

```JSON
{
  "compilerOptions": {
    "target": "ES6",
    "jsx": "react-jsx",
    "jsxImportSource": "react",
    "module": "commonjs",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "strict": true
  },
}
```

#### JavaScript + Babel configuration

If you're using plain JavaScript we'll need Babel to transpile the JSX syntax into regular JS.

Add the configuration below to your Babel configuration file:

```JSON
{
  "presets": ["@babel/preset-env"],
  "plugins": [
    [
      "@babel/plugin-transform-react-jsx",
      {
        "runtime": "automatic",
        "importSource": "react"
      }
    ]
  ]
}
```

### Function overview

#### `compileTemplate`

**Compiles a component and spits out an HTML string.**

A function that compiles a React component into a plain HTML string. This is simply a wrapper over `react-dom/server`'s `renderToStaticMarkup` function, allowing us to [specify `before` and `after` compilation hooks](#registerHook).

**Arguments**

- `element`: A `ReactElement` or a function returning one e.g. `<Template />` or `() => <Template />`
- `compileOptions`: An object taking various compilation options:
  - `addDocType`: Whether to add the `<!doctype html>` string at the start of the output (default: `false`)
  - `pretty`: Whether to format the output with [Prettier](https://prettier.io/) (default: `false`)
  - `prettyOptions`: Custom options for Prettier (see [this page](https://prettier.io/docs/en/options.html)) (default: `{ parser: 'html' }`)

Note: If you specify both `addDocType: true` and `pretty: true` the doctype will be formatted as `<!DOCTYPE html>`

```TSX
import type { FunctionComponent } from 'react';
import LogicfulTemplates from 'logicful-templates';

const Template: FunctionComponent<{}> = () => (
  <div className="greeting">Hello World</div>
);

const result = LogicfulTemplates.compileTemplate(<Template />);
// result: <div class="greeting">Hello World</div>

// Write output to a file
fs.writeFile("template.html", result, () => {});
```

#### `registerHook`

**Register a `before` or `after` hook to execute during compilation.**

For example:

- Setting [`addDocType`](#compiletemplate) to `true` registers an `after` hook, ensuring the output starts with `<!doctype html>`
- Setting [`pretty`](#compiletemplate) to `true` registers an `after` hook, tidying up HTML before returning it.
- There is also an "always-on" internal hook called `replaceInternalElementsHook` that makes it possible to render HTML comments using the `<Comment>` component, as well as writing raw HTML using the `<Root>` component.

You can find the source of above hooks below:

- [addDocTypeHook](../src/hooks/addDocTypeHook.ts)
- [createPrettierHook](../src/hooks/createPrettierHook.ts)

If you have a good idea for other hooks, PRs are more than welcome. 🚀

**Registering a `before` hook**

`before` hooks execute before calling `renderToStaticMarkup`, they aren't called with any parameters, but they allow you to execute any type of logic before compilation starts. For example:

```TS
LogicfulTemplates.registerHook('before', () => {
  console.log('Starting compilation...');
});
```

**Registering an `after` hook**

`after` hooks execute after calling `renderToStaticMarkup`, they are called with the output of either that call, or the output of the previously executed `after` hook. For example:

```TS
LogicfulTemplates.registerHook('after', (html) => {
  return html.toUpperCase();
});
```

**Notes**

- Hooks are executed and then disposed, if you're calling `LogicfulTemplates.compileTemplate` multiple times and want to re-use the hooks, you'll have to register them again.

## Special components

### `<Magic>` 🪄

This component allows you to perform magic tricks that normally wouldn't work when using React regularly.

- Passing a `compileLater` prop allows you to compile the component after everything else is compiled
- Passing a `hoist` prop allows you to hoist its children up a level, in other words, you could set outerHTML

**Compiling a component later**

This could be useful when you need to execute a function only at the end of compilation.

```TSX
import type { FunctionComponent } from 'react';

const Template: FunctionComponent<{}> = () => {
  return (
    <html>
      <head>
        <meta charSet='utf-8' />
      </head>
      <body>
        <div className="header">
          <Magic compileLater>
            {() => {
              executeSomeFunctionLast();
              const header = 'I am executed last';
              return <h1>{header}</h1>
            }}
          </Magic>
        </div>
        <div className="content">
          <p>Some text goes here.</p>
        </div>
      </body>
    </html>
  );
}
```

You can also specify a priority level by passing a number instead of `true`, the "compiler" will respect these values and execute the `<Magic compilerLater={number}>` components in the correct order.

```TSX
import type { FunctionComponent } from 'react';

const Template: FunctionComponent<{}> = () => {
  return (
    <Magic compileLater={2}>
      {() => {
        executeSomeFunction();
        return <h1>I am executed 2nd!</h1>
      }}
    </Magic>
    <Magic compileLater={1}>
      {() => {
        executeSomeFunction();
        return <h1>I am executed 1st!</h1>
      }}
    </Magic>
  );
}
```

**Notes**

- You are **not** required to pass a function as the `<Magic>` component's children, but they allow you to execute functions. Passing regular children (i.e. React elements) will work fine.
- If you return another `<Magic>` component within a child render function of another `<Magic>` component, the priority number will only count for that level of `<Magic>` components. You normally wouldn't run into this scenario.

**Hoisting a component / setting outerHTML**

By itself `<Magic hoist>` isn't very useful, but combined with the `dangerouslySetInnerHTML` prop you can technically set this element's outerHTML. This could be useful if you need to inline non-standard bits into the DOM, for example a stylesheet, custom elements, or HTML comments.

```TSX
import type { FunctionComponent } from 'react';

const Template: FunctionComponent<{}> = () => {
  return (
    <>
      <Magic hoist dangerouslySetInnerHTML={{ __html: '<!-- A stylesheet below -->' }} />
      <style>
        <Magic
          hoist
          dangerouslySetInnerHTML={{
            __html: `
          body {
            background-color: linen;
          }

          h1 {
            color: maroon;
            margin-left: 40px;
          }
        `,
          }}
        />
      </style>
    </>
  );
};
```

```HTML
<!-- A stylesheet below -->
<style>
  body {
    background-color: linen;
  }

  h1 {
    color: maroon;
    margin-left: 40px;
  }
</style>
```

### `<Custom>`

Provides flexibility by allowing you to specify what the output tag name for an element will be, while also allowing you to specify any type of prop (or attribute) on the element.

- **Note**: If you're using plain JS you might not need this as React accepts custom elements, but it might be useful if you're using TypeScript and don't want to [extend the `JSX.IntrinsicElements` interface](#bring-your-own-types).

For example:

```TSX
import type { FunctionComponent } from 'react'

const MyComponent: FunctionComponent<{}> = () => {
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
```

```HTML
<amp-img
  alt="a view of the sea"
  src="/path/to/img"
  width="900"
  height="675"
  layout="responsive"
></amp-img>
```

You could even write an abstraction over the `<Custom>` component to provide better type hinting for the next person consuming your component. For example:

```TS
import { Custom } from 'logicful-templates';
import type { FunctionComponent } from 'react';

interface AmpImgProps {
  alt: string;
  src: string;
  width: number;
  height: number;
  layout: string;
}

const AmpImg: FunctionComponent<AmpImgProps> = (props) => {
  return <Custom tagName='amp-img' {...props} />;
};
```

### `<Comment>`

Provides a way of adding HTML comments to the compiled output.

You may only specify a `string`, `number`, or `boolean` as a `<Comment>`'s child. For example:

```TSX
import { Comment } from 'logicful-templates';
import type { FunctionComponent } from 'react';

const MyComponent: FunctionComponent<{}> = () => {
  const input = 'World';

  return (
    <div>
      <Comment>Hello {input}</Comment>
    </div>
  )
};
```

```HTML
<div>
  <!-- Hello World -->
</div>
```

## Bring your own types

You could easily extend the default JSX types by defining your own types in a separate `typings.d.ts` file.

- **Note**: If you're using `ts-node` to compile your templates, make sure to set `{ "ts-node": { "files": true }` in your `tsconfig.json`, else you may run into TypeScript errors.

```TS
export {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Add a new element:
      'custom-element': {
        [key: string]: any;
      };
      // Or extend an existing React element:
      html: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement> & {
        amp4email: ""
      }
    }
  }
}
```
