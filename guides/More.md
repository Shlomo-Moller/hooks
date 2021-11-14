# `useState`

If the new state is computed using the previous state, you can use functional updates.

If your update function returns the exact same value as the current state, the subsequent rerender will be skipped completely.

Unlike the class components' `setState`, `useState` does not automatically merge update objects. To do so combine the function updater form with object spread syntax.

Another option is `useReducer`, which is more suited for managing state objects that contain multiple sub-values.

The `initialState` argument is the state used during the initial render. In subsequent renders, it is disregarded. If the initial state is the result of an expensive computation, you may provide a function instead, which will be executed only on the initial render

If you update a State Hook to the same value as the current state, React will bail out without rendering the children or firing effects. (React uses the [Object.is comparison algorithm](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#Description).)

Note that React may still need to render that specific component again before bailing out. That shouldn’t be a concern because React won’t unnecessarily go “deeper” into the tree. If you’re doing expensive calculations while rendering, you can optimize them with `useMemo`.

# `useEffect`

The function passed to useEffect fires after layout and paint, during a deferred event.

However, not all effects can be deferred. For example, a DOM mutation that is visible to the user must fire synchronously before the next paint so that the user does not perceive a visual inconsistency.

For these types of effects, React provides one additional Hook called `useLayoutEffect`.

Although `useEffect` is deferred until after the browser has painted, it’s guaranteed to fire before any new renders. React will always flush a previous render’s effects before starting a new update.

If you use the optimization of adding a dependencies array, make sure the array includes **all values from the component scope (such as props and state) that change over time and that are used by the effect**.

# [Can I run an effect only on updates?](https://reactjs.org/docs/hooks-faq.html#can-i-run-an-effect-only-on-updates)

Check the link.


