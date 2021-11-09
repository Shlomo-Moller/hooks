import { useEffect } from 'react'

const HookRuleTest = props => {

    useEffect(() => {
        console.log(props.name)
    }, [])

    return "I'm testing the React Hooks rules (inspect console)"
}

export default HookRuleTest
