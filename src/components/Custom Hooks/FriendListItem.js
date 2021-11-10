import useFriendStatus from './useFriendStatus'

const FriendListItem = ({ friend }) => {
    const isOnline = useFriendStatus(friend.id)

    return (
        <li style={{ color: isOnline ? 'green' : 'red' }}>
            {friend.name}
        </li>
    )
}

export default FriendListItem
