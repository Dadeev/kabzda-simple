import React, {useEffect, useState} from 'react'
import {cleanup} from "@testing-library/react";


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

export const ResetEffectExample = () => {
    let [counter, setCounter] = useState(1)

    console.log('ResetEffectExample')

    useEffect(() => {
        console.log('Effect occured' + counter)
        return () => {
            console.log('Reset effect' + counter)
        }
    }, [counter])

    const increase = () => {
        setCounter(counter + 1)
    }
    return <div>
        Hello, counter is : {counter}
        <button onClick={increase}>+1</button>
    </div>
}

export const KeysTracketExample = () => {
    let [text, setText] = useState('')

    console.log('ResetEffectExample' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        document.addEventListener('keypress', handler)
        return () => {
            document.removeEventListener('keypress', handler)
        }
    }, [text])

    return <div>
        Typed text: {text}
    </div>
}


export const SetIntervalExample = () => {
    let [counter, setCounter] = useState('')

    console.log('ResetEffectExample')

    useEffect(() => {
        let id = setTimeout(() => {
            setCounter(state => state + 1)
        })
        return () => {
            clearTimeout(id)
        }
    }, [])

    return <div>
        Typed text: {counter}
    </div>
}