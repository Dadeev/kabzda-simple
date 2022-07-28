import {ChangeEvent, useRef, useState} from "react";

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }
    return <>
        <input onChange={onChangeHandler}/> - {value}
    </>
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const onSaveHandler = () => {
        const el = inputRef.current
        setValue(el!.value)
    }
    return <>
        <input ref={inputRef}/>
        <button onClick={onSaveHandler}>save
        </button>
        - actual value: {value}
    </>
}

export const ControlledInputWithSomeValue = () => <input value={'it-incubator'}/>

