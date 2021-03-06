# A Review On [`useEffect`](https://reactjs.org/docs/hooks-effect.html)

The *Effect Hook* lets you perform side effects in function components.

Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.



<br />
<br />
<br />



## `useEffect` in a Component's Lifecycle 

### To sum up the `Functional Component Lifecycle.md` guide:

A functional component's lifecycle...:
- starts with the **first render**,
- may step through some updates - **re-renders**,
- and ends with its own **removal**.

Note: A render, or re-render (update), not necessarily ends up with a visual change in the browser window, or in any displayed content.
It is a management of the VDOM's values and state, which is a derivative of the React elements' props and states.

### Functional Component With Effect

`useEffect` lets us define a component reaction to any of the three phases of its element's lifecycle:

- render
- update
- removal

In more details, we can set a function to run...:

- after React mounts (adds) the element to the DOM (after *first render*)
- before React applies the element's updates to the DOM (before *re-render*)
- after React applies the element's updates to the DOM (after *re-render*)
- before React unmounts (removes) the element from the DOM (before *removal*)

`useEffect` receives two arguments:

1. The function to run **after the first render or an update**
1. The dependencies array

An effect's dependencies define what is considered as a triggering update.
By default, the effect depend on all of the element's props & state values, and triggers when any of them changes.
But when sending an array as the second argument, the effect only consider what is inside this array.
If the array is empty, then the effect is independent of all the element's props and state values.
In this case, the effect only depends on the element's mere existence: it reacts only to mount and unmount.

The function `useEffect` receives may return another function to run **before an update or the removal**.

So:

- **The function the effect receives** runs **after** an update, meaning: after the **first render** & before any **re-render**.
- **The function returned from the function the effect receives** runs **before** an update, meaning: before any **re-render** & before **removal**.
- An effect **with no array** depends on all of the element's props & state values, & so runs with the update of **any prop or state**.
- An effect **with an array** depends only on what's inside it, & so runs with the update of **any of the dependencies**.
- An effect **with an empty array** doesn't depend on any prop or state, & so **has only the initial props & state values**, but still depend on the component's mere existence, & so runs with **first render (mount)** & **removal (unmount)**.

So:

- The effect' function, with **no** array, runs **after mounting & after each update**.
- The effect' function, with an array, runs **after mounting & after each dependency update**.
- The effect' function, with an **empty** array, runs **after mounting only, using only the initial props & state**.
- The function **returned** by the effect' function, with **no** array, runs **before each update & before removal**.
- The function **returned** by the effect' function, with an array, runs **before each dependency update & before removal**.
- The function **returned** by the effect' function, **with an empty array**, runs **before removal only, using only the initial props & state**.



<br />
<br />
<br />


## Simulation

Consider the next component:

```jsx
const LifecycleExample = () => {

    const [value, setValue] = useState(0)

    const toggle = () => setValue(prev => prev ? 0 : 1)

    useEffect(() => {
        console.log('Value:', value, '- This runs after first render only, & always have the initial props & state')
        return () => console.log('Value:', value, '- This runs before removal only, & always have the initial props & state')
    }, [])

    useEffect(() => {
        console.log('Value:', value, '- This runs after first render & after each re-render')
        return () => console.log('Value:', value, '- This runs before each re-render & before removal')
    })

    return (
        <div>
            Value: {value}
            <input type='button' value='Toggle' onClick={toggle} />
        </div>
    )
}
```

Now let's use it in another component that controls whether LifecycleExample renders or not:

```jsx
const [show, setShow] = useState(false)

const toggle = () => setShow(prev => !prev)

return (
    <div className='lifecycle'>
        <input type='button' value={(show ? 'REMOVE' : 'RENDER') + ' ELEMENT'} onClick={toggle} />
        {show && <LifecycleChild />}
    </div>
)
```



<br />
<br />
<br />



## [Effect Hook](https://reactjs.org/docs/hooks-overview.html#effect-hook)

