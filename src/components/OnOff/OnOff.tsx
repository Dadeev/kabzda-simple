import React from 'react';

type OnOffType = {
    value: boolean
}
export const OnOff2 = (props: OnOffType) => {
    if (props.value) {
        return (
            <div>
                <button style={{color: "green"}}>on</button>
                <button>off</button>
                <button style={{color: "green"}}>circle</button>
            </div>
        )
    } else {
        return (
            <div>
                <button>on</button>
                <button style={{color: 'red'}}>off</button>
                <button style={{color: "red"}}>circle</button>
            </div>
        )
    }
}

export const OnOff = (props: OnOffType) => {
    if (props.value) {
        return (
            <div>
                <button style={{color: "green"}}>on</button>
                <button>off</button>
                <button style={{color: "green"}}>circle</button>
            </div>
        )
    } else {
        return (
            <div>
                <button>on</button>
                <button style={{color: 'red'}}>off</button>
                <button style={{color: "red"}}>circle</button>
            </div>
        )
    }
}