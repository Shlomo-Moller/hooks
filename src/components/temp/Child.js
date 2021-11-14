import { useState, useEffect } from 'react'

const Child = () => {

    console.log('Rendering Child')

    const [value, setValue] = useState(0)

    const toggle = () => {
        console.log('Clicked "Toggle"', value)
        setValue(prev => prev ? 0 : 1)
    }

    useEffect(() => {

        // Empty array means the effect doesn't depend on any prop or state value,
        // meaning it only use the initial values
        
        console.log('Child mounted', value) // runs after mounting
        return () => console.log('Child unmounts', value) // runs before unmounting
    }, [])

    useEffect(() => {
        console.log('Child updated', value) // runs after each update in props & state
        return () => console.log('Child updates', value) // runs before each update in props & state
    })

    return (
        <div className='child'>
            <input type='button' value='Toggle' onClick={toggle} />
        </div>
    )
}

export default Child
