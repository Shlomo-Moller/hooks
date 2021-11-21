import './CodeExample.css'

const CodeExample = ({children, title}) => {
    return (
        <div className='code-example'>
            <div className='c-ex-heading'>{title}</div>
            <div className='c-ex-body'>{children}</div>
        </div>
    )
}

export default CodeExample
