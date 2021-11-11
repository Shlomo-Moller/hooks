# A Functional Component's Lifecycle



<br />
<br />
<br />



## React Docs On Components' Lifecycle Are (Currently) Mainly *Class-Component* Based

When coming to *function components*, we can't be content with the existing official docs about components lifecycle.
This is where our review is becoming handy.



<br />
<br />
<br />



## Intro: React VDOM, React Components, & React Elements

Refer to what you actually see on the web browser when running your project, as the project's *instance*, the live running instance of your code.
This instance is defined and managed as a **DOM tree**; it is an element with attributes, a value, and sub-elements, all constitute together the element' values and state, and it works according to a bunch of rules of rendering, dependencies, styles, inheritance, etc.
The instance has its initial values and state, and gets modified by running its functions and interacting with users and other entities on the machine and on the web, via various APIs.

React manages a [**VDOM**](https://reactjs.org/docs/faq-internals.html "Virtual DOM") aside the actual [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model "Document Object Model").
This VDOM consists of **React elements**.

When a React element updates, the VDOM updates, and React updates the DOM only where it defers from the updated VDOM.
Even if this results no visible difference in the browser window, it is still a re-render!


React elements are *objects* created by React. They are descriptions of what to render (in HTML) on the screen. React uses them to construct the DOM and keep it up to date.
Each React element in the project's instance is defined by a value returned from the element's defining function.
This special kind of function is called **React component**.

The React element defined by the component can be added anywhere in the DOM tree, usually inside the App component inside the "root" div (as in a standard-configured React project), using its representing tag:

`MyComponent.js`:

```jsx
// The React component:
const MyComponent = () => {
    // Returns the React element:
    // (the result is an object created by the React.createElement method)
    // (Due to its HTML-likeness, the JSX syntax allows defining this object's render behavior - its looks - very easily)
    return (
        <div>
            Some content
        </div>
    )
}
```

The React element, the value returned by this component, is represented with a special tag:

```jsx
<MyComponent />
```

So it may be used in the DOM by its representing tag:

`App.js`:

```jsx
const App = props => {
    return (
        <div className='App'>
            <MyComponent />
        </div>
    )
}
```



<br />
<br />
<br />



## React *Functional* Component Lifecycle

A functional component's lifecycle consist of three phases: *First render*, zero or more *re-render*s (updates), and *removal*.

- **After** the first phase - the *first render*, we may think of it as the element "didMount".
- **Before** each update - *re-render*, we may think of it as the element "willUpdate".
- **After** each update - *re-render*, we may think of it as the element "didUpdate".
- **Before** the last phase - the *removal*, we may think of it as the element "willUnmount".

### Explanation

A React component's render result - the looks of its element on the screen - is defined by the mere use of its element in the code, & when being used, by its props & state.
The VDOM is defined and updates by its React elements and their props & states.

<br />

---
**Reminder**:

An update in a React element causes an update to the VDOM, which cause React to update the DOM only where it differs from the updated VDOM, and this is a *re-render*. These updates **may or not** result in a visible modification of the web page. The existence of an element in the DOM is not the same as its visibility and looks. An update may lead to a change in an element's appearance, or even visibly hide it, but only a *removal* removes it from the DOM.

---

<br />

Before you ever use a React element (in your code in the DOM tree), it won't render at all. It doesn't exist in the DOM.

You may use it anywhere inside the DOM tree, simply, or [conditionally](https://reactjs.org/docs/conditional-rendering.html).

If you use it, or use it conditionally & the condition is met, then it is on the DOM - it **renders** (like didMount).

<br />

---
**NOTE - Being *Rendered* vs Being *Visible***

Note that being rendered, to exist in the DOM, is **not** the same as being **visible**.
A component may define a style rule like `"display: none"` or `"width: 0"` to its element, but the element is still on the DOM, & it's being affected from derived props & states or subscriptions, & its own props & state are affecting related (depending) elements in the DOM. So, if you need a React element to keep working at the background, listening to events or updating other elements, even while being hidden, keep rendering it.

---

<br />

For each update on a component' props or state, it **re-renders**.

<br />

---
**NOTE - Being *Re-rendered (Updated)* vs Being *Visibly Modified***

Note that a component may re-render its React element due to props or state update, but still not resulting in any *visible* difference.
Still, an update was performed.

---

<br />

If you remove the React element from your code, or the condition ceases to be met, it's being **removed** from the DOM entirely.

### To Sum Up

A functional component's lifecycle starts with the **first render**, may step through some updates - **re-renders**, & ends with its own **removal**.
