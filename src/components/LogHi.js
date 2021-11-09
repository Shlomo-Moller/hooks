import { useEffect } from 'react'

const LogHi = () => {

    useEffect(() => console.log('Hi'))

    return "I'm logging 'Hi' (inspect console)"
}

export default LogHi
