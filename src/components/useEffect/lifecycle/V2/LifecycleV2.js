import { useState } from 'react'
import Point from './Point'
import './LifecycleV2.css'

const LifecycleV2 = () => {

    const [value, setValue] = useState({ x: 0, y: 0 })

    const [show, setShow] = useState(false)

    const up    = () => setValue(prev => ({ x: prev.x, y: prev.y + 1 }))
    const left  = () => setValue(prev => ({ x: prev.x - 1, y: prev.y }))
    const right = () => setValue(prev => ({ x: prev.x + 1, y: prev.y }))
    const down  = () => setValue(prev => ({ x: prev.x, y: prev.y - 1 }))

    return (
        <div className='lifecycle'>

            <div className='lifecycle-hint'>
                <h4>Inspect the web browser' console window while doing the following:</h4>
                <li>Toggle between showing and hiding the Point component.</li>
                <li>Change its (x, y) value.</li>
                <li>After changing its value, hide the Point component and show it again.</li>
            </div>

            <input type='button'
                   value={(show ? 'Hide' : 'Show') + ' point'}
                   onClick={() => setShow(prev => !prev)} />

            {show && (
                <table>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><input type='button' value={`\u2191`} onClick={up} /></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><input type='button' value={`\u2190`} onClick={left} /></td>
                            <td><Point x={value.x} y={value.y} /></td>
                            <td><input type='button' value={`\u2192`} onClick={right} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type='button' value={`\u2193`} onClick={down} /></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            )}

        </div>
    )
}

export default LifecycleV2
