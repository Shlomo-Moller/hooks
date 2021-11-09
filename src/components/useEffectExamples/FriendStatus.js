import { useEffect, useState } from 'react'

const FriendStatus = ({ friend }) => {

    const [isOnline, setIsOnline] = useState(null)

    useEffect(() => {
        const onStatusChange = status => setIsOnline(status.isOnline)
        ChatAPI.subscribeToFriendStatus(friend.id, onStatusChange)
        return () => ChatAPI.unsubscribeFromFriendStatus(friend.id, onStatusChange)
    })

    return (
        <div className='friend-status'>
            <div>ID: {friend.id}</div>
            <div>Status: {isOnline === null ? 'Loading...' : (isOnline ? 'Online' : 'Offline')}</div>
        </div>
    )
}

export default FriendStatus
