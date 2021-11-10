import { useState, useEffect } from 'react'
import { ChatAPI } from '../useEffect/friendStatus/util'

const useFriendStatus = friendID => {
    const [isOnline, setIsOnline] = useState(null)

    const onStatusChange = status => setIsOnline(status.isOnline)

    useEffect(() => {
        ChatAPI.subscribeToFriendStatus(friendID, onStatusChange)
        return () => ChatAPI.unsubscribeFromFriendStatus(friendID, onStatusChange)
    })

    return isOnline
}

export default useFriendStatus