When you call `useEffect`, you???re telling React to run your ???effect??? function after flushing changes to the DOM. Effects are declared inside the component so they have access to its props and state. By default, React runs the effects after every render ??? *including* the first render.

Effects may also optionally specify how to ???clean up??? after them by returning a function. This function runs when the component unmounts, as well as before re-running the effect due to a subsequent render, unless you tell React to skip the effect.



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
        <input type='button' value='INCREMENT' onClick={() => setCount(prev => prev + 1)} />
    </div>
)
```

React remembers the function you passed - our ???effect??? - and call it later after performing the DOM updates.

Placing `useEffect` inside the component lets us access its state variables & props right from the effect.

By default, **`useEffect` run after every render** (both after the first render *and* after every update).

When React renders our component, it will remember the effect we used, and then run our effect after updating the DOM. This happens for every render, including the first one.

The function passed to `useEffect` is going to be **different on every render**. This lets us read the `count` value from inside the effect without worrying about it getting stale. Every time we re-render, we schedule a different effect, replacing the previous one. In a way, this makes the effects behave more like a part of the render result ??? each effect ???belongs??? to a particular render.

---
**NOTE**

Unlike `componentDidMount` or `componentDidUpdate`, effects scheduled with `useEffect` don???t block the browser from updating the screen. This makes your app feel more responsive. The majority of effects don???t need to happen synchronously. In the uncommon cases where they do (such as measuring the layout), there is a separate `useLayoutEffect` Hook with an API identical to `useEffect`.

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

if (isOnline === null)
    return 'Loading...'
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

You can tell React to skip applying an effect if certain values haven???t changed between re-renders. To do so, pass an array as an optional second argument to `useEffect`:

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

If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array as a second argument. This tells React that your effect doesn???t depend on *any* values from props or state, so it never needs to re-run.

If you pass an empty array, the props and state inside the effect will always have their initial values. While passing [] as the second argument is closer to the familiar `componentDidMount` & `componentWillUnmount` mental model, there are usually [better solutions](https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies) to avoid re-running effects too often. Also, don???t forget that React defers running `useEffect` until after the browser has painted, so doing extra work is less of a problem.

---



<br />
<br />
<br />



## Lifecycle Example

```jsx
const Point = ({ x, y }) => {

    useEffect(() => {
        console.log('Point did mount:', { x, y })
        return () => console.log('Point will unmount:', { x, y })
    }, [])

    useEffect(() => console.log('Point did update:', { x, y }))

    useEffect(() => console.log('x updated to:', x), [x])

    useEffect(() => console.log('y updated to:', y), [y])

    return (
        <div className='lifecycle-child'>
            {`{${x}, ${y}}`}
        </div>
    )
}
```

Wrap it in a container that controls the state of the Point's {x, y} values:

```jsx
const Lifecycle = () => {

    const [value, setValue] = useState({ x: 0, y: 0 })

    const [show, setShow] = useState(false)

    const up    = () => setValue(prev => ({ x: prev.x, y: prev.y + 1 }))
    const left  = () => setValue(prev => ({ x: prev.x - 1, y: prev.y }))
    const right = () => setValue(prev => ({ x: prev.x + 1, y: prev.y }))
    const down  = () => setValue(prev => ({ x: prev.x, y: prev.y - 1 }))

    return (
        <div className='lifecycle'>

            <input type='button'
                   value={(show ? 'Hide' : 'Show') + ' point'}
                   onClick={() => setShow(prev => !prev)} />

            {show && (
                <table>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><input type='button' value={`\u2191`} onClick={up} /></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><input type='button' value={`\u2190`} onClick={left} /></td>
                            <td><Point x={value.x} y={value.y} /></td>
                            <td><input type='button' value={`\u2192`} onClick={right} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type='button' value={`\u2193`} onClick={down} /></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            )}

        </div>
    )
}
```
