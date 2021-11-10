import friends from '../../Custom Hooks/friends'

const StatusControls = () => {
    return (
        <div className='status-controls'>
            {friends.map(
                f => (
                    <label key={f.id}>
                        <input type='checkbox' id={'friend-status-' + f.id} />
                        Connect {f.name}<br />
                    </label>
                )
            )}
        </div>
    )
}

export default StatusControls
