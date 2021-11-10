import useFriendStatus from './useFriendStatus'

const FriendStatusV2 = ({ friend }) => {
    const isOnline = useFriendStatus(friend.id)

    if (isOnline === null)
        return 'Loading...'
    return isOnline ? 'Online' : 'Offline'
}


export default FriendStatusV2
