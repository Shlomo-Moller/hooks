const ChatAPI = {
    subscribeToFriendStatus: (friendId, onStatusChange) => {
        const checkbox = document.getElementById('friend-status-' + friendId)
        checkbox?.addEventListener('change', () => onStatusChange({ isOnline: checkbox.checked }))
    },
    unsubscribeFromFriendStatus: (friendId, onStatusChange) => {
        const checkbox = document.getElementById('friend-status-' + friendId)
        checkbox?.removeEventListener('change', () => onStatusChange({ isOnline: checkbox.checked }))
    },
}

const friend = { id: 1 }

export {ChatAPI, friend}
