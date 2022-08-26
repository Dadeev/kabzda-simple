import React, {useEffect, useMemo, useState} from 'react'


export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1) // [1, function(newValue){}]
    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every time')
        document.title = 'User'
    })
    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = 'User'
    }, [])
    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = 'User'
    }, [counter])
    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1) // [1, function(newValue){}]
    let [time, setTime] = useState('time...')
    console.log('SetTimeoutExample')

    useEffect(() => {
        setInterval(() => {
            let date = new Date;
            setTime(date.toLocaleTimeString())
        }, 1000)

    }, [])
    return <>
        Hello, the global time is : {time}
    </>
}