import {  useState, useEffect } from 'react'

const LifecycleChild = () => {

    const [value, setValue] = useState(0)

    const toggle = () => setValue(prev => prev ? 0 : 1)

    useEffect(() => {
        console.log('Value:', value, '- This runs after first render only, & always have the initial props & state')
        return () => console.log('Value:', value, '- This runs before removal only, & always have the initial props & state')
    }, [])

    useEffect(() => {
        console.log('Value:', value, '- This runs after first render & after each re-render')
        return () => console.log('Value:', value, '- This runs before each re-render & before removal')
    })

    return (
        <div className='lifecycle-child'>
            Value: {value}
            <input type='button' value='Toggle' onClick={toggle} />
        </div>
    )
}

export default LifecycleChild
