import { useEffect, useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)
    
    useEffect(() => {
        document.title = `Count: ${count}`
    }, [count])

    return (
        <div className='counter'>
            <p>Count: {count}</p>
            <input type='button' value='INCREMENT' onClick={() => setCount(prev => prev + 1)} />
        </div>
    )
}

export default Counter
