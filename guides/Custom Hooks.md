# [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)

Building your own Hooks lets you extract component logic into reusable functions.

Sometimes, we want to reuse some stateful logic between components. Traditionally, there were two popular solutions to this problem: *HOC* and *render props*. Custom Hooks let you do this, but without adding more components to your tree.

**A custom Hook is a JS function whose name starts with ”`use`” and that may call other Hooks.**

Unlike a React component, a custom Hook doesn’t need to have a specific signature. We can decide what it takes as arguments, and what, if anything, it should return. In other words, it’s just like a normal function. Its name should always start with `use` so that you can tell at a glance that the rules of Hooks apply to it.

**Custom Hooks are a convention that naturally follows from the design of Hooks, rather than a React feature.**

Custom Hooks are a mechanism to reuse *stateful logic*, but every time you use a custom Hook, all state and effects inside of it are fully isolated.

Each *call* to a Hook gets isolated state.



<br />
<br />
<br />



## Example

Consider this `FriendStatus` component from a chat application that displays a message indicating whether a friend is online or offline:

```jsx
const FriendStatus = props => {
    const [isOnline, setIsOnline] = useState(null)

    useEffect(() => {
        const onStatusChange = status => setIsOnline(status.isOnline)
        ChatAPI.subscribeToFriendStatus(props.friend.id, onStatusChange)
        return () => ChatAPI.unsubscribeFromFriendStatus(props.friend.id, onStatusChange)
    })

    if (isOnline === null)
        return 'Loading...'
    return isOnline ? 'Online' : 'Offline'
}
```

Now let’s say that our chat application also has a contact list, and we want to render names of online users with a green color. We could copy and paste similar logic above into our `FriendListItem` component but it wouldn’t be ideal:

```jsx
const FriendListItem = props => {
    const [isOnline, setIsOnline] = useState(null)

    useEffect(() => {
        const onStatusChange = status => setIsOnline(status.isOnline)
        ChatAPI.subscribeToFriendStatus(props.friend.id, onStatusChange)
        return () => ChatAPI.unsubscribeFromFriendStatus(props.friend.id, onStatusChange)
    })

    return (
        <li style={{ color: isOnline ? 'green' : 'black' }}>
            {props.friend.name}
        </li>
    )
}
```

Instead, we’d like to share this logic between `FriendStatus` and `FriendListItem` (to reuse this subscription logic in another component).

First, we’ll extract this logic into a custom Hook called `useFriendStatus`:

```jsx
const useFriendStatus = friendID => {
    const [isOnline, setIsOnline] = useState(null)
    
    const onStatusChange = status => setIsOnline(status.isOnline)
    
    useEffect(() => {
        ChatAPI.subscribeToFriendStatus(friendID, onStatusChange)
        return () => ChatAPI.unsubscribeFromFriendStatus(friendID, onStatusChange)
    })

    return isOnline
}
```

It takes `friendID` as an argument, and returns whether our friend is online.

Now we can use it from both components:

```jsx
const FriendStatus = props => {
    const isOnline = useFriendStatus(props.friend.id)

    if (isOnline === null)
        return 'Loading...'
    return isOnline ? 'Online' : 'Offline'
}

const FriendListItem = props => {
    const isOnline = useFriendStatus(props.friend.id)

    return (
        <li style={{ color: isOnline ? 'green' : 'black' }}>
            {props.friend.name}
        </li>
    )
}
```
