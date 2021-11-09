import './Fieldset.css'

const Fieldset = ({children, legend}) => {
    return (
        <fieldset className='fieldset'>
            <legend>{legend}</legend>
            {children}
        </fieldset>
    )
}

export default Fieldset
