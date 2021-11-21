import { useState } from 'react'
import CodeExample from '../CodeExample'
import Child from './Child'

const Parent = () => {

    console.log('Rendering Parent')

    const [show, setShow] = useState(false)

    const toggle = () => {
        console.log('Clicked "' + (show ? 'REMOVE' : 'RENDER') + ' CHILD"')
        setShow(prev => !prev)
    }

    return (
        <div className='parent lifecycle'>

            <div style={{ width: '150px', fontSize: '13px' }}>
               Inspect web browser's console window while playing around with this element & its child
            </div>

            <input type='button' value={(show ? 'REMOVE' : 'RENDER') + ' CHILD'} onClick={toggle} />
            {show && (
                <CodeExample title='Child'>
                    <Child />
                </CodeExample>
            )}
        </div>
    )
}

export default Parent
