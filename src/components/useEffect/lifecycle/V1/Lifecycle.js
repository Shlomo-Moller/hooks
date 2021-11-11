import { useState } from 'react'
import LifecycleChild from './LifecycleChild'

const Lifecycle = () => {

    const [show, setShow] = useState(false)

    const toggle = () => setShow(prev => !prev)

    return (
        <div className='lifecycle'>
            <input type='button' value={(show ? 'REMOVE' : 'RENDER') + ' ELEMENT'} onClick={toggle} />
            {show && <LifecycleChild />}
        </div>
    )
}

export default Lifecycle
