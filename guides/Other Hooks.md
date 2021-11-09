# [Other Hooks](https://reactjs.org/docs/hooks-overview.html#other-hooks)

The state of each component is completely independent. Hooks are a way to reuse *stateful logic*, not state itself. In fact, each *call* to a Hook has a completely isolated state — so you can even use the same custom Hook twice in one component.

Custom Hooks are more of a convention than a feature. If a function’s name starts with ”`use`” and it calls other Hooks, we say it is a custom Hook. The `useSomething` naming convention is how our linter plugin is able to find bugs in the code using Hooks.



<br />
<br />
<br />



## [State Hook](https://reactjs.org/docs/hooks-overview.html#state-hook)

`useState` is a *Hook*. We call it inside a function component to add some local state to it. React will preserve this state between re-renders. `useState` returns a pair: the *current* state value and a function that lets you update it. Unlike the `this.setState` in a class component, it doesn’t merge the old and new state together, so use spread operator to do so.

The initial state argument is only used during the first render.

You can use the State Hook more than once in a single component. React assumes that if you call `useState` many times, you do it in the same order during every render



<br />
<br />
<br />



## [`useContext`](https://reactjs.org/docs/hooks-reference.html#usecontext)

Lets you subscribe to React context without introducing nesting:

```jsx
const Example = () => {
    const locale = useContext(LocaleContext)
    const theme = useContext(ThemeContext)
    // ...
}
```



<br />
<br />
<br />



## [`useReducer`](https://reactjs.org/docs/hooks-reference.html#usereducer)

Lets you manage local state of complex components with a reducer:

```jsx
const Todos = () => {
    const [todos, dispatch] = useReducer(todosReducer)
    // ...
```
