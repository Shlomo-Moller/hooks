import { useEffect } from 'react'

const Point = ({ x, y }) => {

    useEffect(() => {
        console.log('Point did mount:', { x, y })
        return () => console.log('Point will unmount:', { x, y })
    }, [])

    useEffect(() => console.log('Point did update:', { x, y }))

    useEffect(() => console.log('x updated to:', x), [x])

    useEffect(() => console.log('y updated to:', y), [y])

    return (
        <div className='lifecycle-child'>
            {`{${x}, ${y}}`}
        </div>
    )
}

export default Point
