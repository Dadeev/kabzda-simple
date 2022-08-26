import React, {useMemo, useState} from 'react'

function generateData() {
    console.log('generateData')
    return 1; // difficult counting
}

export const Lesson20Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(generateData) // [1, function(newValue){}]
    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}