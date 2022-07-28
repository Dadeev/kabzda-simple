import {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

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

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChangeHandler}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type={"checkbox"} checked={parentValue} onChange={onChangeHandler}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChangeHandler}>
        <option>none</option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Kiev</option>
    </select>
}
export const ControlledInputWithSomeValue = () => <input value={'it-incubator'}/>

