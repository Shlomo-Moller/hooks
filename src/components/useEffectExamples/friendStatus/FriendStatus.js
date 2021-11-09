import { useEffect, useState } from 'react'
import {ChatAPI} from './util'

const FriendStatus = ({ friend }) => {

    const [isOnline, setIsOnline] = useState(null)

    useEffect(() => {
        const onStatusChange = status => setIsOnline(status.isOnline)
        ChatAPI.subscribeToFriendStatus(friend.id, onStatusChange)
        return () => ChatAPI.unsubscribeFromFriendStatus(friend.id, onStatusChange)
    })

    if (isOnline === null)
        return 'Loading...'
    return isOnline ? 'Online' : 'Offline'
}

export default FriendStatus
