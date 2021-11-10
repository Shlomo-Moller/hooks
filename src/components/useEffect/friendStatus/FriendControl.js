import { useState } from 'react'
import FriendStatus from './FriendStatus'
import friends from './../../Custom Hooks/friends'

const FriendControl = () => {

    const [friend, setFriend] = useState(friends[0])

    const onChange = e => setFriend(friends[e.target.value - 1])

    return (
        <div className='friend-control'>

            Friend:{` `}
            <select value={friend?.id} onChange={onChange}>
                {friends.map(
                    f => (
                        <option value={f?.id} key={f?.id}>
                            {f?.name}
                        </option>
                    )
                )}
            </select>
            
            {` `}Status:{` `}
            {friends.map(
                f => (
                    <FriendStatus friend={f} className={f.id !== friend.id ? 'no-display' : ''} key={f.id} />
                )
            )}
            
        </div>
    )
}

export default FriendControl
