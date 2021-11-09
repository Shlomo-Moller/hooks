# A Review On [`useEffect`](https://reactjs.org/docs/hooks-effect.html)

The *Effect Hook* lets you perform side effects in function components.

Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.

You can think of `useEffect` Hook as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` combined.



<br />
<br />
<br />



## [Effect Hook](https://reactjs.org/docs/hooks-overview.html#effect-hook)

When you call `useEffect`, you’re telling React to run your “effect” function after flushing changes to the DOM. Effects are declared inside the component so they have access to its props and state. By default, React runs the effects after every render — *including* the first render.

Effects may also optionally specify how to “clean up” after them by returning a function. This function runs when the component unmounts, as well as before re-running the effect due to a subsequent render, unless you tell React to skip re-subscribing.



<br />
<br />
<br />



## Simple Example

"Log a message after each render" (works like `componentDidMount` and `componentDidUpdate` combined):

```jsx
useEffect(() => console.log('Hi'))
```



<br />
<br />
<br />



## [The Counter Example](https://reactjs.org/docs/hooks-effect.html#example-using-hooks)

```jsx
const [count, setCount] = useState(0)

useEffect(() => {
    document.title = `Count: ${count}`
}, [count])
    
return (
    <div className='counter'>
        <p>Count: {count}</p>
        <input type='button' value='INCREMENT' onClick={() => setCount(prev => prev + 1)}
    </div>
)
```

React remembers the function you passed - our “effect” - and call it later after performing the DOM updates.

Placing `useEffect` inside the component lets us access its state variables & props right from the effect.

By default, **`useEffect` run after every render** (both after the first render *and* after every update).

When React renders our component, it will remember the effect we used, and then run our effect after updating the DOM. This happens for every render, including the first one.

The function passed to `useEffect` is going to be different on every render. This lets us read the `count` value from inside the effect without worrying about it getting stale. Every time we re-render, we schedule a different effect, replacing the previous one. In a way, this makes the effects behave more like a part of the render result — each effect “belongs” to a particular render.

---
**NOTE**

Unlike `componentDidMount` or `componentDidUpdate`, effects scheduled with `useEffect` don’t block the browser from updating the screen. This makes your app feel more responsive. The majority of effects don’t need to happen synchronously. In the uncommon cases where they do (such as measuring the layout), there is a separate `useLayoutEffect` Hook with an API identical to `useEffect`.

---



<br />
<br />
<br />



## [Effects With Cleanup](https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup)

Some effects require cleanup.

If your effect returns a function, React will run it when it is time to clean up.

### [Effect Cleanup Example](https://reactjs.org/docs/hooks-effect.html#example-using-hooks-1)

```jsx
useEffect(() => {
    const onResize = () => console.log('Resize')
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
})
```

Every effect may return a function that cleans up after it.

React performs the cleanup when the component unmounts. However, effects run for every render and not just once. This is why React also cleans up effects from the previous render before running the effects next time.



<br />
<br />
<br />



## [Effects Run on Each Update](https://reactjs.org/docs/hooks-effect.html#explanation-why-effects-run-on-each-update)

The effect cleanup phase happens after every re-render, and not just once during unmounting.

```jsx
const [isOnline, setIsOnline] = useState(null)

useEffect(() => {
    const onStatusChange = status => setIsOnline(status.isOnline)
    ChatAPI.subscribeToFriendStatus(props.friend.id, onStatusChange)
    return () => ChatAPI.unsubscribeFromFriendStatus(props.friend.id, onStatusChange)
})

if (isOnline === null) {
    return 'Loading...'
}
return isOnline ? 'Online' : 'Offline'
```

This example `FriendStatus` component displays whether a friend is online or not. It reads `friend.id` from `props`, and **if it was a class effect**, subscribes to the friend status after the component mounts, and unsubscribes during unmounting, and so creating bugs, unless we add a `componentDidUpdate` to unsubscribes & re-subscribes on each update.

**But in case of hook effect**, there is no special code for handling updates because useEffect handles them by default. It cleans up the previous effects before applying the next effects.



<br />
<br />
<br />



## [Tips for Using Effect](https://reactjs.org/docs/hooks-effect.html#tips-for-using-effects)

### Use Multiple Effects to Separate Concerns

This lets us separate unrelated logic into different effects.
React will apply every effect used by the component, in the order they were specified.

### [Optimizing Performance by Skipping Effects](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects)

You can tell React to skip applying an effect if certain values haven’t changed between re-renders. To do so, pass an array as an optional second argument to `useEffect`:

```jsx
useEffect(() => {
    document.title = `Count: ${count}`
}, [count]) // Only re-run the effect if count changes
```

Each time our component re-renders, React will compare `[count]` from the previous render. If all items in the array are the same, React would skip the effect. However, React will re-run the effect even if just one of the items in the array is different.

This also works for effects that have a cleanup phase:

```jsx
useEffect(() => {
    const onStatusChange = status => setIsOnline(status.isOnline)
    ChatAPI.subscribeToFriendStatus(props.friend.id, onStatusChange)
    return () => ChatAPI.unsubscribeFromFriendStatus(props.friend.id, onStatusChange)
}, [props.friend.id]) // Only re-subscribe if props.friend.id changes
```

---
**NOTE**

If you use this optimization, make sure the array includes **all values from the component scope (such as props and state) that change over time and that are used by the effect**. Otherwise, your code will reference stale values from previous renders.

If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array as a second argument. This tells React that your effect doesn’t depend on *any* values from props or state, so it never needs to re-run.

If you pass an empty array, the props and state inside the effect will always have their initial values. While passing [] as the second argument is closer to the familiar `componentDidMount` & `componentWillUnmount` mental model, there are usually [better solutions](https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies) to avoid re-running effects too often. Also, don’t forget that React defers running `useEffect` until after the browser has painted, so doing extra work is less of a problem.

---
