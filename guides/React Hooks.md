# [Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html)

Hooks are functions that let you “hook into” React state and lifecycle features from function components.

React provides a few built-in Hooks. You can also create your own Hooks to reuse stateful behavior between different components.



<br />
<br />
<br />



## Motivation

### It’s hard to reuse stateful logic between components

To “attach” reusable behavior to a component (e.g., connecting it to a store), you may use patterns like *render props* and *HOC*. But these require restructuring components when used.

With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. **Hooks allow you to reuse stateful logic without changing your component hierarchy**.



<br />
<br />
<br />



## [Rules of Hooks](https://reactjs.org/docs/hooks-overview.html#rules-of-hooks)

Hooks are JS functions, but they impose two additional rules:

- Only call Hooks **at the top level**. Don’t call Hooks inside loops, conditions, or nested functions.
- Only call Hooks **from React function components *or* your own custom Hooks**. Don’t call Hooks from regular JS functions.

### Simple test case to verify the rule works:

When using the next component, a warning should appear in the web browser' console:

```jsx
function Foo(props) {
  useEffect(() => {
    console.log(props.name)
  }, []) // <-- should error and offer autofix to [props.name]
}
```

The warning should look like this:

```
src\components\Foo.js
  Line 7:8:  React Hook useEffect has a missing dependency: 'props.name'. Either include it or remove the dependency array      react-hooks/exhaustive-deps
```

### The [Linter Plugin](https://www.npmjs.com/package/eslint-plugin-react-hooks)

Enforces these rules automatically.

We recommend using the [`exhaustive-deps`](https://github.com/facebook/react/issues/14920) rule as part of our [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks#installation) package. It warns when dependencies are specified incorrectly and suggests a fix:

#### Installation

**Note: If you're using Create React App, please use `react-scripts` >= 3 instead of adding it directly.**

Assuming you already have [ESLint](https://www.npmjs.com/package/eslint) installed, run:

    npm i -D eslint-plugin-react-hooks

and/or (**I have no idea...**):

    npm i -D eslint-plugin-react-hooks@next

Then extend the recommended eslint config:

```
{
  "extends": [
    // ...
    "plugin:react-hooks/recommended"
  ]
}
```

#### ESLint config (or: Custom Configuration):

If you want more fine-grained configuration, you can instead add a snippet like this to your ESLint configuration file:

```
{
  "plugins": [
    // ...
    "react-hooks"
  ],
  // ...
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn" // <--- THIS IS THE NEW RULE
  }
}
```
