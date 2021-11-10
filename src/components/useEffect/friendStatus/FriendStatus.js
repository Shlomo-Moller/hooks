import { useEffect, useState } from 'react'
import {ChatAPI} from './util'

const FriendStatus = ({ friend, className }) => {

    const [isOnline, setIsOnline] = useState(null)

    useEffect(() => {
        const onStatusChange = status => setIsOnline(status.isOnline)
        ChatAPI.subscribeToFriendStatus(friend?.id, onStatusChange)
        return () => ChatAPI.unsubscribeFromFriendStatus(friend?.id, onStatusChange)
    })

    return (
        <b className={'friend-status ' + (className || '')}>
            {isOnline === null ? 'Loading...' : (isOnline ? 'Online' : 'Offline')}
        </b>
    )
}

export default FriendStatus
