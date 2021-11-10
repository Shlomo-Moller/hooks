import { useEffect } from 'react'

const Cleanup = () => {

    useEffect(() => {
        const onResize = () => console.log('Resize')
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    })

    return "I log a message when browser resize (resize browser window & inspect console)"
}

export default Cleanup
