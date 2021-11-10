import FriendListItem from './FriendListItem'
import friends from './friends'

const FriendsList = () => {
    return (
        <ul className='friends-list'>
            {friends.map(friend => <FriendListItem friend={friend} />)}
        </ul>
    )
}

export default FriendsList
